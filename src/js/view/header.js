

export class Header {
    constructor () {

        this.$rentCarsButton =  $('#rentCars');
        this.$transfersButton = $('#transfers')
        this.$rentCarsList = $('.rentCarsList');
        this.$transfersCarsList = $('.transfersCarsList');
        this.$carsMenu = $('#cars-menu');
        this.$page = $('html, body');
        

        this.$carsMenu.mouseover((e) => this.init(e))
        this.$rentCarsButton.parent().mouseleave(() => this.hideMenu(this.$rentCarsList))
        this.$transfersButton.parent().mouseleave(() => this.hideMenu(this.$transfersCarsList))

        this.$rentCarsList.on('click', (e, rent=true, trans=false) => this.showRentCarsList(e, rent=true, trans=false));
        this.$transfersCarsList.on('click', (e, rent=false, trans=true) => this.showRentCarsList(e, rent=false, trans=true))
        $('.top-side').click((e) => this.pageAnimate(e))
    }
    
    init(e) {
        if(e.target.id === 'rentCars'){
            this.hideMenu(this.$transfersCarsList)
            this.showMenu(this.$rentCarsList);
        } else if (e.target.id === 'transfers'){
            this.hideMenu(this.$rentCarsList)
            this.showMenu(this.$transfersCarsList);
        }
    }
    showRentCarsList(e, rent, trans) {

        if($(e.target).html() === 'S-Class'){

            let sClass = this.findCars('S');
            this.changeState(rent, trans);
            this.rebuildCarsList(sClass);

        } else if ($(e.target).html() === 'E-Class') {

            let eClass = this.findCars('E');
            this.changeState(rent, trans);
            this.rebuildCarsList(eClass);

        } else if ($(e.target).html() === 'ML-Class') {

            let mlClass = this.findCars('ML');
            this.changeState(rent, trans);
            this.rebuildCarsList(mlClass);

        } else if ($(e.target).html() === 'G-Class') {

            let gClass = this.findCars('G');
            this.changeState(rent, trans);
            this.rebuildCarsList(gClass);

        } 
    }
    showMenu(element){
            $(element).slideDown(600);
    }
    hideMenu(element){
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
            // offset().top-20. Берем тег main, его координаты top -20(px)
            scrollTop: $(way).offset().top-20
        }, 700);
        return false
    }
}