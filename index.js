let first, second, third,fourth;
function myfunction(val){
    first=parseInt(val)
    return first
}
function myfunction1(val){
    second=parseInt(val)
    return second
}
function myfunction2(val){
    third=parseInt(val)
    return third
}
function myfunction3(val){
    fourth=parseInt(val)
    return fourth
}
fifth=document.getElementById("continue")
sixth=document.getElementById("score")
ra=document.getElementById("rate")
fifth.addEventListener("click",myFunction)
function myFunction(){
    let abc=(first+second+third+fourth)
    let ab=abc/4    
    sixth.innerHTML=Math.trunc(ab)
    if((ab>0)&& ab<25){
        ra.innerHTML="1%"
    }
    else if((ab>=25)&& ab<50){
        ra.innerHTML="25%"
    }
    else if((ab>=50)&& ab<75){
        ra.innerHTML="50%"
    }
    else if(ab>75){
        ra.innerHTML="75%"
    }
}
