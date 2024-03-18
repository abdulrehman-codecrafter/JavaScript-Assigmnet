document.getElementById('alt-name').onclick=function () {
    alert('Abdul Rahman')
}

document.getElementById('alt-number').onclick=function () {
    alert(5);
}

document.getElementById('show-var').onclick=function () {
    
    let num1=5;
    let num2=10;
    let statement ='let num1 = '+ num1 +"<br />" + "let num2 = 10";
    document.getElementById('statement').innerHTML=statement
}

document.getElementById('show-cC').onclick=function () {
    
    let statement ="firstName <br /> lastName <br /> masterCard <br /> interCity";
    document.getElementById('statement').innerHTML=statement
}

document.getElementById('clr-statement').onclick=function () {
    
    document.getElementById('statement').innerHTML=''
}

document.getElementById('clr-output').onclick=function () {
    
    document.getElementById('output').innerHTML=''
}

document.getElementById('sum').onclick=function () {
    
    let num1=10;
    let num2=5;
    let sum=num1+num2;

    let statement =" num1 = "+ num1 +"<br />" +  " num2 =  "+num2+"<br> sum = "+num1+" + "+num2;
    document.getElementById('statement').innerHTML=statement
    document.getElementById('output').innerHTML=sum;
}

document.getElementById('sub').onclick=function () {
    
    let num1=10;
    let num2=5;
    let sub=num1-num2;

    let statement =" num1 = "+ num1 +"<br />" +  " num2 =  "+num2+"<br> sub = "+num1+" - "+num2 ;
    document.getElementById('statement').innerHTML=statement
    document.getElementById('output').innerHTML=sub;
}

document.getElementById('mul').onclick=function () {
    
    let num1=10;
    let num2=5;
    let mul=num1*num2;

    let statement =" num1 = "+ num1 +"<br />" + " num2 =  "+num2+"<br> mul = "+num1+" * "+num2 ;
    document.getElementById('statement').innerHTML=statement
    document.getElementById('output').innerHTML=mul;
}

document.getElementById('div').onclick=function () {
    
    let num1=10;
    let num2=5;
    let div=num1/num2;

    let statement =" num1 = "+ num1 +"<br />" + " num2 =  "+num2+"<br> div = "+num1+" / "+num2 ;
    document.getElementById('statement').innerHTML=statement
    document.getElementById('output').innerHTML=div;
}

document.getElementById('cal').onclick=function () {
    
    let num=36 / 6 * 3 + 2 ** 4 - (3 + 5);

    let statement ="let num = 36 / 6 * 3 + 2 ** 4 - (3 + 5)" 
    document.getElementById('statement').innerHTML=statement
    document.getElementById('output').innerHTML=num;
}


