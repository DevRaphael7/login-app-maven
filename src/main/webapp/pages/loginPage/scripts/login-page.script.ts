// import { fetch } from 'cross-fetch';

const btnLogin = document.getElementById("btn-login") as HTMLElement;
const btnRegister = document.getElementById("btn-cadastro") as HTMLElement;
const usuarioHtmlInput = document.querySelector("[usuario]") as HTMLElement;
const senhaHtmlInput = document.querySelector("[senha]") as HTMLElement;

const goToCadastrar = document.querySelector("[btn-goToCadastrar]") as HTMLElement;

interface User {
    name: string;
    password: string;
    email?: string;
    age?: string;
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

class PopupComponent {

    private popUpHtml = document.querySelector("[popup-component]") as HTMLElement;

    constructor() {
        console.log(this.popUpHtml)
    }

    public exibirPopUp(value: boolean) {
        if(value)
            this.popUpHtml.classList.add("is-visible");
        else
            this.popUpHtml.classList.remove("is-visible");
    }
}

class TokenService {

    private token: string;
    private endPoint = false ? 
        'https://login-register-app-node.herokuapp.com/api/login' : 'http://localhost:9000/api/login';
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
        if(token) {
            this.token = token;
            return true;
        }
        return false;
    }

    public async requestTokenApi(validatedToken: boolean = true): Promise<void> {
        if(this.getTokenInLocalStorage() && validatedToken) return;
        console.log('Gerando novo token...');
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

class SpinnerComponent {

    constructor() { }

    public exibirLoading(enable: boolean, callback: () => any) {
        if(enable){
            (document.querySelector('[loading]') as HTMLElement).classList.remove('hide');
            callback();
        } else {
            (document.querySelector('[loading]') as HTMLElement).classList.add('hide');
            callback();
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

        this.spinner.exibirLoading(true, () => {
            (document.querySelector('[card-login]') as HTMLElement).classList.add('hide');
        });
        
        await this.token.requestTokenApi();
        this.setJsonMimeTypeInOptionsRequest({
            name: this.nome,
            password: this.senha
        })

        try{    
            const response = await fetch(this.urlApi, this.optionsRequest);
            const data = await response.json();

            // if(response.status == 401){
            //     await this.token.requestTokenApi(false);
            //     this.spinner.exibirLoading(false, () => {
            //         (document.querySelector('[card-login]') as HTMLElement).classList.remove('hide');
            //     })
            //     this.requestLoginApi();
            //     return;
            // }

            if(!response.ok){
                this.popup.exibirPopUp(true)
                this.setErrorMessage((data as responseApi).message)
                this.spinner.exibirLoading(false, () => {
                    (document.querySelector('[card-login]') as HTMLElement).classList.remove('hide');
                });
                return;
            }
            
            this.sucessMessage.innerHTML = (data as responseApi).message;
            this.spinner.exibirLoading(false, () => {
                (document.querySelector('[card-login]') as HTMLElement).classList.remove('hide');
            });
        } catch(ex) {
            console.log(ex)
            this.setErrorMessage('Ops ocorreu um erro ' + ex);
            this.spinner.exibirLoading(false, () => {
                (document.querySelector('[card-login]') as HTMLElement).classList.remove('hide');
            });
        }
    }

    private setErrorMessage(message: string) {
        this.errorMessage.textContent = message;
    }
}

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
                this.sucessMessage.innerHTML = (data as responseApi).message;
                this.spinner.exibirLoading(false, () => {
                    (document.querySelector('[card-register]') as HTMLElement).classList.remove('hide')
                });
                return;
            }

            this.errorMessage.innerHTML = (data as responseApi).message;
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
}

const loginPage = new LoginPage();
const registerPage = new RegisterPage();

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

btnRegister.addEventListener('click', () => {
    registerPage.requestApi();
})

goToCadastrar.addEventListener('click', () => {
    registerPage.showCadastrar();
})