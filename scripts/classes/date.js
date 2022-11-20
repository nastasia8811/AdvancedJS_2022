class Date {
    constructor(date = null) {
        this.date = date;
    }
        getDate() {
            let today = new Date()
            let dd = this.date.slice(0, 2);
            let mm = this.date.slice(3, 5);
            let yyyy = this.date.slice(6);
            let date = today.getFullYear() - yyyy;
            if (mm > today.getMonth() || (mm === today.getMonth() && dd > today.getDay())) {
                date--;
            }
            return date
        }
}



