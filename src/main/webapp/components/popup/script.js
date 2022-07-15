// import { } from 'cross-fetch';
var okBtn = document.querySelector("[okBtn]");
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
var popUp = new PopupComponent();
okBtn.addEventListener('click', function () {
    popUp.exibirPopUp(false);
});
