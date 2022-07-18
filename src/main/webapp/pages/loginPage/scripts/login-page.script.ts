import { fetch } from 'cross-fetch';
import { User } from '../../../models/user.model';
import { ResponseApi } from '../../../models/response-api.model';
import { PopupComponent } from '../../../components/popup/script';
import { TokenService } from '../../../services/token.service';
import { SpinnerComponent } from '../../../components/spinner-component/script';

const btnLogin = document.getElementById("btn-login") as HTMLElement;
const usuarioHtmlInput = document.querySelector("[usuario]") as HTMLElement;
const senhaHtmlInput = document.querySelector("[senha]") as HTMLElement;
const goToLoginBtn = document.querySelector("[btn-goToLogin]") as HTMLElement;

class LoginPage {

    private nome: string;
    private senha: string;
    private formHtml: HTMLElement;
    private optionsRequest: any;
    private errorMessage: HTMLElement;
    private sucessMessage: HTMLElement;
    private token: TokenService;
    private spinner: SpinnerComponent
    private popup: PopupComponent

    private urlApi = false ? 
        'https://login-register-app-node.herokuapp.com/api/loginUser' : 'http://localhost:9000/api/loginUser';

    constructor() {
        this.formHtml = document.querySelector("[formLogin]") as HTMLElement;
        this.nome = ""
        this.senha = "";
        this.optionsRequest = {};
        this.formHtml.addEventListener('submit', e => e.preventDefault());
        this.errorMessage = document.querySelector('[errorMessage]') as HTMLElement;
        this.sucessMessage = document.querySelector('[sucessMessage]') as HTMLElement;
        this.token = new TokenService();
        this.spinner = new SpinnerComponent();
        this.popup = new PopupComponent();
    }

    public getNome = () => this.nome;
    public getSenha = () => this.senha;
    public getFormHtml = () => this.formHtml;

    public setNome(nome: string) {
        if(!nome) return;
        this.nome = nome
    }

    public setSenha(senha: string){
        if(!senha) return;
        this.senha = senha
    }

    private setJsonMimeTypeInOptionsRequest(user: User) {
        this.optionsRequest = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token.getToken()
            }
        };
    }

    private exibirLoading(value: boolean) {
        if(value){
            this.spinner.exibirLoading(true, () => (document.querySelector('[card-login]') as HTMLElement).classList.add('hide'))
            
        } else {
            this.spinner.exibirLoading(false, () => (document.querySelector('[card-login]') as HTMLElement).classList.remove('hide'));
        }
    }

    public async requestLoginApi(): Promise<void> {
        [this.errorMessage.innerHTML, this.sucessMessage.innerHTML] = ["", ""];

        this.exibirLoading(true);
        
        await this.token.requestTokenApi();
        this.setJsonMimeTypeInOptionsRequest({
            name: this.nome,
            password: this.senha
        })

        try{    
            const response = await fetch(this.urlApi, this.optionsRequest);
            const data = await response.json();

            if(response.status == 401) {
                await this.token.requestTokenApi(false);
                setTimeout(async () => await this.requestLoginApi(), 1200)
                return;
            }

            if(!response.ok){
                this.popup.exibirPopUp(true)
                this.setErrorMessage((data as ResponseApi).message)
                this.popup.setMessagePopUp((data as ResponseApi).message)
                this.popup.exibirPopUp(true)
                this.exibirLoading(false);
                return;
            }
            
            this.sucessMessage.innerHTML = (data as ResponseApi).message;
            this.exibirLoading(false);
        } catch(ex) {
            console.log(ex)
            this.setErrorMessage('Ops ocorreu um erro ' + ex);
            this.exibirLoading(false);
        }
    }

    private setErrorMessage(message: string) {
        this.errorMessage.textContent = message;
    }

    public showLogin() {
        this.spinner.exibirLoading(true, () => 
        (document.querySelector('[card-register]') as HTMLElement).classList.add('hide'))
        setTimeout(() => {
            this.spinner.exibirLoading(false , () => 
            (document.querySelector("[card-login]") as HTMLElement).classList.remove("hide"));
        }, 2000)
    }
}

const loginPage = new LoginPage();

usuarioHtmlInput.addEventListener('keyup', (e: any) => loginPage.setNome(e.target.value));
senhaHtmlInput.addEventListener('keyup', (e: any) => loginPage.setSenha(e.target.value));

btnLogin.addEventListener('click', () => {
    loginPage.requestLoginApi();
})

goToLoginBtn.addEventListener('click', () => {
    loginPage.showLogin();
})