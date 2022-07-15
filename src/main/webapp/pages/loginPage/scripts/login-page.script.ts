import { fetch } from 'cross-fetch';

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

interface responseApi {
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

    private getTokenInLocalStorage(): boolean {
        const token = window.localStorage.getItem('token');
        console.log(token)
        if(token) {
            this.token = token;
            return true;
        }
        return false;
    }

    public async requestTokenApi(): Promise<void> {
        if(this.getTokenInLocalStorage()) return;
        console.log('Gerando novo token...')
        try{
            this.setJsonMimeTypeInOptionsRequest();
            const response = await fetch(this.endPoint, this.optionsRequest);
            const data = await response.json();

            if(response.ok){
                const token = (data as TokenResponse).token;
                window.localStorage.setItem('token', token);
                this.token = token;
                return;
            } else return;
        } catch(ex) {
            console.log(ex)
            return;
        }
    }
}

class LoginPage {

    private nome: string;
    private senha: string;
    private formHtml: HTMLElement;
    private optionsRequest: any;
    private errorMessage: HTMLElement;
    private sucessMessage: HTMLElement;
    private token: TokenService; 

    private urlApi = false ? 'https://login-register-app-node.herokuapp.com/api/loginUser' : 'http://localhost:9000/api/loginUser';

    constructor() {
        this.formHtml = document.querySelector("[formLogin]") as HTMLElement;
        this.nome = ""
        this.senha = "";
        this.optionsRequest = {};
        this.formHtml.addEventListener('submit', e => e.preventDefault());
        this.errorMessage = document.querySelector('[errorMessage]') as HTMLElement;
        this.sucessMessage = document.querySelector('[sucessMessage]') as HTMLElement;
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

            if(response.status == 401){
                await this.token.requestTokenApi();
                this.exibirLoading(false)
                this.requestLoginApi();
                return;
            }

            if(!response.ok){
                this.setErrorMessage((data as responseApi).message)
                this.exibirLoading(false);
                return;
            }
            
            this.sucessMessage.innerHTML = (data as responseApi).message;
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
