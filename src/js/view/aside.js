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
        // create array from buttons
        let array = Array.from(this.buttons);
        // find button on which were click
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
    aboutCompanyTemplate(userLang) {
        let onRULanguage = `<div>
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
        let onUKLanguage = `<div>
                    <h3>LimoPullman</h3>
                    <p>
                    Хороший автомобіль надає особливий статус будь-якого заходу.
                    Тому, якщо вам потрібно щось особливе, то це до нас.
                    Компанія «LimoPullman» пропонує кращі VIPавто напрокат в Україні.
                    Професійні водії забезпечать не тільки комфорт, але і безпеку вашої подорожі.
                    Вас доставлять в будь-яку точку з точністю до хвилини.
                    Філософія нашого бізнесу ґрунтується на професіоналізмі, розумних цінах і пунктуальності.
                    Тому багато клієнтів вважають за краще довіряти саме нам.Компанія
                    LimoPullman вже багато років працює в сфері надання якісних послуг прокату автомобілів по всій Україні.
                    Наша фірма надає великий вибір автомобілів на будь-який смак, колір і гаманець.
                    Наш досвід - це запорука вашого спокою і задоволення.
                    </p>
                </div>
                <div>
                    <h3>Спектор послуг які ми надаємо:</h3>
                    <ul>
                        <li> Красиве авто для фотосесії; </li>
                        <li> Прокат автомобілів з водієм; </li>
                        <li> Зустріч делегацій і партнерів; </li>
                        <li> Замовлення авто для зустрічі з аеропорту; </li>
                        <li> Бізнес-трансфери і ділові поїздки по Україні та Європі; </li>
                        <li> Весільне авто в оренду; </li>
                    </ul>
                    <h3>LimoPullman - надійний партнер в сфері транспортних послуг!</h3>
                </div>`
        let onENLanguage = `<div>
                    <h3>LimoPullman</h3>
                    <p>
                    A good car gives special status to any event.
                    LimoPullman offers the best VIP car rental in Ukraine.
                    Professional drivers will provide not only comfort, but also the safety of your trip.
                    You will be delivered to any point with an accuracy of a minute.
                    Our business philosophy is based on professionalism, reasonable prices and punctuality.
                    Therefore, many customers prefer to trust us.
                    LimoPullman has been working in the field of providing quality car rental services throughout Ukraine for many years.
                    Our company provides a large selection of cars for every taste, color and wallet.
                    Our experience is the key to your peace of mind and satisfaction.
                    </p>
                </div>
                <div>
                    <h3>The range of services we provide:</h3>
                    <ul>
                        <li> Beautiful car for a photo shoot; </li>
                        <li> Car rental with driver; </li>
                        <li> Meeting of delegations and partners; </li>
                        <li> Ordering a car to meet at the airport; </li>
                        <li> Business transfers and business trips in Ukraine and Europe; </li>
                        <li> Wedding car for rent; </li>
                    </ul>
                    <h3>LimoPullman is a reliable partner in the field of transport services!</h3>
                </div>`
        return userLang === 'RU' ? onRULanguage
                : userLang === 'UK' ? onUKLanguage
                : userLang === 'EN' ? onENLanguage
                : onUKLanguage;
    }
    // условия 
    conditionsTemplate(userLang) {
        let onRULanguage = `<div>
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
        let onUKLanguage = `<div>
                    <h3>Основні умови</h3>
                    <ul>
                        <li> Автомобіль подається тільки за попереднім бронюванням. </li>
                        <li> Компанія гарантує оренду автомобіля тільки на попередньо замовлений час. </li>
                        <li> Продовження часу можливо при відсутність подальшого замовлення. </li>
                        <li> Оренда автомобілів проводиться тільки по передоплаті. Але в разі відмови від оренди автомобіля задаток не повертається. </li>
                        <li> При оформленні замовлення на прокат авто з водієм в обов'язковому порядку укладається договір. </li>
                        <li> Автомобілі пересуваються по місту тільки з дозволеною ПДР швидкістю. </li>
                        <li> У тому випадку, якщо в процесі виконання замовлення виникли технічні проблеми з транспортним засобом, час на їх усунення (або очікування підмінного авто) підсумовується з часом замовлення. </li>
                        <li> Всі автомобілі виїжджають з нашої стоянки в ідеально чистому стані. У процесі поїздки по місту чистота автомобіля визначається поточними погодними умовами. </li>
                        <li> Замовник додатково оплачує платні парковки. </li>
                        <li> Додатково оплачуються послуги оренди понад визначеного в договорі часу. При цьому час понад 5 хвилин автоматично округлюється до 30 хвилин, понад 31 хвилини - до 1 години. </li>
                        <li> Крім цього, замовник додатково оплачує поїздку на орендованій автомашині за межі міста. </li>
                        <li> Для всіх автомобілів пробіг розраховується на підставі встановлених тарифів - грн / км. </li>
                    </ul>
                </div>
                <div>
                    <h3>Забороняється</h3>
                    <ul>
                        <li>Палити в салоні, а також вживати будь-які види алкогольних напоїв.</li>
                        <li>Залишати в салоні харчові відходи і будь-яке сміття (включаючи пляшки) не зібрані в пакети.</li>
                        <li>Схиляти водія до порушення будь-яких правил дорожнього руху, а також іншим неправомірним і незаконним діям.</li>
                        <li>При необхідності заїзду в будь важкодоступні місця прийняття рішення завжди залишається за водієм.</li>
                    </ul>
                </div>`
        let onENLanguage = `<div>
                    <h3>Basic conditions</h3>
                    <ul>
                        <li> Car is only available by prior reservation. </li>
                        <li> The company guarantees car rental only for pre-ordered time. </li>
                        <li> Extension of time is possible in the absence of a further order. </li>
                        <li> Car rentals are for prepayment only. But in case of refusal to rent a car the deposit will not be refunded. </li>
                        <li> When making a rental car with a driver, a contract is mandatory. </li>
                        <li> Cars move around the city only with permitted traffic speeds. </li>
                        <li> In the case of technical problems with the vehicle in the course of order fulfillment, the time for their removal (or waiting for a replacement car) is summed up over the time of the order. </li>
                        <li> All cars leave our parking lot in perfectly clean condition. In the process of a trip to the city, the cleanliness of the car is determined by the current weather conditions. </li>
                        <li> Customer pays extra for paid parking. </li>
                        <li> Extra lease fees are extra charged for the contract. The time is then more than 5 minutes automatically rounded up to 30 minutes, more than 31 minutes - up to 1 hour. </li>
                        <li> In addition, the customer pays extra for a rental car outside the city. </li>
                        <li> Mileage for all cars is calculated on the basis of set tariffs - UAH / km. </li>
                    </ul>
                </div>
                <div>
                    <h3>Forbidden</h3>
                    <ul>
                        <li>Smoke in the salon, as well as consume any type of alcoholic beverages.</li>
                        <li>Leave food waste and any garbage (including bottles) in the cabin not packed.</li>
                        <li>Encourage the driver to violate any traffic rules as well as other unlawful and illegal actions.</li>
                        <li>If you need to check into any hard-to-reach places the decision is always left to the driver.</li>
                    </ul>
                </div>`
        return userLang === 'RU' ? onRULanguage
                : userLang === 'UK' ? onUKLanguage
                : userLang === 'EN' ? onENLanguage
                : onUKLanguage;
    }
    paymentsMethodTemplate(userLang) {
        let onRULanguage = `<div>
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
        let onUKLanguage = `<div>
                    <h3>ПРЕДОПЛАТА</h3>
                    <p>
                        Для оренди автотранспорту з водієм вам необхідно внести певну суму (мінімальний час оренди авто) в якості передоплати. Можливі дві форми передоплати.
                        Ви повністю оплачуєте замовлення, згідно з усіма розрахунками на підставі його умов.
                        Ви вносите оплату за мінімальний час оренди автотранспорту, і доплачіваетеводітелю залишок у разі перевищення термінів вносите залишок суми за фактом, безпосередньо перед поїздкою.
                    </p>
                    <h3>МОЖЛИВІ СПОСОБИ ОПЛАТИ</h3>
                    <ul>
                        <li>Готівковий розрахунок в офісі нашої компанії.</li>
                        <li>Прямим перекладом з картки</li>
                        <li>Готівкою нашому водієві.</li>
                    </ul>
                </div>
                <p>
                    Постійні клієнти компанії, а також клієнти, які замовили послугу трансферу, можуть також заплатити готівкою водієві (за умови 100% передоплати безпосередньо перед поїздкою).
                </p>`
        let onENLanguage = `<div>
                    <h3>ADVANCE PAYMENT</h3>
                    <p>
                        To rent a motor vehicle with a driver you need to make a certain amount (minimum rental time) as a prepayment. There are two forms of prepayment.
                        You pay the order in full, according to all the calculations based on its terms.
                        You pay for the minimum rental time of the vehicle, and pay the driver the rest in the event of exceeding the deadline, make the rest of the amount after the fact, just before the trip.
                    </p>
                    <h3>POSSIBLE PAYMENT METHODS</h3>
                    <ul>
                        <li>Cash payment in the office of our company.</li>
                        <li>Direct translation from the card</li>
                        <li>Cash to our driver.</li>
                    </ul>
                </div>
                <p>
                    Regular customers of the company, as well as customers who have booked a shuttle service, can also pay in cash to the driver (subject to 100% advance payment immediately before the trip).
                </p>`
        return userLang === 'RU' ? onRULanguage
                : userLang === 'UK' ? onUKLanguage
                : userLang === 'EN' ? onENLanguage
                : onUKLanguage;
    }
    // условия трансфера
    transferConditions(userLang) {
        let onRULanguage = `<div>
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
        let onUKLanguage = `<div>
                        <h3> Основне </h3>
                        <ul>
                            <li> Попередня заявка-бронювання авто. </Li>
                            <li> Повна 100% передоплата або оплата водію при посадці. </Li>
                            <li> Час початку послуги ТРАНСФЕР - фактичний час прибуття літака / поїзда або час подачі за адресою клієнта. </Li>
                        </ul>
                    </div>
                    <div>
                        <h3> В ПОСЛУГУ ВКЛЮЧЕНО </h3>
                        <ul>
                            <li> Транспортний засіб на вимогу клієнта з водієм. </li>
                            <li> Професійний водій. </li>
                            <li> Мобільний зв'язок з водієм. </li>
                            <li> Зустріч водієм з табличкою в авіа або ж / д вокзалі або за адресою клієнта. </li>
                            <li> Подача авто в аеропорт, вокзал або по 1-му адресою клієнта. </li>
                            <li> Очікування клієнтів протягом 1 години в аеропорту після посадки літака. </li>
                            <li> Очікування клієнтів протягом 30 хв. на вокзалі після прибуття поїзда. </li>
                            <li> Доставка пасажирів по 1-му адресою з аеропорту або ж / д вокзалу. </li>
                        </ul>
                        <p> УВАГА - при затримці рейсу очікування клієнта в аеропорту без обмеження за часом! </p>
                        <h3> Додатково оплачуються </h3>
                        <ul>
                            <li> Платні парковки в місті, в авіа та ж / д вокзалах; </li>
                            <li> Очікування за адресою клієнта при подачі в Києві понад 15 хв.; </li>
                            <li> Очікування в аеропорту понад 1 годину, а на ж / д вокзалах понад 30 хв.; </li>
                            <li> Додаткова адреса при трансфері після або до пункту призначення; </li>
                            <li> Перевищення розрахункового часу послуги понад 5 хвилин - округляється в сторону 30 хв. оренди автомобіля; </li>
                            <li> Перевищення розрахункового часу послуги понад 30 хвилин - округляється в сторону 1 години оренди автомобіля; </li>
                            <li> Виїзд автомобіля за межі міста під час трансферу оплачується додатково за чинним тарифом з розрахунку грн / км. </Li>
                            <li> Переміщення багажу клієнта із залу прибуття до авто (від авто в зал вильоту / відправлення або квартири); </li>
                            <li> Перевезення великого або негабаритного багажу; </li>
                            <li> Перевезення тварин (узгоджується заздалегідь). </li>
                        </ul>
                    </div>`
        let onENLanguage = `<div>
                        <h3> Basic </h3>
                        <ul>
                            <li> Pre-booking a car. </li>
                            <li> Full 100% prepayment or payment to the driver upon boarding. </li>
                            <li> TRANSFER service start time - the actual time of arrival of the plane / train or the time of delivery to the client's address. </li>
                        </ul>
                    </div>
                    <div>
                        <h3> INCLUDED IN THE SERVICE </h3>
                        <ul>
                            <li> Vehicle at the request of a client with a driver. </li>
                            <li> Professional driver. </li>
                            <li> Mobile communication with the driver. </li>
                            <li> Meeting with a driver with a sign at the airport or railway station or at the client’s address. </li>
                            <li> Delivery of a car to the airport, train station or at the client's 1st address. </li>
                            <li> Waiting for customers for 1 hour at the airport after boarding the plane. </li>
                            <li> Waiting for customers for 30 minutes. at the station after the train arrives. </li>
                            <li> Delivery of passengers to the 1st address from the airport or railway station. </li>
                        </ul>
                        <p> ATTENTION - if the flight is delayed, waiting for the client at the airport without time limit! </p>
                        <h3> ADDITIONALLY PAID </h3>
                        <ul>
                            <li> Paid parking in the city, at the air and railway stations; </li>
                            <li> Waiting for the client's address when submitting in Kiev for more than 15 minutes; </li>
                            <li> Waiting at the airport for more than 1 hour, and at the railway station for more than 30 minutes; </li>
                            <li> Additional address for transfers after or to the destination; </li>
                            <li> Exceeding the estimated service time of more than 5 minutes - rounded to the side 30 minutes. car rental; </li>
                            <li> Exceeding the estimated service time of more than 30 minutes - rounded to the side of 1 hour of car rental; </li>
                            <li> Departure of the car outside the city during the transfer is paid additionally at the current tariff at the rate of UAH / km. </li>
                            <li> Transfer of the client’s luggage from the arrival hall to the car (from the car to the departure / departure hall or apartment); </li>
                            <li> Transportation of large or oversized baggage; </li>
                            <li> Transportation of animals (agreed in advance). </li>
                        </ul>
                    </div>`
        return userLang === 'RU' ? onRULanguage
                : userLang === 'UK' ? onUKLanguage
                : userLang === 'EN' ? onENLanguage
                : onUKLanguage;
    }
}