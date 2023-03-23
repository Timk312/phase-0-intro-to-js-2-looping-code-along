const names = ["Guadalupe","Ollie","Aki"];
const newNames=[];

function writeCards(names){
    for (let i = 0; i < names.length; i++) {
newNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`) ;
    }
return newNames; 
}

let n=10;
function countDown(n){
    while(n>-1){
        console.log(n);
        n=n-1;
    }
}

