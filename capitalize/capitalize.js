const capitalize = (string) => {
    let value = string.split('')
    value[0]=value[0].toUpperCase()
    return value.join("");
}

module.exports = capitalize