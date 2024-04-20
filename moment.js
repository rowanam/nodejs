const moment = require("moment");
const date = new Date();
const parsedTime = moment(date).format("h:mm");
console.log(parsedTime);