const btn=document.querySelectorAll(".button")
const heading=document.querySelector(".heading")
const body=document.querySelector("body")


heading.addEventListener("click", function(e){
    if(e.target.id=== "black"){
        body.style.backgroundColor = e.target.id;
    }
});


btn.forEach((btn)=>{
   btn.addEventListener("click", function(e){
    if(e.target.id=== "Yellow"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id=== "red"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id=== "blue"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id=== "grey"){
        body.style.backgroundColor = e.target.id;
    }
   })
});

document.getElementById('white').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
});
