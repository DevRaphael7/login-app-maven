import { } from 'cross-fetch';

const okBtn = document.querySelector("[okBtn]") as HTMLElement;

class PopupComponent {

    private popUpHtml = document.querySelector("[popup-component]") as HTMLElement;
    private messagePopUp: HTMLElement;

    constructor() {
        this.messagePopUp = document.querySelector('[messagePopUp]') as HTMLElement;
    }

    public exibirPopUp(value: boolean) {
        if(value)
            this.popUpHtml.classList.add("is-visible");
        else
            this.popUpHtml.classList.remove("is-visible");
    }
}

const popUp: PopupComponent = new PopupComponent();

okBtn.addEventListener('click', () => {
    popUp.exibirPopUp(false)
})