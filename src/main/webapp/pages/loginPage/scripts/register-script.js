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
// import { fetch } from 'cross-fetch';
var script_1 = require("../../../components/popup/script");
var script_2 = require("../../../components/spinner-component/script");
var token_service_1 = require("../../../services/token.service");
var btnRegister = document.getElementById("btn-cadastro");
var goToCadastrar = document.querySelector("[btn-goToCadastrar]");
var usuarioInput = document.querySelector("[usuarioCadastro]");
var emailInput = document.querySelector("[emailCadastro]");
var senhaInput = document.querySelector("[senhaCadastro]");
var idadeCadastro = document.querySelector("[idadeCadastro]");
var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
        var _this = this;
        this.endPoint = true ?
            'https://login-register-app-node.herokuapp.com/api/register' : 'http://localhost:9000/api/register';
        this.getFormHtml = function () { return _this.formHtml; };
        this.nome = "";
        this.password = "";
        this.age = "";
        this.email = "";
        this.errorMessage =
            this.formHtml = document.querySelector("[formRegister]");
        this.formHtml.addEventListener('submit', function (e) { return e.preventDefault(); });
        this.spinner = new script_2.SpinnerComponent();
        this.errorMessage = document.querySelector('[errorMessageRegister]');
        console.log(this.errorMessage);
        this.sucessMessage = document.querySelector('[sucessMessageRegister]');
        this.token = new token_service_1.TokenService();
        this.popup = new script_1.PopupComponent();
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
            var response, data, ex_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = ["", ""], this.errorMessage.innerHTML = _a[0], this.sucessMessage.innerHTML = _a[1];
                        this.spinner.exibirLoading(true, function () {
                            return document.querySelector('[card-register]').classList.add('hide');
                        });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.token.requestTokenApi()];
                    case 2:
                        _b.sent();
                        this.setJsonMimeTypeInOptionsRequest();
                        return [4 /*yield*/, fetch(this.endPoint, this.optionsRequest)];
                    case 3:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _b.sent();
                        if (response.ok) {
                            this.sucessMessage.innerHTML = data.message;
                            this.spinner.exibirLoading(false, function () {
                                document.querySelector('[card-register]').classList.remove('hide');
                            });
                            return [2 /*return*/];
                        }
                        this.errorMessage.innerHTML = data.message;
                        this.popup.setMessagePopUp(data.message);
                        this.popup.exibirPopUp(true);
                        this.spinner.exibirLoading(false, function () {
                            document.querySelector('[card-register]').classList.remove('hide');
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        ex_1 = _b.sent();
                        console.log(ex_1);
                        this.spinner.exibirLoading(false, function () {
                            document.querySelector('[card-register]').classList.remove('hide');
                        });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    RegisterPage.prototype.setEmail = function (email) {
        this.email = email;
    };
    RegisterPage.prototype.setSenha = function (senha) {
        this.password = senha;
    };
    RegisterPage.prototype.setAge = function (age) {
        this.age = age;
    };
    RegisterPage.prototype.getNome = function () {
        return this.nome;
    };
    RegisterPage.prototype.getEmail = function () {
        return this.email;
    };
    RegisterPage.prototype.getSenha = function () {
        return this.password;
    };
    RegisterPage.prototype.getAge = function () {
        return this.age;
    };
    return RegisterPage;
}());
var registerPage = new RegisterPage();
btnRegister.addEventListener('click', function () {
    registerPage.requestApi();
});
goToCadastrar.addEventListener('click', function () {
    registerPage.showCadastrar();
});
usuarioInput.addEventListener('keyup', function (e) { return registerPage.setNome(e.target.value); });
emailInput.addEventListener('keyup', function (e) { return registerPage.setEmail(e.target.value); });
senhaInput.addEventListener('keyup', function (e) { return registerPage.setSenha(e.target.value); });
idadeCadastro.addEventListener('keyup', function (e) { return registerPage.setAge(e.target.value); });
