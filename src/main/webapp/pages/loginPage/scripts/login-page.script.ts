// import { fetch } from 'cross-fetch';

const btnLogin = document.getElementById("btn-login") as HTMLElement;
const usuarioHtmlInput = document.querySelector("[usuario]") as HTMLElement;
const senhaHtmlInput = document.querySelector("[senha]") as HTMLElement;

interface User {
    name: string;
    password: string;
}

interface TokenResponse {
    currentDate: string;
    dateTimeExpire: string;
    token: string;
}

interface ErrorResponse {
    code: number;
    message: string;
    operation: boolean;
}

class TokenService {

    private token: string;
    private endPoint = false ? 'https://login-register-app-node.herokuapp.com/api/login' : 'http://localhost:9000/api/login';
    private optionsRequest: any;

    constructor() {
        this.token = "";
    }

    private setJsonMimeTypeInOptionsRequest() {
        this.optionsRequest = {
            method: 'POST',
            body: JSON.stringify({
                user: "@raphael",
                password: "123"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    public getToken(){
        return this.token;
    }
    public async requestTokenApi() {
        try{
            this.setJsonMimeTypeInOptionsRequest();
            const response = await fetch(this.endPoint, this.optionsRequest);
            const data = await response.json();
            if(response.ok){
                const token = (data as TokenResponse).token;
                window.localStorage.setItem('token', token);
                this.token = token;
                return true;
            } else {
                return false;
            }
        } catch(ex) {
            console.log(ex)
            return false;
        }
    }
}

class LoginPage{

    private nome: string;
    private senha: string;
    private formHtml: HTMLElement;
    private optionsRequest: any;
    private errorMessage: HTMLElement;
    private token: TokenService; 

    private urlApi = false ? 'https://login-register-app-node.herokuapp.com/api/loginUser' : 'http://localhost:9000/api/loginUser';

    constructor() {
        this.formHtml = document.querySelector("[formLogin]") as HTMLElement;
        this.nome = ""
        this.senha = "";
        this.optionsRequest = {};
        this.formHtml.addEventListener('submit', e => e.preventDefault());
        this.errorMessage = document.querySelector('[errorMessage]') as HTMLElement;
        this.token = new TokenService();
    }

    public getNome = () => this.nome;
    public getSenha = () => this.senha;

    public setNome(nome: string) {
        if(!nome) return;
        this.nome += nome
    }

    public setSenha(senha: string){
        if(!senha) return;
        this.senha += senha
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

    public async requestLoginApi(): Promise<void> {
        this.exibirLoading(true);
        
        const checkGetToken = await this.token.requestTokenApi();

        this.setJsonMimeTypeInOptionsRequest({
            name: this.nome,
            password: this.senha
        })

        try{
            if(!checkGetToken) throw Error('Error na  requisição do token');
            
            const response = await fetch(this.urlApi, this.optionsRequest)
            const data = await response.json();
            if(!response.ok){
                this.setErrorMessage((data as ErrorResponse).message)
                this.exibirLoading(false);
                return;
            }
            console.log(data);
            this.exibirLoading(false);
        } catch(ex) {
            console.log(ex)
            this.setErrorMessage('Ops ocorreu um erro ' + ex);
            this.exibirLoading(false);
        }
    }

    public exibirLoading(enable: boolean) {
        if(enable){
            (document.querySelector('[loading]') as HTMLElement).classList.remove('hide');
            (document.querySelector('[card-login]') as HTMLElement).classList.add('hide');
        } else {
            (document.querySelector('[loading]') as HTMLElement).classList.add('hide');
            (document.querySelector('[card-login]') as HTMLElement).classList.remove('hide');
        }
    }

    private setErrorMessage(message: string) {
        this.errorMessage.textContent = message;
    }
}

const loginPage = new LoginPage();

usuarioHtmlInput.addEventListener('keydown', e => {
    if(Number(e.keyCode) > 28 && Number(e.keyCode) < 112) {
        loginPage.setNome(e.key);
    }
});
senhaHtmlInput.addEventListener('keydown', e => {
    if(Number(e.keyCode) > 28 && Number(e.keyCode) < 112) {
        loginPage.setSenha(e.key)
    }
});

btnLogin.addEventListener('click', () => {
    loginPage.requestLoginApi();
})
