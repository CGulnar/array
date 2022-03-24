function array(arr,char) {
    let newArray = []

    for (let i = 0; i < arr.length; i++) {      
        if(arr[i][0] === char){
            newArray.push(arr[i])
        }       
    }
    console.log(newArray)
}

array(['gunel','suqra','gulnar','bulqeyis'],'g')