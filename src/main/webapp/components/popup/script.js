"use strict";
exports.__esModule = true;
exports.PopupComponent = void 0;
var okBtn = document.querySelector("[okBtn]");
var closeBtn = document.querySelector("[closeBtn]");
var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
        this.popUpHtml = document.querySelector("[popup-component]");
        this.messagePopUp = document.querySelector("[messagePopUp]");
        this.messagePopUp = document.querySelector('[messagePopUp]');
    }
    PopupComponent.prototype.exibirPopUp = function (value) {
        if (value)
            this.popUpHtml.classList.add("is-visible");
        else
            this.popUpHtml.classList.remove("is-visible");
    };
    PopupComponent.prototype.setMessagePopUp = function (message) {
        this.messagePopUp.textContent = message;
    };
    return PopupComponent;
}());
exports.PopupComponent = PopupComponent;
var popUp = new PopupComponent();
okBtn.addEventListener('click', function () {
    popUp.exibirPopUp(false);
});
closeBtn.addEventListener('click', function () {
    popUp.exibirPopUp(false);
});
