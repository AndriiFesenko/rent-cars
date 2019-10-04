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
        // this.adaptUserLangSite();

        this.wrapper.addEventListener('click', (e) => this.onCarClick(e));
        this.mainMenuButtons.addEventListener('click', () => this.onMainMenuBtnClick());

        $(this.dialogWrapper).on('click','.ui-button', (e) => this.closePopup(e));
        $(this.dialogWrapper).on('click', '.dialog-img-wrapper > div > img', (e) => this.changeMainImg(e));
        $(this.wrapper).on('click', '#makeAnOrder', (e) => this.onMakeAnOrderClick(e));
        $('body').on('keyup', (e) => this.onKeyUpEvent(e));
    }
    showCars() {
        // take user's language from the browser to show site on user's language
        let userLang = this.getUserLang();
        this.renderElement(this.arrCars, userLang);
    }
    renderElement(element, userLang) {
        let templates = element.map((current) => this.template(current, userLang));
        let html = templates.join('');
        this.wrapper.innerHTML = html;

        // let templates = element.map((current) => this.template(current));
        // let html = templates.join('');
        // this.wrapper.innerHTML = html;
    }
    getUserLang() {
        let userLang = navigator.language || navigator.languages;
        userLang = userLang.toUpperCase();
        return userLang;
    }
    onCarClick(e) {
        let $target = $(e.target);
        // get language from user browser or saved language by user
        let userLang = this.getSavedLang();
        // check if our click was not on "make an order" button
        if($target.attr('id') != 'makeAnOrder' && $target.attr('class') != 'wrapper') {
            // check on what car was click
            let $carName = this.takeCarName(e);
            let element = this.findCar($carName);
            let content = this.dialogTemplate(element, userLang);
            this.showPopup("drop");
            this.setDialogContent(content, element.name);
            // this.adaptUserLangSite();
            // hide scroll for body
            this.changeScrollState();
            // show scrolling finger on popup
            screen.width < 1024 && this.showArrowDown();
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
        let userLang = this.getSavedLang();
        // take name of car where user has clicked
        let $carName = this.takeCarName(e);
        // set title 
        let title = this.setTitle(userLang);
        //set content
        let content = this.makeAnOrderTemplate($carName, userLang);
        this.showPopup();
        // changing height and width of popup by added new class
        $('.ui-dialog').addClass('makeAnOrderPopup');
        this.setDialogContent(content, title);
        // hide scroll for body
        this.changeScrollState();
    }
    setTitle(userLang) {
        return userLang === 'RU' ? 'Вы хотите заказать :'
                :userLang === 'UK' ? 'Ви хочете замовити:'
                : userLang === 'EN' ? 'Do you want to order:'
                : 'Ви хочете замовити:' ;
    }
    showArrowDown() {
        let arrowDown = document.querySelector('.arrow-down');
        arrowDown.classList.add('active');
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
    template(current, userLang) {
        return    `<div class="block" 
                        title="${userLang === 'RU' ? 'нажмите для более подробной информации' 
                                : userLang === 'UK' ? 'натисніть для більш докладної інформації'
                                : userLang === 'EN' ? 'click for more details'
                                : 'натисніть для більш докладної інформації' }">
                    <div class="image-box">
                        <img src="${current.src}">
                        <div class="show-more-info">
                            <img src="./src/images/magnifying-glass.png" alt="magnifying-glass">
                            <h3>
                                ${userLang === 'RU' ? 'Подробнее...' 
                                : userLang === 'UK' ? 'Детальніше...'
                                : userLang === 'EN' ? 'More details...'
                                : 'Детальніше...' }
                            </h3>
                        </div>
                    </div>
                    <div class="info">
                        <h2>${current.name}</h2>
                        <div class="pricelist">
                            <div>
                                <p>
                                    ${userLang === 'RU' ? 'Аренда :'
                                    :userLang === 'UK' ? 'Оренда :'
                                    :userLang === 'EN' ? 'Rent :'
                                    : 'Оренда :'}
                                </p>
                                <span>
                                    <img src="./src/images/priceIcon.png" alt="priceIcon">
                                    ${userLang === 'RU' ? 'от ' + current.price + '₴'
                                    :userLang === 'UK' ? 'від ' + current.price + '₴'
                                    :userLang === 'EN' ? 'from ' + current.price + '₴'
                                    : 'від ' + current.price + '₴'} 
                                </span>
                            </div>
                            <div>
                                <p>
                                    ${userLang === 'RU' ? 'Трансфер :'
                                    :userLang === 'UK' ? 'Трансфер :'
                                    :userLang === 'EN' ? 'Transfer :'
                                    : 'Трансфер :'}
                                </p>
                                ${userLang === 'RU' ? 'от '
                                :userLang === 'UK' ? 'від '
                                :userLang === 'EN' ? 'from '
                                : 'від '} 
                                ${Math.min(...Object.values(current.transferPrice))}₴
                            </div>
                            <div>
                                <input 
                                    type="button" 
                                    id="makeAnOrder" 
                                    value="${userLang === 'RU' ? 'Заказать'
                                            :userLang === 'UK' ? 'Замовити'
                                            :userLang === 'EN' ? 'To order'
                                            : 'Замовити'}
                                ">
                            </div>
                        </div>
                    </div>
                </div>`
    }
    dialogTemplate(current, userLang) {
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
                    <div><img src="${current.img.main}" alt="" class="active"></div>
                    </div>
                </div>`.concat(this.CarTemplateinfo(current, userLang));
    }
    CarTemplateinfo (current, userLang) {
        return `<div class="dialog-info">
                    ${this.rentCarInfoTemplate(current, userLang)
                        + this.transferInfoTemplate(current, userLang)
                        + this.weddingInfoTemplate(current, userLang)
                        + this.specificationsTemplate(current, userLang)}
                </div>
                <div class="arrow-down">
                    <img src="./src/images/finger-touch.png" title="arrow-down">
                </div>`
    }
    rentCarInfoTemplate(current, userLang) {
        return `<div class="title">
                        <h3>
                            <img src="./src/images/businessIcon.png" atl="businessIcon">
                            ${userLang === 'RU' ? 'Бизнес'
                             :userLang === 'UK' ? 'Бізнес'
                             :userLang === 'EN' ? 'Business'
                             : 'Бізнес'}
                        </h3>
                        <h4>
                            ${userLang === 'RU' ? 'от ' + current.price + '₴/час'
                             :userLang === 'UK' ? 'від ' + current.price + '₴/год'
                             :userLang === 'EN' ? 'from ' + current.price + '₴/hour'
                             : 'від ' + current.price + '₴/год'}
                        </h4>
                   </div>
                    <div>
                        <p>
                            ${userLang === 'RU' ? ' от 10 часов - ' + current.price + '₴/час '
                            :userLang === 'UK' ? ' від 10 годин - ' + current.price + '₴/год '
                            :userLang === 'EN' ? ' from 10 hours - ' + current.price + '₴/hour '
                            : ' від 10 годин - ' + current.price + '₴/год '}
                        </p>
                        <hr>
                        <p>${current.price * 10} ₴</p>
                    </div>
                    <div>
                        <p>
                            ${userLang === 'RU' ? 'Междугородние поездки - 1км'
                             :userLang === 'UK' ? 'Міжміські поїздки - 1км'
                             :userLang === 'EN' ? 'Long-distance trips - 1km'
                             : 'Міжміські поїздки - 1км'}
                        </p>
                        <hr>
                        <p>${current.kmPrice} ₴</p>
                    </div>`
    }
    transferInfoTemplate(current, userLang) {
        return `<div class="title">
                        <h3>
                            <img src="./src/images/transferIcon.png" atl="transferIcon">
                            ${userLang === 'RU' ? 'Трансфер'
                            :userLang === 'UK' ? 'Трансфер'
                            :userLang === 'EN' ? 'Transfer'
                            : 'Трансфер :'}
                        </h3>
                        <h4>
                            ${userLang === 'RU' ? 'от ' + this.findMin(current.transferPrice) + '₴/час'
                            :userLang === 'UK' ? 'від ' + this.findMin(current.transferPrice) + '₴/год'
                            :userLang === 'EN' ? 'from ' + this.findMin(current.transferPrice) + '₴/hour'
                            : 'від ' + this.findMin(current.transferPrice) + '₴/год'}
                        </h4>
                    </div>
                    <div>
                        <p>
                            ${userLang === 'RU' ? 'Ж/Д Вокзал :'
                            :userLang === 'UK' ? 'Залізничний вокзал :'
                            :userLang === 'EN' ? 'Railway station :'
                            : 'Залізничний вокзал :'}
                         </p>
                        <hr>
                        <p>${current.transferPrice.railway}₴</p>
                    </div>
                    <div>
                        <p>
                            ${userLang === 'RU' ? 'Борисполь :'
                            :userLang === 'UK' ? 'Бориспіль:'
                            :userLang === 'EN' ? 'Borispol:'
                            : 'Бориспіль:'}
                         </p>
                        <hr>
                        <p>${current.transferPrice.borispol}₴</p>
                    </div>
                    <div>
                        <p>
                            ${userLang === 'RU' ? 'Жуляны :'
                            :userLang === 'UK' ? 'Жуляни:'
                            :userLang === 'EN' ? 'Zhuliany:'
                            : 'Жуляни:'}
                         </p>
                        <hr>
                        <p>${current.transferPrice.zhulyany}₴</p>
                    </div>`
    }
    weddingInfoTemplate(current, userLang) {
        return `<div class="title">
                    <h3>
                    <img src="./src/images/flower-icon.png" atl="flower-icon">
                        ${userLang === 'RU' ? 'Свадьба'
                        :userLang === 'UK' ? 'Весілля'
                        :userLang === 'EN' ? 'Wedding'
                        : 'Весілля'}
                    </h3>
                    <h4>
                        ${userLang === 'RU' ? 'от ' + current.weddingPrice.price + '₴/час'
                        :userLang === 'UK' ? 'від ' + current.weddingPrice.price + '₴/год'
                        :userLang === 'EN' ? 'from ' + current.weddingPrice.price + '₴/hour'
                        : 'від ' + current.weddingPrice.price + '₴/год'}
                    </h4>
                </div>
                <div>
                    <p> 
                        ${userLang === 'RU' ? 'От 5 часов + 1 час подачи:'
                        :userLang === 'UK' ? 'Від 5 годин + 1 година подачі:'
                        :userLang === 'EN' ? 'From 5 hours + 1 hour to get:'
                        : 'Від 5 годин + 1 година подачі:'}
                    </p>
                    <hr>
                    <p>${current.weddingPrice.price * 6}₴</p>
                </div>
                <div>
                    <p> 
                        ${userLang === 'RU' ? 'Украшение :'
                        :userLang === 'UK' ? 'Прикраса:'
                        :userLang === 'EN' ? 'Decoration:'
                        : 'Прикраса:'}
                    </p>
                    <hr>
                    <p>
                        ${userLang === 'RU' ? 'от ' + current.weddingPrice.decoration + '₴'
                        :userLang === 'UK' ? 'від ' + current.weddingPrice.decoration + '₴'
                        :userLang === 'EN' ? 'from ' + current.weddingPrice.decoration + '₴'
                        : 'від ' + current.weddingPrice.decoration + '₴'}
                    </p>
                </div>`
    }
    specificationsTemplate(current, userLang) {
        return `<div class="specifications">
                    <span>
                        ${userLang === 'RU' ? 'год: '
                        :userLang === 'UK' ? 'рік: '
                        :userLang === 'EN' ? 'year:'
                        : 'рік: '}
                        <i>${current.specifications.year}</i>
                     </span>
                    <span>
                        ${userLang === 'RU' ? 'пассажиры: <i>' + current.specifications.passangers + ' чел.</i>'
                        :userLang === 'UK' ? 'пасажири: <i>' + current.specifications.passangers + ' люд.</i>'
                        :userLang === 'EN' ? 'passengers: <i>' + current.specifications.passangers + ' per.</i>'
                        : 'пасажири: <i>' + current.specifications.passangers + 'люд.</i>'}
                     </span>
                    <span>
                        ${userLang === 'RU' ? 'багаж: <i>' + current.specifications.trunk + ' места</i>'
                        :userLang === 'UK' ? 'багаж: <i>' + current.specifications.trunk + ' місця</i>'
                        :userLang === 'EN' ? 'baggage: <i>' + current.specifications.trunk + ' places</i>'
                        : 'багаж: <i>' + current.specifications.trunk + ' місця</i>'}
                    </span>
                    <span>
                        ${userLang === 'RU' ? 'дет. кресло: <i>' + current.specifications.childrenSit + ' ₴</i>'
                        :userLang === 'UK' ? 'дит. крісло: <i>' + current.specifications.childrenSit + ' ₴</i>'
                        :userLang === 'EN' ? 'chld armchair: <i>' + current.specifications.childrenSit + ' ₴</i>'
                        : 'дит. крісло: <i>' + current.specifications.childrenSit + ' ₴</i>'}
                    </span>
                </div>`
    }
    makeAnOrderTemplate(name, userLang) {
        return `<div class="contacts"> 
                    <h3>${name}</h3>
                    <p>
                        ${userLang === 'RU' ? 'Чтобы сделать заказ:'
                        :userLang === 'UK' ? 'Щоб зробити замовлення:'
                        :userLang === 'EN' ? 'To make an order:'
                        : 'Щоб зробити замовлення:'}
                    </p>
                    <div>
                        ${userLang === 'RU' ? 'наберите нас по номеру: '
                        :userLang === 'UK' ? 'наберіть нас по номеру:'
                        :userLang === 'EN' ? 'dial us by number:'
                        : 'наберіть нас по номеру:'}
                        <a href="tel: ${this.contacts[0].tel}">${this.contacts[0].showTel}</a>
                    </div>
                    <div>
                    
                        ${userLang === 'RU' ? 'либо напишите нам:'
                        :userLang === 'UK' ? 'або напишіть нам:'
                        :userLang === 'EN' ? 'or write to us:'
                        : 'або напишіть нам:'}
                    </div>
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