'use strict'
export class Footer {
    constructor(contacts) {
        this.contacts = contacts;
        this.ourPark = document.querySelector('.ourPark-block');
        this.tel = document.querySelectorAll('.contacts-block .tel a');
        this.whatsApp = document.querySelectorAll('.socialApps .whatsApp');
        this.viber = document.querySelectorAll('.socialApps .viber');
        this.information = document.querySelector('#footer .information-block');
        this.aboutCompany = document.querySelector('#footer .aboutUs-block');
        this.weOfferBlock = document.querySelector('#footer .weOffer-block');
        
        this.setContacts();

        this.ourPark.addEventListener('click', (e) => this.showCar(e));

        this.information.addEventListener('click', (e) => this.showInfo(e));
        this.aboutCompany.addEventListener('click', (e) => this.showInfo(e));
        this.weOfferBlock.addEventListener('click', (e) => this.pageAnimate(e));
    }
    setContacts() {
        $(this.tel).attr('href', `tel: ${this.contacts[0].tel}`);
        $(this.tel).html(this.contacts[0].showTel);
        $(this.whatsApp).attr('href', this.contacts[0].whatsAppSrc);
        $(this.viber).attr('href', this.contacts[0].viberSrc);
    }
    showCar(e) {
        this.showRentCarsList(e);
        this.pageAnimate(e);
    }
}