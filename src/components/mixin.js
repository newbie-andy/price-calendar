import jsCalendar from 'js-calendar'
const mixin = {
    data() {
        return {
            calendarConfig: {
                onlyDays: false,
                weekStart: 1,
                lang: 'en'
            },
            currentDate: {
                currentDateTime: '',
                year: 0,
                month: 0
            },
            calendarData: {}
        }
    },
    methods: {
        // 初始化时间
        initDate(year, month) {
            this.currentDateTime = arguments.length ? new Date(year, month) : new Date()
            this.currentDate.year = this.currentDateTime.getFullYear()
            this.currentDate.month = this.currentDateTime.getMonth()
            this.dealCalendar()
        },
        initCalendarConfig(config = {
            onlyDays: false,
            weekStart: 1,
            lang: 'en'
        }) {
            this.calendarConfig = config
        },
        //  改变年或者月
        changeNumber(dateType, dealType) {
            if (dealType === 'plus') {
                this.currentDate[dateType]++
                if(dateType === "month" && this.currentDate[dateType] > 11) {
                    this.currentDate[dateType] = 0
                    this.changeNumber('year', 'plus')
                }
            } else if (dealType === 'sub') {
                this.currentDate[dateType]--
                if(dateType === "month" && this.currentDate[dateType] < 0) {
                    this.currentDate[dateType] = 11
                    this.changeNumber('year', 'sub')
                }
            } else {
                throw new TypeError('处理类型错误')
            }
            //  当时间改变时我们将重新处理数据
            this.dealCalendar()
        },
        //  获取当前时间的日历数据
        getCalendar() {
            let generator = new jsCalendar.Generator(this.config)
            let monthDetail = generator(this.currentDate.year, this.currentDate.month, jsCalendar.addLabels)
            return monthDetail
        },

        dealCalendar() {
            this.calendarData =  this.getCalendar()
            console.log(this.calendarData)
        }
    }

}

export default mixin