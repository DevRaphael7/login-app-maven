// import { fetch } from 'cross-fetch';

const btnLogin = document.getElementById("btn-login") as HTMLElement;
const usuarioHtmlInput = document.querySelector("[usuario]") as HTMLElement;
const senhaHtmlInput = document.querySelector("[senha]") as HTMLElement;

const spinnerContainer = document.querySelector('[spinnerContainer]') as HTMLElement;

interface User {
    name: string;
    password: string;
}

interface ErrorResponse {
    code: number;
    message: string;
    operation: boolean;
}

class LoginPage{

    private nome: string;
    private senha: string;
    private formHtml: HTMLElement;
    private optionsRequest: any;
    private errorMessage: HTMLElement;

    constructor() {
        this.formHtml = document.querySelector("[formLogin]") as HTMLElement;
        this.nome = ""
        this.senha = "";
        this.optionsRequest = {};
        this.formHtml.addEventListener('submit', e => e.preventDefault());
        this.errorMessage = document.querySelector('[errorMessage]') as HTMLElement;
    }

    public getNome = () => this.nome;
    public getSenha = () => this.senha;

    public setNome(nome: string) {
        if(!nome) return;
        this.nome += nome.replace("Key", "");
    }

    public setSenha(senha: string){
        if(!senha) return;
        this.senha += senha.replace("Key", "");
    }

    private setJsonMimeTypeInOptionsRequest(user: User) {
        this.optionsRequest = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    public async requestLoginApi(): Promise<void> {
        this.exibirLoading(true);
        this.setJsonMimeTypeInOptionsRequest({
            name: this.nome,
            password: this.senha
        })

        try{
            const response = await fetch('https://login-register-app-node.herokuapp.com/api/loginUser', this.optionsRequest)
            const data = await response.json();
            if(!response.ok){
                this.setErrorMessage((data as ErrorResponse).message)
                return;
            }
            console.log(data)
            this.exibirLoading(false);
        } catch(ex) {
            console.log(ex)
            this.setErrorMessage('Ops ocorreu um erro na requisição');
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

usuarioHtmlInput.addEventListener('keydown', e => loginPage.setNome(e.code));
senhaHtmlInput.addEventListener('keydown', e => loginPage.setSenha(e.code));

btnLogin.addEventListener('click', () => {
    loginPage.requestLoginApi();
})
