import { TokenResponse } from '../models/token-response.model';

export class TokenService {

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