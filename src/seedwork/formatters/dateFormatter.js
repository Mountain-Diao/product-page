const moment = require('moment');

function formatDate(date) {
    return moment(date).format('YYYY MMM DD');
}

function formatDateExcludeDay(date) {
    return moment(date).format('YYYY MMM');
}

export {
    formatDate,
    formatDateExcludeDay
}