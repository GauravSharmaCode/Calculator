let string ="";
let button= document.querySelectorAll('.button')
Array.from(button).forEach((button) => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='sQ'){
            string = string*string;
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='sR'){
            string = Math.sqrt(string);
            document.querySelector('input').value = string;
        }
        else{
       
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
        }
        console.log(e.target)
})
})