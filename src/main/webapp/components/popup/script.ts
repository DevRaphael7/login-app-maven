import { } from 'cross-fetch';

const okBtn = document.querySelector("[okBtn]") as HTMLElement;

export class PopupComponent {

    private popUpHtml = document.querySelector("[popup-component]") as HTMLElement;
    private messagePopUp: HTMLElement = document.querySelector("[messagePopUp]") as HTMLElement;

    constructor() {
        this.messagePopUp = document.querySelector('[messagePopUp]') as HTMLElement;
    }

    public exibirPopUp(value: boolean) {
        if(value)
            this.popUpHtml.classList.add("is-visible");
        else
            this.popUpHtml.classList.remove("is-visible");
    }

    public setMessagePopUp(message: string) {
        this.messagePopUp.textContent = message;
    }
}

const popUp: PopupComponent = new PopupComponent();

okBtn.addEventListener('click', () => {
    popUp.exibirPopUp(false)
})