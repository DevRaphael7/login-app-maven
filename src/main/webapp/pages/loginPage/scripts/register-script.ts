// import { fetch } from 'cross-fetch';
import { SpinnerComponent } from '../../../components/spinner-component/script';
import { ResponseApi } from '../../../models/response-api.model';
import { User } from '../../../models/user.model';
import { TokenService } from '../../../services/token.service';

const btnRegister = document.getElementById("btn-cadastro") as HTMLElement;
const goToCadastrar = document.querySelector("[btn-goToCadastrar]") as HTMLElement;

const usuarioInput = document.querySelector("[usuarioCadastro]") as HTMLElement;
const emailInput = document.querySelector("[emailCadastro]") as HTMLElement;
const senhaInput = document.querySelector("[senhaCadastro]") as HTMLElement;
const idadeCadastro = document.querySelector("[idadeCadastro]") as HTMLElement;

class RegisterPage {

    private nome: string;
    private password: string;
    private age: string;
    private email: string;
    private formHtml: HTMLElement;
    private spinner: SpinnerComponent;
    private errorMessage: HTMLElement;
    private sucessMessage: HTMLElement;
    private optionsRequest: any;
    private token: TokenService;

    private endPoint = false ? 
        'https://login-register-app-node.herokuapp.com/api/register' : 'http://localhost:9000/api/register';

    constructor() { 
        this.nome = "";
        this.password = "";
        this.age = "";
        this.email = "";
        this.errorMessage = 
        this.formHtml = document.querySelector("[formRegister]") as HTMLElement;
        this.formHtml.addEventListener('submit', e => e.preventDefault());
        this.spinner = new SpinnerComponent();
        this.errorMessage = document.querySelector('[errorMessageRegister]') as HTMLElement;
        console.log(this.errorMessage)
        this.sucessMessage = document.querySelector('[sucessMessageRegister]') as HTMLElement;
        this.token = new TokenService();
    }

    getFormHtml = () => this.formHtml;

    public showCadastrar() {
        this.spinner.exibirLoading(true, () => 
        (document.querySelector('[card-login]') as HTMLElement).classList.add('hide'))
        setTimeout(() => {
            this.spinner.exibirLoading(false , () => 
            (document.querySelector("[card-register]") as HTMLElement).classList.remove("hide"));
        }, 2000)
    }

    private setJsonMimeTypeInOptionsRequest() {
        this.optionsRequest = {
            method: 'POST',
            body: JSON.stringify({
                name: this.nome,
                password: this.password,
                age: this.age,
                email: this.email
            } as User),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token.getToken()
            }
        };
    }

    public async requestApi() {
        this.spinner.exibirLoading(true, () => {
            (document.querySelector('[card-register]') as HTMLElement).classList.add('hide')
        })

        try{
            await this.token.requestTokenApi();
            this.setJsonMimeTypeInOptionsRequest()

            const response = await fetch(this.endPoint, this.optionsRequest);
            const data = await response.json();

            if(response.ok){
                this.sucessMessage.innerHTML = (data as ResponseApi).message;
                this.spinner.exibirLoading(false, () => {
                    (document.querySelector('[card-register]') as HTMLElement).classList.remove('hide')
                });
                return;
            }

            this.errorMessage.innerHTML = (data as ResponseApi).message;
            this.spinner.exibirLoading(false, () => {
                (document.querySelector('[card-register]') as HTMLElement).classList.remove('hide')
            });
        } catch(ex) {
            console.log(ex);
            this.spinner.exibirLoading(false, () => {
                (document.querySelector('[card-register]') as HTMLElement).classList.remove('hide')
            })
        }
    }

    public setNome(nome: string): void {
        this.nome += nome;
    }

    public setEmail(email: string){
        this.email += email;
    }

    public setSenha(senha: string){
        this.password += senha;
    }

    public setAge(age: string) {
        this.age += age;
    }

    public getNome(): string{
        return this.nome;
    }

    public getEmail() {
        return this.email;
    }

    public getSenha() {
        return this.password;
    }

    public getAge() {
        return this.age
    }
}

const registerPage = new RegisterPage();

btnRegister.addEventListener('click', () => {
    registerPage.requestApi();
})

goToCadastrar.addEventListener('click', () => {
    registerPage.showCadastrar();
})

usuarioInput.addEventListener('keydown', (e: any) => registerPage.setNome(e.target.value));
emailInput.addEventListener('keydown', (e: any) => registerPage.setEmail(e.target.value));
senhaInput.addEventListener('keydown', (e: any) => registerPage.setSenha(e.target.value));
idadeCadastro.addEventListener('keydown', (e: any) => registerPage.setAge(e.target.value));

