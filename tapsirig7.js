function array(arr,arr1) {
    let mergeArray = [];
    let index = 0;

    arr.map(function(element) {
        arr1.map(function(element1) {
            if(element === element1){
                mergeArray[index] = element;
                index++;
            }
        })
    });

    console.log(mergeArray);
}

array(['g','u','l','n','a','r'],['c','a','h','a','n','g','i','r','o','v','a']);