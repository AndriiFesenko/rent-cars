'use strict'
export class Footer {
    constructor(contacts) {
        this.contacts = contacts;
        this.whatAppSrc = `https://api.whatsapp.com/send?phone=${this.contacts[0].whatsApp}`;
        this.viberSrc = `viber://add?number=${this.contacts[0].viber}`;
        
        this.ourPark = document.querySelector('.ourPark-block');
        this.tel = document.querySelectorAll('.contacts-block .tel a');
        this.whatsApp = document.querySelectorAll('.socialApps .whatsApp');
        this.viber = document.querySelectorAll('.socialApps .viber');
        this.information = document.querySelector('#footer .information-block');
        this.aboutCompany = document.querySelector('#footer .aboutUs-block');
        this.weOfferBlock = document.querySelector('#footer .weOffer-block');
        
        this.init();

        this.ourPark.addEventListener('click', (e) => this.showCar(e));

        this.information.addEventListener('click', (e) => this.showInfo(e));
        this.aboutCompany.addEventListener('click', (e) => this.showInfo(e));
        this.weOfferBlock.addEventListener('click', (e) => this.pageAnimate(e));
    }
    init() {
        $(this.tel).attr('href', `tel: ${this.contacts[0].tel}`);
        $(this.tel).html(this.contacts[0].showTel);
        $(this.whatsApp).attr('href', this.whatAppSrc);
        $(this.viber).attr('href', this.viberSrc);
    }
    showCar(e) {
        this.showRentCarsList(e);
        this.pageAnimate(e);
    }
}