function array(arr){
    let newArray = [];
for (let i = 0; i < arr.length; i++) {
    if ((arr[i]) % 2 == 0){
        newArray.push(arr[i]);
    }
}
return newArray;
}
array('5,6,7,3,2,4,66');