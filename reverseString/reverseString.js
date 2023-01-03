const reverseString = (string)=>{
    let value = string.split('')
    let result = []
    for(let i=0; i<value.length; i++){
        result[i] = value[value.length-1-i]
    }
    return result.join('')
}

module.exports = reverseString