function guid_4() {
    return Math
        .floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

var guid4 = guid_4() + guid_4() + '-' + guid_4() + '-' + guid_4() + '-' + guid_4() + '-' + guid_4() + guid_4() + guid_4();

module.exports = guid4;