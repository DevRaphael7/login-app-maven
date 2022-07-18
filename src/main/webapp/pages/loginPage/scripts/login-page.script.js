"use strict";
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
exports.__esModule = true;
var cross_fetch_1 = require("cross-fetch");
var script_1 = require("../../../components/popup/script");
var token_service_1 = require("../../../services/token.service");
var script_2 = require("../../../components/spinner-component/script");
var btnLogin = document.getElementById("btn-login");
var usuarioHtmlInput = document.querySelector("[usuario]");
var senhaHtmlInput = document.querySelector("[senha]");
var goToLoginBtn = document.querySelector("[btn-goToLogin]");
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
        this.token = new token_service_1.TokenService();
        this.spinner = new script_2.SpinnerComponent();
        this.popup = new script_1.PopupComponent();
    }
    LoginPage.prototype.setNome = function (nome) {
        if (!nome)
            return;
        this.nome = nome;
    };
    LoginPage.prototype.setSenha = function (senha) {
        if (!senha)
            return;
        this.senha = senha;
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
    LoginPage.prototype.exibirLoading = function (value) {
        if (value) {
            this.spinner.exibirLoading(true, function () { return document.querySelector('[card-login]').classList.add('hide'); });
        }
        else {
            this.spinner.exibirLoading(false, function () { return document.querySelector('[card-login]').classList.remove('hide'); });
        }
    };
    LoginPage.prototype.requestLoginApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, ex_1;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = ["", ""], this.errorMessage.innerHTML = _a[0], this.sucessMessage.innerHTML = _a[1];
                        this.exibirLoading(true);
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
                        return [4 /*yield*/, (0, cross_fetch_1.fetch)(this.urlApi, this.optionsRequest)];
                    case 3:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _b.sent();
                        if (!(response.status == 401)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.token.requestTokenApi(false)];
                    case 5:
                        _b.sent();
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.requestLoginApi()];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }, 1200);
                        return [2 /*return*/];
                    case 6:
                        if (!response.ok) {
                            this.popup.exibirPopUp(true);
                            this.setErrorMessage(data.message);
                            this.exibirLoading(false);
                            return [2 /*return*/];
                        }
                        this.sucessMessage.innerHTML = data.message;
                        this.exibirLoading(false);
                        return [3 /*break*/, 8];
                    case 7:
                        ex_1 = _b.sent();
                        console.log(ex_1);
                        this.setErrorMessage('Ops ocorreu um erro ' + ex_1);
                        this.exibirLoading(false);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.setErrorMessage = function (message) {
        this.errorMessage.textContent = message;
    };
    LoginPage.prototype.showLogin = function () {
        var _this = this;
        this.spinner.exibirLoading(true, function () {
            return document.querySelector('[card-register]').classList.add('hide');
        });
        setTimeout(function () {
            _this.spinner.exibirLoading(false, function () {
                return document.querySelector("[card-login]").classList.remove("hide");
            });
        }, 2000);
    };
    return LoginPage;
}());
var loginPage = new LoginPage();
usuarioHtmlInput.addEventListener('keydown', function (e) { return loginPage.setNome(e.target.value); });
senhaHtmlInput.addEventListener('keydown', function (e) { return loginPage.setSenha(e.target.value); });
btnLogin.addEventListener('click', function () {
    loginPage.requestLoginApi();
});
goToLoginBtn.addEventListener('click', function () {
    loginPage.showLogin();
});
