function array(arrr){
    let arr =arrr.split(',');
    let cem = 0;
    let ortalama=0;
        for (let i = 0; i < arr.length; i++){
            cem+=Number(arr[i]);
            ortalama=cem/arr.length;
  
}
    return ortalama;
}
array('5,6,7,3,2,4');