
// Function for back to top button/image
let topButton=document.getElementById("back-to-top");
topButton.addEventListener("click",function(){
    document.documentElement.scrollTop = 0,
    document.body.scrollTop = 0;
});
window.onscroll=function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display="block";
    }else{
        topButton.style.display="none";
    }
}; 
