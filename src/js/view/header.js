
'use strict'

export class Header {
    constructor () {

        this.$rentCarsButton =  $('#rentCars');
        this.$transfersButton = $('#transfers')
        this.$rentCarsList = $('.rentCarsList');
        this.$transfersCarsList = $('.transfersCarsList');
        this.$mainSiteInfoList = $('.mainSiteInfoList');
        this.$weddingCarsList = $('.weddingCarsList');
        this.$carsMenu = $('#cars-menu');
        this.$page = $('html, body');
        this.$header = $('header');
        this.$aside = $('aside');
        this.$infoContainer = $('.info-container');
        this.$leftSlider = $('.left-slider');
        this.$rightSlider = $('.right-slider');
        this.$topSide = $('.top-side');
        this.$openMenuBtn = $('#open-menu-button');

        this.index = 0;
        this.intervalId;
        window.onload = (e) => this.checkResolution(e);

        this.$header.on('dragstart', (e) => e.preventDefault());
        this.$header.mouseover((e) => this.onHeaderMouseOver(e));
        this.$carsMenu.on('click', (e) => this.onCarsMenuClick(e));
        this.$header.on('click', (e) => this.onHeaderClick(e));

        this.$rentCarsButton.parent().mouseleave(() => this.hideMenu(this.$rentCarsList));
        this.$transfersButton.parent().mouseleave(() => this.hideMenu(this.$transfersCarsList));
        this.$mainSiteInfoList.parent().mouseleave(() => this.hideMenu(this.$mainSiteInfoList));
        this.$weddingCarsList.parent().mouseleave(() => this.hideMenu(this.$weddingCarsList));

        this.$leftSlider.on('click', () => this.onLeftSliderClick());
        this.$rightSlider.on('click', () => this.onRightSliderClick());
        // scroll page to clicked id
        $('.top-side').click((e) => this.pageAnimate(e));
        $(window).on('orientationchange', (e) => this.checkResolution(e));
    }
    checkResolution(e) {
        if(screen.width < 900) {
            this.$carsMenu.css('display', 'none');

            
            this.createOpenMenuButton();
        } else {
            this.$carsMenu.removeClass('small-cars-menu');
            this.$carsMenu.css('display', 'flex');
            this.$openMenuBtn.css('display', 'none');

            // this.$topSide.remove('small-cars-menu-wrapper');
        }
        this.animateHeader(e);
    }
    createOpenMenuButton() {
        this.$openMenuBtn.css('display','block');
    }
    animateHeader() {
        clearInterval(this.intervalId);
        this.setAnimation();
    }
    setAnimation() {
        this.intervalId = setInterval(() => {
            this.slideElementLeft();
        }, 6000);
    }
    toggleSmallCarsMenu() {
        this.$topSide.toggleClass('active');
        this.$carsMenu.toggleClass('small-cars-menu');
    }
    onHeaderClick(e) {
        $(e.target).hasClass('open-menu-btn') ? this.toggleSmallCarsMenu(): null;
        this.changeButtonImg(e);
    }
    changeButtonImg(e) {
        let $openMenuButton = $('.open-menu-btn');
        let src = this.$carsMenu.attr('class') === 'small-cars-menu' ?
                        './src/images/2-lines-icon.png'
                        : './src/images/3-lines-icon.png';
        $openMenuButton.attr('src', src);
    }
    onCarsMenuClick(e) {
        console.log(e.target)

        let elementClass = $(e.target).closest('ul').attr('class');
        elementClass === 'rentCarsList' ? this.showRentCarsList(e)
        : elementClass === 'transfersCarsList' ? this.showRentCarsList(e)
        : elementClass === 'weddingCarsList' ? this.showRentCarsList(e)
        : elementClass === 'mainSiteInfoList' ? this.showInfo(e)
        : $(e.target).attr('class') === 'about-company' ? this.showInfo(e)
        : null;
    }
    onLeftSliderClick() {
        clearInterval(this.intervalId);
        this.slideElementLeft();
    }
    onRightSliderClick() {
        clearInterval(this.intervalId);
        this.slideElementRight();
    }
    slideElementLeft() {
        let $bgContainer = $('.background-container').children();
        // if our element has class,  dont show new element.
        // wait 1second while class will be removed.
        if (this.checkElementOnClass($bgContainer)) {
            return;
        } else {
            this.addClass($bgContainer, this.index, 'hideLeft');
            this.removeClassDelay($bgContainer, this.index, 'active');

            this.index += 1;

            this.index = this.index > 2 ? 0 : this.index;
            // if our element has class it will be removed else no;     
            this.removeClass($bgContainer, this.index, 'hideRight');
            this.removeClassDelay($bgContainer, this.index, 'notActive');
            this.removeClassDelay($bgContainer, this.index, 'hideLeft');
            
            this.addClass($bgContainer, this.index, 'showFromRight');
            this.addClass($bgContainer, this.index, 'active');
            // remove class 'showFromRight' when element finishes his way
            this.removeClassDelay($bgContainer, this.index, 'showFromRight');
        }
    }
    slideElementRight() {
        let $bgContainer = $('.background-container').children();
        // if our element has class,  dont show new element.
        // wait 1second while class will be removed.
        if (this.checkElementOnClass($bgContainer)) {
            return;
        } else {
            // hide element in right side
            this.addClass($bgContainer, this.index, 'hideRight');
            // remove class 'active' when element finishes his way and will be hidden in right side
            this.removeClassDelay($bgContainer, this.index, 'active');
            this.index -= 1;

            this.index = this.index < 0 ? $bgContainer.length - 1 : this.index;
            // if our element has class it will be removed else no;
            this.removeClass($bgContainer,this.index,'hideLeft');
            this.removeClassDelay($bgContainer, this.index, 'notActive');
            this.removeClassDelay($bgContainer, this.index, 'hideRight');
            
            this.addClass($bgContainer, this.index, 'showFromLeft');
            this.addClass($bgContainer, this.index, 'active');
            // remove class 'showFromLeft' when element finishes his way
            this.removeClassDelay($bgContainer, this.index, 'showFromLeft');
        }
    }
    checkElementOnClass(container) {
        let $el = $(container[this.index]);
        let status =  $el.hasClass('showFromRight') 
                        || $el.hasClass('showFromLeft') ? true : false;
        return status;
    }
    addClass(bgContainer, index, clas) {
        $(bgContainer[index]).addClass(clas);
    }
    removeClass(bgContainer, index, elementClass) {
        // if our element has class it will be removed else no;
        $(bgContainer[index]).hasClass(elementClass) ?
            $(bgContainer[index]).removeClass(elementClass)
            : null;
    }
    removeClassDelay(bgContainer, index, elementClass) {
        if ($(bgContainer[this.index]).hasClass(elementClass)) {
            setTimeout(() => {
                $(bgContainer[index]).removeClass(elementClass);
            }, 1000);
        }
    }
    onHeaderMouseOver(e) {
        let id = e.target.id;
        id === 'rentCars' ? 
        // 1,2,3 - hide elements ; 4 - show element
            this.slideMenu(this.$transfersCarsList, this.$mainSiteInfoList, this.$weddingCarsList, this.$rentCarsList)
        : id === 'transfers' ? 
            this.slideMenu(this.$mainSiteInfoList, this.$rentCarsList, this.$weddingCarsList, this.$transfersCarsList)
        : id === 'mainSiteInfo' ?
            this.slideMenu(this.$rentCarsList, this.$transfersCarsList, this.$weddingCarsList, this.$mainSiteInfoList)
        : id === 'wedding' ?
            this.slideMenu(this.$rentCarsList, this.$mainSiteInfoList, this.$transfersCarsList, this.$weddingCarsList)
        : null;
    }
    slideMenu(element1, element2, element3, element4) {
        this.hideMenu(element1);
        this.hideMenu(element2);
        this.hideMenu(element3);
        this.showMenu(element4);
    }
    showRentCarsList(e) {
        let carClickedClass = $(e.target).attr('class');
        let newCarsArrByClass = this.filterCars(carClickedClass);
        this.rebuildCarsList(newCarsArrByClass);
        this.hideSmallCarsMenu(e);
        // create button "show all cars" to rebuild car list with all cars
        this.createButton();
    }
    showInfo(e) {
        // set element display:flex to make element visible 
        let clickedElement = $(e.target);

        clickedElement.hasClass('conditions') ? this.$infoContainer.html(this.conditionsTemplate())
        : clickedElement.hasClass('payments-method') ? this.$infoContainer.html(this.paymentsMethodTemplate())
        : clickedElement.hasClass('transfer-conditions') ? this.$infoContainer.html(this.transferConditions())
        : clickedElement.hasClass('about-company') ? this.$infoContainer.html(this.aboutCompanyTemplate())
        : null ;
        this.hideSmallCarsMenu(e);
        // if element has class isDisabled or on close button click we dont show menu 
        if(clickedElement.hasClass('isDisabled') || clickedElement.hasClass('close-button')) {
            return;
        } else {
            this.$aside.addClass('active');
            this.setActiveClass(e);
            this.callPageAnimation('aside');
        }
    }
    hideSmallCarsMenu(e) {
        this.$carsMenu.hasClass('small-cars-menu') ? this.toggleSmallCarsMenu() : null;
        this.changeButtonImg(e);
    }
    showMenu(element){
            $(element).slideDown(600);
    }
    hideMenu(element){
        $(element).slideUp(0);
        $(element).css('display', 'none');
    }
    pageAnimate(e) {
        let elementAttr = $(e.target).attr('href');
        elementAttr === '#wrapper' ? this.callPageAnimation('main') 
        : elementAttr === '#footer' ? this.callPageAnimation('footer')
        : null;
    }
    callPageAnimation(way){
        this.$page.animate({
            // offset().top-20. takes tag main, its coordinates top -20(px)
            scrollTop: $(way).offset().top-20
        }, 700);
    }
}