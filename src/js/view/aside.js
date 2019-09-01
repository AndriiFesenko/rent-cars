'use strict'
export class Aside {
    constructor() {
        this.information = document.querySelector('aside .information');
        this.buttons = document.querySelectorAll('aside .information a');
        this.closeButton = document.querySelector('.close-button img');
        this.aside = document.querySelector('aside');

        this.information.addEventListener('click', (e) => this.onInfromationClick(e));
        this.closeButton.addEventListener('click', (e) => this.onCloseButtonClick(e))
    }
    onInfromationClick(e) {
        this.showInfo(e); 
    }
    setActiveClass(e) {
        // remove active class at all elements 
        this.removeClass(this.buttons)

        let array = Array.from(this.buttons);
        let element = this.findElementByClassName(e,array);

        //  check if we have element and after
        //  add active class to clicked element
        element && element.classList.add('active');
    }
    onCloseButtonClick(e) {
        this.aside.classList.remove('active');
    }
    removeClass(element) {
        element.forEach((current) => {
            current.classList.remove('active');
        })
    }
    findElementByClassName(e,array) {
       return array.find((current) => current.className === e.target.className);
    }
    aboutCompanyTemplate() {
        return `<div>
                    <h3>LimoPullman</h3>
                    <p>
                    Хороший автомобиль придает особый статус любому мероприятию. 
                    Поэтому, если вам требуется нечто особенное, то это к нам . 
                    Компания «LimoPullman» предлагает лучшие  VIPавто напрокат в Украине. 
                    Профессиональные водители обеспечат не только комфорт, но и безопасность вашего путешествия. 
                    Вас доставят в любую точку с точностью до минуты. 
                    Философия нашего бизнеса основывается на профессионализме, разумных ценах и пунктуальности. 
                    Поэтому многие клиенты предпочитают доверять именно нам.Компания 
                    LimoPullman уже много лет работает в сфере оказания качественных услуг проката автомобилей по всей Украине. 
                    Наша фирма предоставляет большой выбор автомобилей на любой вкус, цвет и кошелёк. 
                    Наш опыт - это залог вашего спокойствия и удовлетворения.
                    </p>
                </div>
                <div>
                    <h3>Спектор услуг которые мы предоставляем:</h3>
                    <ul>
                        <li>Красивое авто для фотосессии;</li>
                        <li>Прокат автомобилей с водителем;</li>
                        <li>Встреча делегаций и партнеров;</li>
                        <li>Заказ авто для встречи с аэропорта;</li>
                        <li>Бизнес-трансферы и деловые поездки по Украине и Европе;</li>
                        <li>Свадебное авто в аренду;</li>
                    </ul>
                    <h3>LimoPullman - надёжный партнёр в сфере транспортных услуг!</h3>
                </div>`
    }
    // carForWeddingTemplate() {

    // }
    // longDistanceTripTemplate() {

    // }
    // transferTemplate() {
    //     // ---------------------
    // }
    // vipTaxiTemplate() {

    // }
    // условия 
    conditionsTemplate() {
        return `<div>
                    <h3>Основные условия</h3>
                    <ul>
                        <li>Автомобиль подаётся только по предварительному бронированию.</li>
                        <li>Компания гарантирует аренду автомобиля только на предварительно заказанное время.</li>
                        <li>Продление времени возможно при отсутсвие последующего заказа.</li>
                        <li>Аренда автомобилей производится только по предоплате. Но в случае отказа от аренды автомобиля задаток не возвращается.</li>
                        <li>При оформлении заказа на прокат авто с водителем в обязательном порядке заключается договор.</li>
                        <li>Автомобили передвигаются по городу только с разрешенной ПДД скоростью.</li>
                        <li>В том случае, если в процессе исполнения заказа возникли технические проблемы с транспортным средством, время на их устранение (или ожидание подменного авто) суммируется со временем заказа.</li>
                        <li>Все автомобили выезжают с нашей стоянки в идеально чистом состоянии. В процессе поездки по городу чистота автомобиля определяется текущими погодными условиями.</li>
                        <li>Заказчик дополнительно оплачивает платные парковки.</li>
                        <li>Дополнительно оплачиваются услуги аренды сверх обозначенного в договоре времени. При этом время свыше 5 минут автоматически округляется до 30 минут, свыше 31 минуты – до 1 часа.</li>
                        <li>Помимо этого, заказчик дополнительно оплачивает поездку на арендованной автомашине за пределы города.</li>
                        <li>Для всех автомобилей  пробег рассчитывается на основании установленных тарифов - грн/км.</li>
                    </ul>
                </div>
                <div>
                    <h3>Запрещается</h3>
                    <ul>
                        <li>Курить в салоне, а также употреблять любые виды алкогольных напитков.</li>
                        <li>Оставлять в салоне пищевые отходы и любой мусор (включая бутылки), не собранные в пакеты. </li>
                        <li>Склонять водителя к нарушению любых ПДД, а также другим неправомерным и незаконным действиям.</li>
                        <li>При необходимости заезда в любые труднодоступные места принятие решения всегда остаётся за водителем.</li>
                    </ul>
                </div>`
    }
    paymentsMethodTemplate() {
        return `<div>
                    <h3>ПРЕДОПЛАТА</h3>
                    <p>
                        Для аренды автотранспорта с водителем вам необходимо внести определенную сумму (минимальное время аренды авто) в качестве предоплаты. Возможны две формы предоплаты.
                        Вы полностью оплачиваете заказ, согласно всем расчётам на основании его условий.
                        Вы вносите оплату за минимальное время аренды автотранспорта, и доплачиваетеводителю остаток в случае превышения сроков вносите остаток суммы по факту, непосредственно перед поездкой.
                    </p>
                    <h3>ВОЗМОЖНЫЕ СПОСОБЫ ОПЛАТЫ</h3>
                    <ul>
                        <li>Наличный расчёт в офисе нашей компании.</li>
                        <li>Прямым переводом с карточки или р/с.</li>
                        <li>Наличными нашему водителю.</li>
                    </ul>
                </div>
                <p>
                    Постоянные клиенты компании, а также клиенты, заказавшие услугу трансфера, могут также заплатить наличными средствами водителю (при условии 100% предоплаты непосредственно перед поездкой).
                </p>`
    }
    // условия трансфера
    transferConditions() {
        return `<div>
                    <h3>Основное</h3>
                    <ul>
                        <li>Предварительная заявка-бронирование авто.</li>
                        <li>Полная 100% предоплата или оплата водителю при посадке.</li>
                        <li>Время начала услуги ТРАНСФЕР – фактическое время прибытия самолёта/поезда или время подачи по адресу клиента.</li>
                    </ul>
                </div>
                <div>
                    <h3>В УСЛУГУ ВКЛЮЧЕНО</h3>
                    <ul>
                        <li>Транспортное средство по запросу клиента с водителем.</li>
                        <li>Профессиональный водитель.</li>
                        <li>Мобильная связь с водителем.</li>
                        <li>Встреча водителем с табличкой в авиа или ж/д вокзале или по адресу клиента.</li>
                        <li>Подача авто в аэропорт, вокзал или по 1-му адресу клиента.</li>
                        <li>Ожидание клиентов в течении 1 часа в аэропорту после посадки самолёта.</li>
                        <li>Ожидание клиентов в течении 30 мин. на вокзале после прибытия поезда.</li>
                        <li>Доставка пассажиров по 1-му адресу из аэропорта или ж/д вокзала.</li>
                    </ul>
                    <p>ВНИМАНИЕ - при задержке рейса ожидание клиента в аэропорту без ограничения по времени!</p>
                    <h3>ДОПОЛНИТЕЛЬНО ОПЛАЧИВАЕТСЯ</h3>
                    <ul>
                        <li>Платные парковки в городе, в авиа и ж/д вокзалах;</li>
                        <li>Ожидание по адресу клиента при подаче в Киеве свыше 15 мин.;</li>
                        <li>Ожидание в аэропорту свыше 1 часа, а на ж/д вокзалах свыше 30 мин.;</li>
                        <li>Дополнительный адрес при трансфере после или до пункта назначения;</li>
                        <li>Превышение расчётного времени услуги свыше 5 минут — округляется в сторону 30 мин. аренды автомобиля;</li>
                        <li>Превышение расчётного времени услуги свыше 30 минут — округляется в сторону 1 часа аренды автомобиля;</li>
                        <li>Выезд автомобиля за пределы города во время трансфера оплачивается дополнительно по действующему тарифу из расчёта грн/км.</li>
                        <li>Перемещение багажа клиента из зала прибытия к авто (от авто в зал вылета/отправления или квартиры);</li>
                        <li>Перевозка крупного или негабаритного багажа;</li>
                        <li>Перевозку животных (согласовывается заранее).</li>
                    </ul>
                </div>`
    }
}