function partition(array, start, end){
    let pivot = array[end]
    console.log(start, end, pivot)
    let i = start
    console.log("Entering for loop")
    for(let j=start; j<end; j++){
        if(array[j]<=pivot){
            // console.log(`before swap, array[j]=${array[j]},array[i]=${array[i]}`)
            // swap(array[j],array[i])
            let temp = array[j]
            array[j] = array[i]
            array[i] = temp;
            // console.log(`after swap, array[j]=${array[j]},array[i]=${array[i]}`)
            i+=1
        }
    }
    // swap(array[i], array[end])
    let temp = array[i]
    array[i] = array[end]
    array[end] = temp;
    return array
}

function swap(a,b){
    let temp = a
    a = b
    b = temp;
}

let array = [3,12,2,6,24,9]
console.log(partition(array,0,array.length-1))