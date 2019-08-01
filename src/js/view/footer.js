export class Footer {
    constructor() {
        this.ourPark = document.querySelector('.ourPark');

        this.ourPark.addEventListener('click', (e) => this.showCar(e))
    }
    showCar(e) {
        this.showRentCarsList(e);
        this.pageAnimate(e);
    }
}