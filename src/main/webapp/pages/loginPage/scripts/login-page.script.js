// import { fetch } from 'cross-fetch';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var btnLogin = document.getElementById("btn-login");
var btnRegister = document.getElementById("btn-cadastro");
var usuarioHtmlInput = document.querySelector("[usuario]");
var senhaHtmlInput = document.querySelector("[senha]");
var goToCadastrar = document.querySelector("[btn-goToCadastrar]");
var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
        this.popUpHtml = document.querySelector("[popup-component]");
        console.log(this.popUpHtml);
    }
    PopupComponent.prototype.exibirPopUp = function (value) {
        if (value)
            this.popUpHtml.classList.add("is-visible");
        else
            this.popUpHtml.classList.remove("is-visible");
    };
    return PopupComponent;
}());
var TokenService = /** @class */ (function () {
    function TokenService() {
        this.endPoint = false ?
            'https://login-register-app-node.herokuapp.com/api/login' : 'http://localhost:9000/api/login';
        this.token = "";
    }
    TokenService.prototype.setJsonMimeTypeInOptionsRequest = function () {
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
    };
    TokenService.prototype.getToken = function () {
        return this.token;
    };
    TokenService.prototype.getTokenInLocalStorage = function () {
        var token = window.localStorage.getItem('token');
        if (token) {
            this.token = token;
            return true;
        }
        return false;
    };
    TokenService.prototype.requestTokenApi = function (validatedToken) {
        if (validatedToken === void 0) { validatedToken = true; }
        return __awaiter(this, void 0, void 0, function () {
            var response, data, token, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.getTokenInLocalStorage() && validatedToken)
                            return [2 /*return*/];
                        console.log('Gerando novo token...');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        this.setJsonMimeTypeInOptionsRequest();
                        return [4 /*yield*/, fetch(this.endPoint, this.optionsRequest)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        if (response.ok) {
                            token = data.token;
                            window.localStorage.setItem('token', token);
                            this.token = token;
                            return [2 /*return*/];
                        }
                        else
                            return [2 /*return*/];
                        return [3 /*break*/, 5];
                    case 4:
                        ex_1 = _a.sent();
                        console.log(ex_1);
                        return [2 /*return*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return TokenService;
}());
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.exibirLoading = function (enable, callback) {
        if (enable) {
            document.querySelector('[loading]').classList.remove('hide');
            callback();
        }
        else {
            document.querySelector('[loading]').classList.add('hide');
            callback();
        }
    };
    return SpinnerComponent;
}());
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        var _this = this;
        this.urlApi = false ?
            'https://login-register-app-node.herokuapp.com/api/loginUser' : 'http://localhost:9000/api/loginUser';
        this.getNome = function () { return _this.nome; };
        this.getSenha = function () { return _this.senha; };
        this.getFormHtml = function () { return _this.formHtml; };
        this.formHtml = document.querySelector("[formLogin]");
        this.nome = "";
        this.senha = "";
        this.optionsRequest = {};
        this.formHtml.addEventListener('submit', function (e) { return e.preventDefault(); });
        this.errorMessage = document.querySelector('[errorMessage]');
        this.sucessMessage = document.querySelector('[sucessMessage]');
        this.token = new TokenService();
        this.spinner = new SpinnerComponent();
        this.popup = new PopupComponent();
    }
    LoginPage.prototype.setNome = function (nome) {
        if (!nome)
            return;
        this.nome += nome;
    };
    LoginPage.prototype.setSenha = function (senha) {
        if (!senha)
            return;
        this.senha += senha;
    };
    LoginPage.prototype.setJsonMimeTypeInOptionsRequest = function (user) {
        this.optionsRequest = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token.getToken()
            }
        };
    };
    LoginPage.prototype.requestLoginApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, ex_2;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = ["", ""], this.errorMessage.innerHTML = _a[0], this.sucessMessage.innerHTML = _a[1];
                        this.spinner.exibirLoading(true, function () {
                            document.querySelector('[card-login]').classList.add('hide');
                        });
                        return [4 /*yield*/, this.token.requestTokenApi()];
                    case 1:
                        _b.sent();
                        this.setJsonMimeTypeInOptionsRequest({
                            name: this.nome,
                            password: this.senha
                        });
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, , 8]);
                        return [4 /*yield*/, fetch(this.urlApi, this.optionsRequest)];
                    case 3:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _b.sent();
                        if (!(response.status == 401)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.token.requestTokenApi(false)];
                    case 5:
                        _b.sent();
                        this.spinner.exibirLoading(false, function () {
                            document.querySelector('[card-login]').classList.remove('hide');
                        });
                        this.requestLoginApi();
                        return [2 /*return*/];
                    case 6:
                        if (!response.ok) {
                            this.popup.exibirPopUp(true);
                            this.setErrorMessage(data.message);
                            this.spinner.exibirLoading(false, function () {
                                document.querySelector('[card-login]').classList.remove('hide');
                            });
                            return [2 /*return*/];
                        }
                        this.sucessMessage.innerHTML = data.message;
                        this.spinner.exibirLoading(false, function () {
                            document.querySelector('[card-login]').classList.remove('hide');
                        });
                        return [3 /*break*/, 8];
                    case 7:
                        ex_2 = _b.sent();
                        console.log(ex_2);
                        this.setErrorMessage('Ops ocorreu um erro ' + ex_2);
                        this.spinner.exibirLoading(false, function () {
                            document.querySelector('[card-login]').classList.remove('hide');
                        });
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.setErrorMessage = function (message) {
        this.errorMessage.textContent = message;
    };
    return LoginPage;
}());
var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
        var _this = this;
        this.endPoint = false ?
            'https://login-register-app-node.herokuapp.com/api/register' : 'http://localhost:9000/api/register';
        this.getFormHtml = function () { return _this.formHtml; };
        this.nome = "";
        this.password = "";
        this.age = "";
        this.email = "";
        this.errorMessage =
            this.formHtml = document.querySelector("[formRegister]");
        this.formHtml.addEventListener('submit', function (e) { return e.preventDefault(); });
        this.spinner = new SpinnerComponent();
        this.errorMessage = document.querySelector('[errorMessageRegister]');
        console.log(this.errorMessage);
        this.sucessMessage = document.querySelector('[sucessMessageRegister]');
        this.token = new TokenService();
    }
    RegisterPage.prototype.showCadastrar = function () {
        var _this = this;
        this.spinner.exibirLoading(true, function () {
            return document.querySelector('[card-login]').classList.add('hide');
        });
        setTimeout(function () {
            _this.spinner.exibirLoading(false, function () {
                return document.querySelector("[card-register]").classList.remove("hide");
            });
        }, 2000);
    };
    RegisterPage.prototype.setJsonMimeTypeInOptionsRequest = function () {
        this.optionsRequest = {
            method: 'POST',
            body: JSON.stringify({
                name: this.nome,
                password: this.password,
                age: this.age,
                email: this.email
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token.getToken()
            }
        };
    };
    RegisterPage.prototype.requestApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinner.exibirLoading(true, function () {
                            document.querySelector('[card-register]').classList.add('hide');
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.token.requestTokenApi()];
                    case 2:
                        _a.sent();
                        this.setJsonMimeTypeInOptionsRequest();
                        return [4 /*yield*/, fetch(this.endPoint, this.optionsRequest)];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _a.sent();
                        if (response.ok) {
                            this.sucessMessage.innerHTML = data.message;
                            this.spinner.exibirLoading(false, function () {
                                document.querySelector('[card-register]').classList.remove('hide');
                            });
                            return [2 /*return*/];
                        }
                        this.errorMessage.innerHTML = data.message;
                        this.spinner.exibirLoading(false, function () {
                            document.querySelector('[card-register]').classList.remove('hide');
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        ex_3 = _a.sent();
                        console.log(ex_3);
                        this.spinner.exibirLoading(false, function () {
                            document.querySelector('[card-register]').classList.remove('hide');
                        });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return RegisterPage;
}());
var loginPage = new LoginPage();
var registerPage = new RegisterPage();
usuarioHtmlInput.addEventListener('keydown', function (e) {
    if (Number(e.keyCode) > 28 && Number(e.keyCode) < 112) {
        loginPage.setNome(e.key);
    }
});
senhaHtmlInput.addEventListener('keydown', function (e) {
    if (Number(e.keyCode) > 28 && Number(e.keyCode) < 112) {
        loginPage.setSenha(e.key);
    }
});
btnLogin.addEventListener('click', function () {
    loginPage.requestLoginApi();
});
btnRegister.addEventListener('click', function () {
    registerPage.requestApi();
});
goToCadastrar.addEventListener('click', function () {
    registerPage.showCadastrar();
});
