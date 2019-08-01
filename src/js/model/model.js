

export class Model {
    constructor() {
        this.arrCars = [
            {
                name: 'Mercedes-Benz S-Class белый',
                description: 'Аренда авто',
                transferDescription: 'Трансфер',
                price: 1200,
                transferPrice: 3000,
                color: 'white',
                src: './src/images/222white.jpg',
                class: 'S',
                kmPrice: 25,
                img: {
                    main: './src/images/w222white/main.jpg',
                    first: './src/images/w222white/1.jpg',
                    second: './src/images/w222white/2.jpg',
                    third: './src/images/w222white/3.jpg',
                    fourth: './src/images/w222white/4.jpg',
                    fifth: './src/images/w222white/5.jpg'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz E-Class белый',
                description: 'Аренда авто',
                price: 650,
                transferPrice: 1500,
                color: 'white',
                src: './src/images/212white.png',
                class: 'E',
                kmPrice: 8,
                img: {
                    main: './src/images/e212white/main.jpg',
                    first: './src/images/e212white/1.jpg',
                    second: './src/images/e212white/2.jpg',
                    third: './src/images/e212white/3.jpg',
                    fourth: './src/images/e212white/4.jpg',
                    fifth: './src/images/e212white/5.jpg'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz S-Class чёрный',
                description: 'Аренда авто',
                price: 900,
                transferPrice: 3000,
                color: 'black',
                src: './src/images/222black.jpg',
                class: 'S',
                kmPrice: 15,
                img: {
                    main: './src/images/w222black/main.jpg',
                    first: './src/images/w222black/1.jpg',
                    second: './src/images/w222black/2.jpg',
                    third: './src/images/w222black/3.jpg',
                    fourth: './src/images/w222black/4.jpg',
                    fifth: './src/images/w222black/5.jpg'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz E-Class чёрный',
                description: 'Аренда авто',
                price: 600,
                transferPrice: 1500,
                color: 'black',
                src: './src/images/212black.png',
                class: 'E',
                kmPrice: 8,
                img: {
                    main: './src/images/e212black/main.jpg',
                    first: './src/images/e212black/1.jpg',
                    second: './src/images/e212black/2.jpg',
                    third: './src/images/e212black/3.jpg',
                    fourth: './src/images/e212black/4.jpg',
                    fifth: './src/images/e212black/5.jpg'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz ML-Class чёрный',
                description: 'Аренда авто',
                price: 700,
                transferPrice: 2000,
                color: 'black',
                src: './src/images/mercedes-ml.png',
                class: 'ML',
                kmPrice: 8,
                img: {
                    main: './src/images/mlblack/main.jpg',
                    first: './src/images/mlblack/1.jpg',
                    second: './src/images/mlblack/2.jpg',
                    third: './src/images/mlblack/3.jpg',
                    fourth: './src/images/mlblack/4.jpg',
                    fifth: './src/images/mlblack/5.jpg'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz G-Class чёрный',
                description: 'Аренда авто',
                price: 900,
                transferPrice: 2500,
                color: 'black',
                src: './src/images/mercedes-g.png',
                class: 'G',
                kmPrice: 10,
                img: {
                    main: './src/images/Gblack/main.jpg',
                    first: './src/images/Gblack/1.jpg',
                    second: './src/images/Gblack/2.jpg',
                    third: './src/images/Gblack/3.jpg',
                    fourth: './src/images/Gblack/4.jpg',
                    fifth: './src/images/Gblack/5.jpg'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Maybach 62',
                description: 'Аренда авто',
                price: 2100,
                transferPrice: 3500,
                color: '',
                src: './src/images/maybach.png',
                class: 'maybach',
                kmPrice: 30,
                img: {
                    main: './src/images/maybach/main.jpg',
                    first: './src/images/maybach/1.jpg',
                    second: './src/images/maybach/2.jpg',
                    third: './src/images/maybach/3.jpg',
                    fourth: './src/images/maybach/4.jpg',
                    fifth: './src/images/maybach/5.jpg'
                },
                trans: false,
                rent: true
            },
            {
                name: 'Mercedes-Benz S-Class 221 чёрный',
                description: 'Аренда авто',
                price: 800,
                transferPrice: 1500,
                color: '',
                src: './src/images/221black.png',
                class: 'S',
                kmPrice: 10,
                img: {
                    main: './src/images/w221black/main.jpg',
                    first: './src/images/w221black/1.jpg',
                    second: './src/images/w221black/2.jpg',
                    third: './src/images/w221black/3.jpg',
                    fourth: './src/images/w221black/4.jpg',
                    fifth: './src/images/w221black/5.jpg'
                },
                trans: false,
                rent: true
            }
        ]
        this.contacts = [
            {
                name: 'Андрей',
                tel: '+38(098)-516-80-71',
                viber: '+38(098)-516-80-71'
            }

        ]

    }
    // rewrite this function
    filterElementsByClass(clas) {
        // вытягиваем с массива элементы по заданному классу 
        return this.arrCars.filter((current) => current.class === clas);
    }
    findElement(name) {
        
        return this.arrCars.find((current) => {
            if(current.name === name){
                // console.log(current.img)
                return current;
            }
        })
    }
    changeState(rent, trans) {
        this.arrCars.forEach((current) => {
            current.rent = rent;
            current.trans = trans;
        })
    }
    
}