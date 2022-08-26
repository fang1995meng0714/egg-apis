// import { v4 as uuidv4 } from 'uuid';
const { v4 } = require("uuid");

function uuid() {
    return v4().replace("-", "").substr(0, 12);
}

function cTime() {
    return +new Date();
}

module.exports = {
    uuid, cTime
}