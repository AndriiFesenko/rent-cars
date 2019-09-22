'use strict'

import {Model} from '../model/model.js';
import {Content} from '../view/content.js';
import {Header} from '../view/header.js';
import {Footer} from '../view/footer.js';
import {Aside} from '../view/aside.js';

export default class Controller {
    constructor (){

        this.model = new Model;
        this.header = new Header(this.model.contacts);
        this.content = new Content(this.model.arrCars, this.model.contacts);
        this.footer = new Footer(this.model.contacts);
        this.aside = new Aside;

        this.header.filterCars = (clas) => this.model.filterElementsByClass(clas);
        this.header.rebuildCarsList = (sClass) => this.content.renderElement(sClass);
        this.header.createButton = () => this.content.createButton();
        this.header.conditionsTemplate = () => this.aside.conditionsTemplate();
        this.header.paymentsMethodTemplate = () => this.aside.paymentsMethodTemplate();
        this.header.transferConditions = () => this.aside.transferConditions();
        this.header.aboutCompanyTemplate = () => this.aside.aboutCompanyTemplate();
        this.header.setActiveClass = (e) => this.aside.setActiveClass(e);
        // this.header.changeScrollState = () => this.content.changeScrollState();

        this.content.findCar = (name) => this.model.findElement(name);
        this.content.getContacts = () => this.model.getContacts();
        this.content.findMin = (obj) => this.model.findMin(obj);

        this.footer.showRentCarsList = (e) => this.header.showRentCarsList(e);
        this.footer.pageAnimate = (e) => this.header.pageAnimate(e);
        this.footer.showInfo = (e) => this.header.showInfo(e);
        // this.footer.whatsAppSrc = this.model.whatsAppSrc;
        this.footer.viberSrc = this.model.viberSrc;

        this.aside.showInfo = (e) => this.header.showInfo(e);
    }

}