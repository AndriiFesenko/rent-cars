
import {Model} from '../model/model.js';
import {Content} from '../view/content.js';
import {Header} from '../view/header.js';
import {Footer} from '../view/footer.js';

export default class Controller {
    constructor (){

        this.model = new Model;
        this.header = new Header;
        this.content = new Content(this.model.arrCars, this.model.contacts);
        this.footer = new Footer(this.model.contacts);
        

        this.header.filterCars = (clas) => this.model.filterElementsByClass(clas);
        this.header.rebuildCarsList = (sClass) => this.content.renderElement(sClass);
        this.header.createButton = () => this.content.createButton();

        this.content.findCar = (name) => this.model.findElement(name);
        this.content.getContacts = () => this.model.getContacts();
        this.content.findMin = (obj) => this.model.findMin(obj);

        this.footer.showRentCarsList = (e) => this.header.showRentCarsList(e);
        this.footer.pageAnimate = (e) => this.header.pageAnimate(e);
    }

}