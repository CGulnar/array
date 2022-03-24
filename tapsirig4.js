function array(arrr){
    let arr =arrr.split(',');
    let cem = 0;
    let ortalama;
        for (let i = 0; i < arr.length; i++){
            cem+=Number(arr[i]);
        }
        ortalama=cem/arr.length;
        for (let i = 0; i < arr.length; i++){
            if(Number(arr[i])>ortalama){
                console.log(arr[i]);
            }

        }
}
array('2,5,6,7,3,2,4');