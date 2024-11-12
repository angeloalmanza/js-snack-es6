const numeri = [42, 78, 15, 63, 89];

const subArray = (array, min, max) => {
    const subNumeri = [];
    for(let i = 0; i < array.length; i++){
        if(i >= min && i <=max){
            subNumeri.push(array[i]);
        }
    }
    return subNumeri;
}

console.log(subArray(numeri, 1, 3));