const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const demo = document.getElementById("demo")
    
demo.innerHTML = 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML; 

btn1.addEventListener("click", ()=>{
    demo.innerHTML = 'Button 1 when clicked is: ' + y[0].innerHTML;
})


btn2.addEventListener("click", ()=>{
    demo.innerHTML = 'Button 2 when clicked is: ' + y[1].innerHTML;
})