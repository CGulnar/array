let text = prompt('Metn daxil edin:');
arr =[' '];
text = text.split('');
let count = 0;
for(let i=0; i<text.length; i++){
    if(arr.includes(text[i])){
        count++;
    }
}
console.log(count);
