const $inputValue = document.querySelector('.input'),
      $button = document.querySelector('.add');

class Todo{
constructor(inputValue){
this.inputValue = inputValue;
this.method()
this.delete()
this.edit()

}

method(){
    // let input = document.createElement('input');
    // input.value = this.inputValue;
    // document.querySelector('.container').appendChild(input)
    let list = `
    <div class="main-to-do-list-container">
    <input type="text" class="add-input" value="${this.inputValue}" disabled="true"/>
    <img class="edit-icon" src="https://img.icons8.com/dusk/64/000000/edit-user-female.png"/>
    <img class="delete-icon" src="https://img.icons8.com/dusk/64/000000/delete-file.png"/>
    </div>
    `
    if(this.inputValue.length > 0){
       let div = document.querySelector('.container').innerHTML += list;
        // localStorage.setItem('items', div);
    }  
    // console.log(localStorage.getItem('items'))

}
delete(){
    let dlt = document.querySelectorAll('.delete-icon');
    for(let icons of dlt){
        icons.addEventListener('click', ()=>{
            icons.parentNode.remove()
            console.log(icons.parentNode)
            
        },false)
    }
  
}
edit(){
    let edt = document.querySelectorAll('.edit-icon'); 
    for(let edits of edt){
        edits.addEventListener('click', ()=>{
            if(edits.parentNode.childNodes[1].disabled === true){
                edits.parentNode.childNodes[1].disabled = false;
            }else{
                edits.parentNode.childNodes[1].disabled = true;
            }
            
            console.log(edits.parentNode.childNodes[1])
            
        },false)
    }
}

}

$button.addEventListener('click', ()=> {
let value = $inputValue.value;
let todoList = new Todo(value)
$inputValue.value = '';
})


// document.querySelector('.container').innerHTML = localStorage.getItem('items');
