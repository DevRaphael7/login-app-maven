"use strict";
exports.__esModule = true;
exports.SpinnerComponent = void 0;
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
exports.SpinnerComponent = SpinnerComponent;
