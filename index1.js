const title=document.getElementsByClassName("title1-title")[0];
const list=document.getElementsByTagName("li");
console.log(title);
console.log(list);
window.onload=function(){
    title.style.opacity=1;
    for(let i=0;i<list.length;i++){
        list[i].style.opacity=1;
        list[i].style.transform="translateX(0)";
}
}
