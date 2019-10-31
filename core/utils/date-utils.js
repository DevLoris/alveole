class DateUtils {
    /**
     * Add a way to get Week Number
     * @param d
     * @returns number
     */
    static getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        return  Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    }
}

module.exports.DateUtils = DateUtils;