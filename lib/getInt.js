
function getInt(num) {
    if (!num) {
        throw Error("param can't be empty!");
    } else {
        if (typeof num === 'number') {
            if (Number.isInteger(num)) {
                return num;
            } else {
                return parseInt(num);
            }
        } else if (typeof num === 'string') {
            if (Number.isNaN(parseInt(num))) {
                throw Error("please make sure param is number string!");
            } else {
                return parseInt(num);
            }
        } else {
            throw Error("error");
        }
    }
}


module.exports = getInt;