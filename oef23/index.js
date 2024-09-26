


let output="";

for (let i=0;i<=99;i++){
    if(i<=9){
        output = output + `0${i},`;

    }else if (i<99){
        output = output + `${i},`;
    }
    if(i == 99){
        output = output +`${i}`;
    }
}
console.log(output)