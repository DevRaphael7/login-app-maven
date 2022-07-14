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
var usuarioHtmlInput = document.querySelector("[usuario]");
var senhaHtmlInput = document.querySelector("[senha]");
var TokenService = /** @class */ (function () {
    function TokenService() {
        this.endPoint = false ? 'https://login-register-app-node.herokuapp.com/api/login' : 'http://localhost:9000/api/login';
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
    TokenService.prototype.requestTokenApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, token, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.setJsonMimeTypeInOptionsRequest();
                        return [4 /*yield*/, fetch(this.endPoint, this.optionsRequest)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (response.ok) {
                            token = data.token;
                            window.localStorage.setItem('token', token);
                            this.token = token;
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        console.log(ex_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return TokenService;
}());
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        var _this = this;
        this.urlApi = false ? 'https://login-register-app-node.herokuapp.com/api/loginUser' : 'http://localhost:9000/api/loginUser';
        this.getNome = function () { return _this.nome; };
        this.getSenha = function () { return _this.senha; };
        this.formHtml = document.querySelector("[formLogin]");
        this.nome = "";
        this.senha = "";
        this.optionsRequest = {};
        this.formHtml.addEventListener('submit', function (e) { return e.preventDefault(); });
        this.errorMessage = document.querySelector('[errorMessage]');
        this.token = new TokenService();
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
            var checkGetToken, response, data, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.exibirLoading(true);
                        return [4 /*yield*/, this.token.requestTokenApi()];
                    case 1:
                        checkGetToken = _a.sent();
                        this.setJsonMimeTypeInOptionsRequest({
                            name: this.nome,
                            password: this.senha
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!checkGetToken)
                            throw Error('Error na  requisição do token');
                        return [4 /*yield*/, fetch(this.urlApi, this.optionsRequest)];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _a.sent();
                        if (!response.ok) {
                            this.setErrorMessage(data.message);
                            this.exibirLoading(false);
                            return [2 /*return*/];
                        }
                        console.log(data);
                        this.exibirLoading(false);
                        return [3 /*break*/, 6];
                    case 5:
                        ex_2 = _a.sent();
                        console.log(ex_2);
                        this.setErrorMessage('Ops ocorreu um erro ' + ex_2);
                        this.exibirLoading(false);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.exibirLoading = function (enable) {
        if (enable) {
            document.querySelector('[loading]').classList.remove('hide');
            document.querySelector('[card-login]').classList.add('hide');
        }
        else {
            document.querySelector('[loading]').classList.add('hide');
            document.querySelector('[card-login]').classList.remove('hide');
        }
    };
    LoginPage.prototype.setErrorMessage = function (message) {
        this.errorMessage.textContent = message;
    };
    return LoginPage;
}());
var loginPage = new LoginPage();
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
