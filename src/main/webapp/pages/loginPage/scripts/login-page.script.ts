const btnLogin = document.getElementById("btn-login") as HTMLElement;
const usuarioHtmlInput = document.querySelector("[usuario]") as HTMLElement;
const senhaHtmlInput = document.querySelector("[senha]") as HTMLElement;

class LoginPage{

    private nome: string;
    private senha: string;
    private formHtml: HTMLElement;

    constructor() {
        this.formHtml = document.querySelector("[formLogin]") as HTMLElement;
        this.nome = ""
        this.senha = "";
        this.formHtml.addEventListener('submit', e => e.preventDefault());
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

    public loginEvent() {

    }
}

const loginPage = new LoginPage();

usuarioHtmlInput.addEventListener('keydown', e => loginPage.setNome(e.code));
senhaHtmlInput.addEventListener('keydown', e => loginPage.setSenha(e.code));

btnLogin.addEventListener('click', (e) => {
    console.log(loginPage.getNome());
    console.log(loginPage.getSenha());
    e.preventDefault();
})
