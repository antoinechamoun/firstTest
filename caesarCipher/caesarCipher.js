const encrypt = (string, key) => {
    let value = string.split("")

    for(let i=0; i<value.length; i++){
        if(isCharacterALetter(value[i])){
            value[i] = replace(value[i], key)
        }
    }

    let result = value.join('')
    return result
} 

const replace = (a, key) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let aIndex = alphabet.indexOf(a.toLowerCase())

    if(key > alphabet.length-aIndex-1){
        return a === a.toUpperCase() ? alphabet[key-(alphabet.length-aIndex)].toUpperCase() : alphabet[key-(alphabet.length-aIndex)]
    }

    return a === a.toUpperCase() ? alphabet[aIndex+key].toUpperCase() : alphabet[aIndex+key]
}

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

module.exports = encrypt