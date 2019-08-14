

export class Header {
    constructor () {

        this.$rentCarsButton =  $('#rentCars');
        this.$transfersButton = $('#transfers')
        this.$rentCarsList = $('.rentCarsList');
        this.$transfersCarsList = $('.transfersCarsList');
        this.$mainSiteInfoList = $('.mainSiteInfoList');
        this.$carsMenu = $('#cars-menu');
        this.$page = $('html, body');
        this.$header = $('header');

        this.$header.mouseover((e) => this.slideMenu(e))

        this.$rentCarsButton.parent().mouseleave(() => this.hideMenu(this.$rentCarsList));
        this.$transfersButton.parent().mouseleave(() => this.hideMenu(this.$transfersCarsList));
        this.$mainSiteInfoList.parent().mouseleave(() => this.hideMenu(this.$mainSiteInfoList));

        this.$rentCarsList.on('click', (e) => this.showRentCarsList(e));
        this.$transfersCarsList.on('click', (e) => this.showRentCarsList(e));
        $('.top-side').click((e) => this.pageAnimate(e))
    }
    
    slideMenu(e) {
        if(e.target.id === 'rentCars'){
            this.hideMenu(this.$transfersCarsList);
            this.hideMenu(this.$mainSiteInfoList);
            this.showMenu(this.$rentCarsList);
        } else if (e.target.id === 'transfers'){
            this.hideMenu(this.$rentCarsList);
            this.hideMenu(this.$mainSiteInfoList);
            this.showMenu(this.$transfersCarsList);
        } else if (e.target.id === 'mainSiteInfo') {
            this.hideMenu(this.$transfersCarsList);
            this.hideMenu(this.$rentCarsList);
            this.showMenu(this.$mainSiteInfoList);
        }
    }
    showRentCarsList(e) {
        let carClickedClass = $(e.target).html();
        let newCarsArrByClass = this.filterCars(carClickedClass);
        this.rebuildCarsList(newCarsArrByClass);
        this.createButton();
    }
    showMenu(element){
            $(element).slideDown(600);
    }
    hideMenu(element){
        $(element).slideUp(0);
        $(element).css('display', 'none');
    }
    pageAnimate(e) {
        if($(e.target).attr('href') === '#wrapper') {
            this.callPageAnimation('main');
        } else if ($(e.target).attr('href') === '#footer') {
            this.callPageAnimation('footer');
        }
    }
    callPageAnimation(way){
        this.$page.animate({
            // offset().top-20. takes tag main, its coordinates top -20(px)
            scrollTop: $(way).offset().top-20
        }, 700);
        return false
    }
}