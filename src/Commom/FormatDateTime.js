export const FormatDateTime = (date) => {
    if (date === undefined) {
        let data = 'N/A'
        return data;
    }
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        f = d.getMilliseconds();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    if (h.length < 2)
        h = '0' + day;
    if (m.length < 2)
        m = '0' + day;

    return [h, m].join(':') + ` ` + [day, month, year].join('-')


}