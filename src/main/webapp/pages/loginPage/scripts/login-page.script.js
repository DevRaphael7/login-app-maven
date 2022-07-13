var btnLogin = document.getElementById("btn-login");
var usuarioHtmlInput = document.querySelector("[usuario]");
var senhaHtmlInput = document.querySelector("[senha]");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        var _this = this;
        this.getNome = function () { return _this.nome; };
        this.getSenha = function () { return _this.senha; };
        this.formHtml = document.querySelector("[formLogin]");
        this.nome = "";
        this.senha = "";
        this.formHtml.addEventListener('submit', function (e) { return e.preventDefault(); });
    }
    LoginPage.prototype.setNome = function (nome) {
        if (!nome)
            return;
        console.log(nome);
        this.nome += nome.replace("Key", "");
    };
    LoginPage.prototype.setSenha = function (senha) {
        if (!senha)
            return;
        this.senha += senha.replace("Key", "");
    };
    LoginPage.prototype.loginEvent = function () {
    };
    return LoginPage;
}());
var loginPage = new LoginPage();
usuarioHtmlInput.addEventListener('keydown', function (e) { return loginPage.setNome(e.code); });
senhaHtmlInput.addEventListener('keydown', function (e) { return loginPage.setSenha(e.code); });
btnLogin.addEventListener('click', function (e) {
    console.log(loginPage.getNome());
    console.log(loginPage.getSenha());
    e.preventDefault();
});
