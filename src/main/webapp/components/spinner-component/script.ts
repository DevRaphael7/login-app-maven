export class SpinnerComponent {

    constructor() { 
        console.log((document.querySelector('[loading]') as HTMLElement))
    }

    public exibirLoading(enable: boolean, callback: () => any) {
        if(enable){
            (document.querySelector('[loading]') as HTMLElement).classList.remove('hide');
            callback();
        } else {
            (document.querySelector('[loading]') as HTMLElement).classList.add('hide');
            callback();
        }
    }
}