
export class Content {
    constructor(arrCars) {
        this.arrCars = arrCars;
        this.wrapper = document.getElementById('wrapper');
        this.mainMenuButtons = document.querySelector('.main-menu-buttons');
        this.dialogWrapper = document.querySelector('.dialog-wrapper');

        this.showCars();
        this.makeAnOrderButton = document.getElementById('makeAnOrder');

        this.wrapper.addEventListener('click', (e) => this.onCarClick(e));
        this.mainMenuButtons.addEventListener('click', (e) => this.toggleCarsList(e));
        $(this.dialogWrapper).on('click','.ui-button', (e) => this.closePopup(e));
        $(this.dialogWrapper).on('click', '.dialog-img-wrapper > div > img', (e) => this.changeMainImg(e));
        $(this.wrapper).on('click', '#makeAnOrder', (e) => this.onMakeAnOrderClick(e))
    }
    showCars() {
        this.renderElement(this.arrCars);
    }

    renderElement(element) {
        this.wrapper.innerHTML = element.map((current) => {
            return current.rent ? 
                            this.template(current) 
                            : this.transferTemplate(current);
        }).join('');
    }
    onCarClick(e) {
        let $target = $(e.target)
        let parent = $target.parents('div');
        console.log();
        // check if our click was not on "make an order" button
        if($target.attr('id') != 'makeAnOrder') { 
            // check on what car was click
            let carName = $(e.target).closest('.block').find('.info').find('h2').text();
            console.log(carName)
            let element = this.findCar(carName);
            let content = this.dialogTemplate(element);
            this.showPopup();
            this.setDialogContent(content, element.name);
            
            // if(parent.hasClass('S-Class-white') || $target.hasClass('S-Class-white')){
            //     let element = this.findCar('S', 'white');
            //     let content = this.dialogTemplate(element);
            //     this.showPopup();
            //     this.setDialogContent(content, element.name);
            // } 
        }
    }
    onMakeAnOrderClick(e) {
        let $parent = $(e.target).closest('.block').attr('class');
        // take name of car where user has clicked
        let carName = $parent.split(' ').slice(1).join(' ').split('-').join(' ');
        // console.log(element);

        let content = this.makeAnOrderTemplate(carName);
        // this.setDialogContent(content, name)
        this.showPopup();
        this.setDialogContent(content);
    }
    showPopup() {
        this.setSettingsToPopup();
        let uiDialog = document.querySelector('.ui-dialog');
        this.dialogWrapper.appendChild(uiDialog);
        $('#dialog').dialog('open');
    }
    setDialogContent(content, name) {
        let dialogContent = document.getElementById('dialog');
        // удаляем заголовок 
        let dialogTitle = document.getElementById('ui-id-1');
        dialogTitle.innerHTML = name;
        // устанавливаем контент
        dialogContent.innerHTML = content;
    }
    setSettingsToPopup() {
        $(this.dialogWrapper).css({
            display: 'block'
        });
        $('#dialog').dialog({
            draggable: false,
            autoOpen: false,
            closeOnEscape: false,
            buttons: [
                {
                    click: () => {
                        $(this).dialog('close');
                    }
                }
            ],
            show: {
              effect: "drop",
              duration: 1000
            },
            hide: {
              effect: "drop",
              duration: 0
            }
          });
    }
    closePopup() {
        // hide popup background 
        $(this.dialogWrapper).css({
            display: 'none'
        });
    }
    changeMainImg(e) {
        // set not active class to all images
        this.setNotActiveClass();
        // set active class to clicked image
        this.setActiveClass(e);
        // change main image on clicked image
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
    toggleCarsList(e,rent,trans) {
        e.target.id === 'showRentCars' ? 
                                this.changeState(rent=true, trans=false)
                                :this.changeState(rent=false, trans=true);

        // искуственное обновление страницы так как сайт одностраничный 
        this.hideList();              
        this.renderElement(this.arrCars);
        this.showList();
    }
    hideList() {
        // искуственное обновление страницы так как сайт одностраничный
        $(this.wrapper).animate({
            opacity: 0
        },0);
    }
    showList() {
        // искуственное обновление страницы так как сайт одностраничный
        $(this.wrapper).animate({
            opacity: 100
        },500);
    }
    template(current) {
        $('.carParkTitle').html('Аренда VIP авто с водителем');
        return    `<div class="block">
                    <div class="image-box">
                        <img src="${current.src}">
                        <div class="seeMoreInfoBlock"></div>
                    </div>
                    <div class="info">
                        <h2>${current.name}</h2>
                        <p>${current.description} :</p>
                        <h3>
                            <img src="./src/images/priceIcon.png" alt="priceIcon">
                            от ${current.price} ₴/час
                            <input type="button" id="makeAnOrder" value="Заказать">
                        </h3>
                    </div>
                </div>`
    }
    transferTemplate(current) {
        $('.carParkTitle').html('Аренда авто для трансфера');
        return  `<div class="block">
                    <div class="image-box">
                        <img src="${current.src}">
                        <div class="seeMoreInfoBlock"></div>
                    </div>
                    <div class="info">
                        <h2>${current.name}</h2>
                        <p>${current.transferDescription} :</p>
                        <h3>
                            <img src="./src/images/priceIcon.png" alt="priceIcon">
                            от ${current.transferPrice} ₴/час
                            <input type="button" id="makeAnOrder" value="Заказать">
                        </h3>
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
                </div>`.concat(this.rentCarInfoTemplate(current))
    }
    rentCarInfoTemplate(current) {
        return `<div class="dialog-info">
                   <div class="title">
                        <h3><img src="./src/images/businessIcon.png" atl="img">Бизнес</h3>
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
                    </div>
                </div>`
    }
    makeAnOrderTemplate(name) {
        return `<div> 
                    <h3>Вы хотите заказать ${name}</h3>
                </div>`
    }
}