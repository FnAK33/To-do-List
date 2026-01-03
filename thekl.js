let inp= document.getElementById ('testo')
let data=document.getElementById('data')

let corpo=document.querySelector('.corpo')
let divi=document.querySelector('.todo')

let todo=[]



function aggiungi() {

    if (inp.value !== '')
    {
            todo.push(inp.value)

    console.log(todo);


    
    corpo.innerHTML+=`<div class='todo'>
     <p> ${inp.value} </p> 
     <p>${data.value}</p>  <button onclick='cancella(this)' class='delete'>Delete</button>

     </div> `


     inp.value=''
    }
    else {inp.style.border='solid red';
        inp.placeholder='WRITE SOMETHING!!'
        setTimeout(() => {
            inp.style.border='solid 2px ';
                inp.style.borderRight=' none';
        inp.placeholder=''
        },2000)
    }
}

function cancella(btn) {
    btn.parentElement.classList.add('puf');

    setTimeout(() => {
btn.parentElement.remove()
            }, 1000);
}

