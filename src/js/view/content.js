'use strict'
export class Content {
    constructor(arrCars, contacts) {
        this.arrCars = arrCars;
        this.contacts = contacts;
        this.wrapper = document.getElementById('wrapper');
        this.mainMenuButtons = document.querySelector('.main-menu-buttons');
        this.dialogWrapper = document.querySelector('.dialog-wrapper');
        this.body = document.querySelector('body');
        this.html = document.querySelector('html');
        this.showCars();

        this.wrapper.addEventListener('click', (e) => this.onCarClick(e));
        this.mainMenuButtons.addEventListener('click', () => this.onMainMenuBtnClick());

        $(this.dialogWrapper).on('click','.ui-button', (e) => this.closePopup(e));
        $(this.dialogWrapper).on('click', '.dialog-img-wrapper > div > img', (e) => this.changeMainImg(e));
        $(this.wrapper).on('click', '#makeAnOrder', (e) => this.onMakeAnOrderClick(e));
        $('body').on('keyup', (e) => this.onKeyUpEvent(e));
    }
    showCars() {
        this.renderElement(this.arrCars);
    }
    renderElement(element) {
        let templates = element.map((current) => this.template(current));
        let html = templates.join('');
        this.wrapper.innerHTML = html;
        // this.wrapper.innerHTML = element.map((current) => {
        //                 return this.template(current) 
        // }).join('');
    }
    onCarClick(e) {
        let $target = $(e.target);
        // check if our click was not on "make an order" button
        if($target.attr('id') != 'makeAnOrder' && $target.attr('class') != 'wrapper') {
            // check on what car was click
            let $carName = this.takeCarName(e);
            let element = this.findCar($carName);
            let content = this.dialogTemplate(element);
            this.showPopup("drop");
            this.setDialogContent(content, element.name);
            // hide scroll for body
            this.changeScrollState();
        }
    }
    changeScrollState() {
        this.body.classList.contains('noScrolling') ?
            this.body.classList.remove('noScrolling') 
            : this.body.classList.add('noScrolling')
    }
    takeCarName(e) {
        return $(e.target).closest('.block').find('.info').find('h2').text();
    }
    onMakeAnOrderClick(e) {
        // take name of car where user has clicked
        let $carName = this.takeCarName(e);
        // set title 
        let title = 'Вы хотите заказать :';
        //set content
        let content = this.makeAnOrderTemplate($carName);
        this.showPopup();
        // changing height and width of popup by added new class
        $('.ui-dialog').addClass('makeAnOrderPopup');
        this.setDialogContent(content, title);
        // hide scroll for body
        this.changeScrollState();
    }
    
    showPopup(type) {
        this.setSettingsToPopup(type);
        // replace popup window to our container 
        this.replaceDialogWindow();
        // this.makeNewCloseButton();
        $('#dialog').dialog('open');
    }
    replaceDialogWindow() {
        let uiDialog = document.querySelector('.ui-dialog');
        this.dialogWrapper.appendChild(uiDialog);
    }
    setDialogContent(content, title) {
        let dialogContent = document.getElementById('dialog');
        // set title
        $('#dialog').dialog({
            title: title
        })
        // set content
        dialogContent.innerHTML = content;
    }
    setSettingsToPopup(type) {
        $(this.dialogWrapper).css({
            display: 'flex'
        });
        $('#dialog').dialog({
            draggable: false,
            autoOpen: false,
            buttons: [
                {
                    click: () => {
                        $(this).dialog('close');
                    }
                }
            ],
            show: {
              effect: type,
              duration: 1000
            },
            hide: {
              effect: type,
              duration: 0
            }
          });
    }
    onKeyUpEvent(e) {
        // check if our modal is open
        this.dialogWrapper.style.display === 'flex' ?
                e.which == 27 && this.closePopup()
                : null;
    }
    closePopup() {
        // hide popup background 
        $(this.dialogWrapper).css({
            display: 'none'
        });
        if($('.ui-dialog').hasClass('makeAnOrderPopup')) {
            $('.ui-dialog').removeClass('makeAnOrderPopup');
        }
        // add possibility to scroll the page 
        this.changeScrollState();
    }
    changeMainImg(e) {
        // set not active class to all images
        this.setNotActiveClass();
        // set active class to clicked image
        this.setActiveClass(e);
        // change main image on clicked image
        this.replaceMainImg(e);
    }
    replaceMainImg(e) {
        let $mainImg = $('.main-place-img').find('img');
        let $activeImgSrc = $(e.target).attr('src');
        $mainImg.attr('src', $activeImgSrc);
    }
    setNotActiveClass() {
        let dialogImgWrapper = document.querySelector('.dialog-img-wrapper');
        [].forEach.call(dialogImgWrapper.children, (current) => {
            [].forEach.call(current.children, (element) => {
                element.className = 'notActive';
            })
        })
    }
    setActiveClass(e) {
        if(e.target.className === 'notActive') {
            e.target.className = 'active'
        }
    }
    onMainMenuBtnClick() {
        this.showCars();
        // remove show all cars button
        this.removeShowAllCarsButton();
    }
    removeShowAllCarsButton() {
        let input = this.mainMenuButtons.querySelector('input');
        this.mainMenuButtons.removeChild(input);
    }
    template(current) {
        $('.carParkTitle').html('Аренда VIP авто с водителем');
        return    `<div class="block" title="нажмите для более подробной информации">
                    <div class="image-box">
                        <img src="${current.src}">
                        <div class="show-more-info">
                            <img src="./src/images/magnifying-glass.png" alt="magnifying-glass">
                            <h3>Подробнее...</h3>
                        </div>
                    </div>
                    <div class="info">
                        <h2>${current.name}</h2>
                        <div class="pricelist">
                            <div>
                                <p>Аренда :</p>
                                <span>
                                    <img src="./src/images/priceIcon.png" alt="priceIcon">
                                    от ${current.price}₴/ч
                                </span>
                            </div>
                            <div>
                                <p>Трансфер :</p>
                                от ${Math.min(...Object.values(current.transferPrice))}₴
                            </div>
                            <div>
                                <input type="button" id="makeAnOrder" value="Заказать">
                            </div>
                        </div>
                    </div>
                </div>`
    }
    dialogTemplate(current) {
        return `<div class="dialog-img-container">
                    <div class="main-place-img">
                        <img src="${current.img.main}" alt="mainImg">
                    </div>
                    <div class="dialog-img-wrapper">
                    <div><img src="${current.img.first}" alt="" class="notActive"></div>
                    <div><img src="${current.img.second}" alt="" class="notActive"></div>
                    <div><img src="${current.img.third}" alt="" class="notActive"></div>
                    <div><img src="${current.img.fourth}" alt="" class="notActive"></div>
                    <div><img src="${current.img.fifth}" alt="" class="notActive"></div>
                    <div><img src="${current.img.main}" alt="" class="notActive"></div>
                    </div>
                </div>`.concat(this.CarTemplateinfo(current));
    }
    CarTemplateinfo (current) {
        return `<div class="dialog-info">
                    ${this.rentCarInfoTemplate(current)
                        + this.transferInfoTemplate(current)
                        + this.weddingInfoTemplate(current)
                        + this.specificationsTemplate(current)}
                </div>`
    }
    rentCarInfoTemplate(current) {
        return `<div class="title">
                        <h3><img src="./src/images/businessIcon.png" atl="businessIcon">Бизнес</h3>
                        <h4>от ${current.price} ₴/час</h4>
                   </div>
                    <div>
                        <p> от 10 часов - ${current.price} ₴/час </p>
                        <hr>
                        <p>${current.price * 10} ₴</p>
                    </div>
                    <div>
                        <p>Междугородние поездки - 1км</p>
                        <hr>
                        <p>${current.kmPrice} ₴</p>
                    </div>`
    }
    transferInfoTemplate(current) {
        return `<div class="title">
                        <h3><img src="./src/images/transferIcon.png" atl="transferIcon">Трансфер</h3>
                        <h4>от ${this.findMin(current.transferPrice)}₴/час</h4>
                    </div>
                    <div>
                        <p> Ж/Д Вокзал :</p>
                        <hr>
                        <p>${current.transferPrice.railway}₴</p>
                    </div>
                    <div>
                        <p> Борисполь :</p>
                        <hr>
                        <p>${current.transferPrice.borispol}₴</p>
                    </div>
                    <div>
                        <p> Жуляны :</p>
                        <hr>
                        <p>${current.transferPrice.zhulyany}₴</p>
                    </div>`
    }
    weddingInfoTemplate(current) {
        return `<div class="title">
                    <h3><img src="./src/images/flower-icon.png" atl="flower-icon">Свадьба</h3>
                    <h4>от ${current.weddingPrice.price} ₴/час</h4>
                </div>
                <div>
                    <p> От 5 часов + 1 час подачи:</p>
                    <hr>
                    <p>${current.weddingPrice.price * 6}₴</p>
                </div>
                <div>
                    <p> Украшение :</p>
                    <hr>
                    <p>от ${current.weddingPrice.decoration}₴</p>
                </div>`
    }
    specificationsTemplate(current) {
        return `<div class="specifications">
                    <span> год: <i>${current.specifications.year}</i></span>
                    <span> пассажиры: <i>${current.specifications.passangers} чел.</i></span>
                    <span> багаж: <i>${current.specifications.trunk} места</i></span>
                    <span> дет. кресло: <i>${current.specifications.childrenSit} ₴</i></span>
                </div>`
    }
    makeAnOrderTemplate(name) {
        return `<div class="contacts"> 
                    <h3>${name}</h3>
                    <p>Чтобы сделать заказ:</p>
                    <div>
                        наберите нас по номеру: <a href="tel: ${this.contacts[0].tel}">${this.contacts[0].showTel}</a>
                    </div>
                    <div> либо напишите нам: </div>
                    <a href="https://api.whatsapp.com/send?phone=${this.contacts[0].whatsApp}" class="whatsApp" target="_blank">
                        <img src="./src/images/whatsApp.png" alt="whatsApp.jpg">
                    </a>
                    <a href="viber://add?number=${this.contacts[0].whatsApp}" class="viber" target="_blank">
                        <img src="./src/images/viber.png" alt="viber.png">
                    </a>
                </div>`
    }
    createButton() {
        // creating button "show all cars"
        this.mainMenuButtons.innerHTML = `<input type="button" id="showRentCars" value="показать все авто">`;
    }
}