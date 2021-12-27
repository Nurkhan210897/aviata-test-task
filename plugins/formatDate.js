import Vue from "vue"

Vue.filter('formatDate', function(value, format) {
    if (value) {
        const months = [
            'янв',
            'фев',
            'мар',
            'апр',
            'мая',
            'июн',
            'июл',
            'авг',
            'сен',
            'ноя',
            'дек',
        ];
        const daysOfTheWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        const formatDate = value;
        const date = new Date(formatDate)
        const day = date.getDate();
        const dayName = daysOfTheWeek[date.getDay()]
        const month = date.getMonth()
        const year = date.getFullYear()
        const monthName = months[month]
        const hour = date.getHours()
        const minute = date.getMinutes()

        if (format === 'dayAndMounth') {
            return `${day} ${monthName}, ${dayName}`
        }

        if (format === 'time') {
            return `${hour}:${minute<10?'0':''}${minute} `

        }
    }
})
