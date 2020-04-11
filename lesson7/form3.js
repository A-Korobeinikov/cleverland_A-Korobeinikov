
function checkForm(){
	let p=document.getElementsByTagName('p');
    let c=document.forms[0].color.value;
    let s=document.forms[0].size.value;
  
for(let i=0; i<p.length; i++){
p[i].style.color=c;
p[i].style.fontSize=s;
}
}
let t=setInterval(checkForm,50);