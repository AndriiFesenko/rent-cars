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
        // get user's language from browser and rebuild site for user's language
        this.model.adaptUserLangSite();

        this.header.filterCars = (clas) => this.model.filterElementsByClass(clas);
        this.header.rebuildCarsList = (sClass) => this.content.renderElement(sClass);
        this.header.createButton = () => this.content.createButton();
        this.header.conditionsTemplate = (userLang) => this.aside.conditionsTemplate(userLang);
        this.header.paymentsMethodTemplate = (userLang) => this.aside.paymentsMethodTemplate(userLang);
        this.header.transferConditions = (userLang) => this.aside.transferConditions(userLang);
        this.header.aboutCompanyTemplate = (userLang) => this.aside.aboutCompanyTemplate(userLang);
        this.header.setActiveClass = (e) => this.aside.setActiveClass(e);
        this.header.getSavedLang = () => this.model.getSavedLang();

        this.content.findCar = (name) => this.model.findElement(name);
        this.content.findMin = (obj) => this.model.findMin(obj);
        this.content.getSavedLang = () => this.model.getSavedLang();

        this.footer.showRentCarsList = (e) => this.header.showRentCarsList(e);
        this.footer.pageAnimate = (e) => this.header.pageAnimate(e);
        this.footer.showInfo = (e) => this.header.showInfo(e);

        this.aside.showInfo = (e) => this.header.showInfo(e);
        
        this.model.renderElement = (arrCars, userLang) => this.content.renderElement(arrCars, userLang)
    }

}