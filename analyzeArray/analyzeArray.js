const analyzeArray = (array) => {
    let average, max, min;
    max=0
    min=array[0]
    
    let total = array.reduce((acc, item)=>{
       return acc + item
    },0)

    for(let i=0; i<array.length; i++){
        if(array[i]>max){
            max = array[i]
        }
        if(array[i]<min){
            min = array[i]
        }
    }

    average = total/array.length

    return{
        average:average,
        min:min,
        max:max,
        length:array.length
    }
   }

module.exports = analyzeArray