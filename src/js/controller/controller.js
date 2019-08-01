
import {Model} from '../model/model.js';
import {Content} from '../view/content.js';
import {Header} from '../view/header.js';
import {Footer} from '../view/footer.js';

export default class Controller {
    constructor (){

        this.model = new Model;
        this.header = new Header;
        this.content = new Content(this.model.arrCars);
        this.footer = new Footer;
        

        this.header.findCars = (clas) => this.model.filterElementsByClass(clas);
        this.header.changeState = (clas, rent, trans) => this.model.changeState(clas, rent, trans);
        this.header.rebuildCarsList = (sClass) => this.content.renderElement(sClass);
        
        this.content.findCar = (name) => this.model.findElement(name);
        // this.content.findCar = (clas,color) => this.model.findElement(clas,color);
        this.content.changeState = (rent, trans) => this.model.changeState(rent, trans);
        this.footer.showRentCarsList = (e) => this.header.showRentCarsList(e);
        this.footer.pageAnimate = (e) => this.header.pageAnimate(e);
    }

}