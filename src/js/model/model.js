
'use strict'

export class Model {
    constructor() {
        this.arrCars = [
            {
                name: 'Mercedes-Benz S-Class белый',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 1100,
                transferPrice: {
                    city: 3000,
                    railway: 3000,
                    zhulyany: 3000,
                    borispol: 3500
                },
                weddingPrice: {
                    price: 1100,
                    decoration: 500
                },
                kmPrice: 20,
                color: 'white',
                specifications: {
                    year: 2012,
                    color: 'Белый',
                    passangers: 3,
                    trunk: 3,
                    childrenSit: 200
                },
                src: './src/images/222white.png',
                class: 'executive',
                img: {
                    main: './src/images/w222white/main.JPG',
                    first: './src/images/w222white/1.JPG',
                    second: './src/images/w222white/2.JPG',
                    third: './src/images/w222white/3.JPG',
                    fourth: './src/images/w222white/4.JPG',
                    fifth: './src/images/w222white/5.JPG'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz E-Class белый',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 500,
                transferPrice: {
                    city: 1400,
                    railway: 1400,
                    zhulyany: 1400,
                    borispol: 1800
                },
                weddingPrice: {
                    price: 600,
                    decoration: 500
                },
                kmPrice: 15,
                color: 'white',
                specifications: {
                    year: 2016,
                    passangers: 3,
                    trunk: 3,
                    childrenSit: 200
                },
                src: './src/images/212white.png',
                class: 'business',
                img: {
                    main: './src/images/e212white/main.JPG',
                    first: './src/images/e212white/1.JPG',
                    second: './src/images/e212white/2.JPG',
                    third: './src/images/e212white/3.JPG',
                    fourth: './src/images/e212white/4.JPG',
                    fifth: './src/images/e212white/5.JPG'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz S-Class чёрный',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 1100,
                transferPrice: {
                    city: 3500,
                    railway: 3500,
                    zhulyany: 3500,
                    borispol: 4000
                },
                weddingPrice: {
                    price: 1100,
                    decoration: 500
                },
                kmPrice: 20,
                color: 'black',
                specifications: {
                    year: 2012,
                    passangers: 3,
                    trunk: 3,
                    childrenSit: 200
                },
                src: './src/images/222black.png',
                class: 'executive',
                img: {
                    main: './src/images/w222black/main.JPG',
                    first: './src/images/w222black/1.JPG',
                    second: './src/images/w222black/2.JPG',
                    third: './src/images/w222black/3.JPG',
                    fourth: './src/images/w222black/4.JPG',
                    fifth: './src/images/w222black/5.JPG'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz E-Class чёрный',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 500,
                transferPrice: {
                    city: 1400,
                    railway: 1400,
                    zhulyany: 1400,
                    borispol: 1800
                },
                weddingPrice: {
                    price: 600,
                    decoration: 500
                },
                kmPrice: 15,
                color: 'black',
                specifications: {
                    year: 2016,
                    passangers: 3,
                    trunk: 3,
                    childrenSit: 200
                },
                src: './src/images/212black.png',
                class: 'business',
                img: {
                    main: './src/images/e212black/main.JPG',
                    first: './src/images/e212black/1.JPG',
                    second: './src/images/e212black/2.JPG',
                    third: './src/images/e212black/3.JPG',
                    fourth: './src/images/e212black/4.JPG',
                    fifth: './src/images/e212black/5.JPG'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz ML-Class чёрный',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 600,
                transferPrice: {
                    city: 1600,
                    railway: 1600,
                    zhulyany: 1600,
                    borispol: 2000
                },
                weddingPrice: {
                    price: 700,
                    decoration: 500
                },
                kmPrice: 15,
                color: 'black',
                specifications: {
                    year: 2010,
                    passangers: 3,
                    trunk: 3,
                    childrenSit: 200
                },
                src: './src/images/mercedes-ml.png',
                class: 'off-road',
                img: {
                    main: './src/images/mlblack/main.JPG',
                    first: './src/images/mlblack/1.JPG',
                    second: './src/images/mlblack/2.JPG',
                    third: './src/images/mlblack/3.JPG',
                    fourth: './src/images/mlblack/4.JPG',
                    fifth: './src/images/mlblack/5.JPG'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz G-Class чёрный',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 800,
                transferPrice: {
                    city: 2500,
                    railway: 2500,
                    zhulyany: 2500,
                    borispol: 3000
                },
                weddingPrice: {
                    price: 900,
                    decoration: 500
                },
                kmPrice: 18,
                color: 'black',
                specifications: {
                    year: 2010,
                    passangers: 3,
                    trunk: 3,
                    childrenSit: 200
                },
                src: './src/images/mercedes-g.png',
                class: 'off-road',
                img: {
                    main: './src/images/Gblack/main.JPG',
                    first: './src/images/Gblack/1.JPG',
                    second: './src/images/Gblack/2.JPG',
                    third: './src/images/Gblack/3.JPG',
                    fourth: './src/images/Gblack/4.JPG',
                    fifth: './src/images/Gblack/5.JPG'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Maybach 62',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 2500,
                transferPrice: {
                    city: 5500,
                    railway: 5500,
                    zhulyany: 5500,
                    borispol: 6500
                },
                weddingPrice: {
                    price: 2800,
                    decoration: 500
                },
                kmPrice: 30,
                specifications: {
                    year: 2010,
                    passangers: 3,
                    trunk: 3,
                    childrenSit: 200
                },
                color: 'Maybach',
                src: './src/images/maybach.png',
                class: 'premium',
                img: {
                    main: './src/images/maybach/main.JPG',
                    first: './src/images/maybach/1.JPG',
                    second: './src/images/maybach/2.JPG',
                    third: './src/images/maybach/3.JPG',
                    fourth: './src/images/maybach/4.JPG',
                    fifth: './src/images/maybach/5.JPG'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz S-Class 221 чёрный',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 700,
                transferPrice: {
                    city: 2000,
                    railway: 2000,
                    zhulyany: 2000,
                    borispol: 2500
                },
                weddingPrice: {
                    price: 800,
                    decoration: 500
                },
                kmPrice: 18,
                color: '',
                specifications: {
                    year: 2010,
                    passangers: 3,
                    trunk: 3,
                    childrenSit: 200
                },
                src: './src/images/221black.png',
                class: 'executive',
                img: {
                    main: './src/images/w221black/main.JPG',
                    first: './src/images/w221black/1.JPG',
                    second: './src/images/w221black/2.JPG',
                    third: './src/images/w221black/3.JPG',
                    fourth: './src/images/w221black/4.JPG',
                    fifth: './src/images/w221black/5.JPG'
                },
                trans: false,
                rent: true
            }
        ]
        this.contacts = [
            {
                name: 'Юлиан',
                //format +38(0**)-***-**-**
                showTel: ' +38(099)-117-38-69',
                //format +380*********  
                tel: '+380991173869',
                //format 380********* 
                viber: '380991173869',
                //format 380*********
                whatsApp: '380991173869'
            }
        ]
        // if create object value with link on object value the link does not work
        this.contacts[0].whatsAppSrc = `https://api.whatsapp.com/send?phone=${this.contacts[0].whatsApp}`;
        this.contacts[0].viberSrc = `viber://add?number=${this.contacts[0].viber}`;
    }
    filterElementsByClass(clas) {
        // find elements by class
        return this.arrCars.filter((current) => current.class === clas);
    }
    findElement(name) {
        return this.arrCars.find((current) => current.name === name);
    }
    findMin(el) {
        let valuesArr = Object.values(el);
        return Math.min(...valuesArr)
    }
}