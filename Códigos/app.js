const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

inputElement.focus();

function mostraTarefas() {

    listElement.innerHTML = ''
   

    for (item of tarefas) {

        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item)

        itemList.setAttribute('class', 'mdl-list__item')

        const linkElement = document.createElement('button')
        linkElement.classList.add("delete-btn");

        linkElement.innerHTML='<i class="fas fa-trash"></i>'

        const tarefaCompleta=document.createElement('button');
        tarefaCompleta.classList.add("completed-btn");
        tarefaCompleta.innerHTML='<i class="fas fa-check"></i>'

        const Div = document.createElement('div')
        Div.classList.add("the-div");

        const Div2 = document.createElement('div')
        Div2.classList.add("the-div2");

        const pos = tarefas.indexOf(item)
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`)

        itemList.appendChild(itemText)
        Div.appendChild(tarefaCompleta)
        Div.appendChild(linkElement)
        itemList.appendChild(Div)
        Div2.appendChild(itemList)
        

        listElement.appendChild(Div2)
    }
}

mostraTarefas()

function addTerefa() {
    const tarefa = inputElement.value

    tarefas.push(tarefa)

    inputElement.value = ''
    mostraTarefas()
    salvarNoLocalStorage()
}

buttonElement.setAttribute('onclick', 'addTerefa()')
listElement.addEventListener("click",AndeCheck);

function removeTarefa(pos){
    tarefas.splice(pos, 1)
    mostraTarefas()
    salvarNoLocalStorage()
}

function salvarNoLocalStorage() {
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
} 

function AndeCheck(e){

    const item = e.target;
    const Total = (item.parentElement).parentElement

    console.log(Total)
 
    if(item.classList[0] === "completed-btn"){
     Total.classList.toggle('completed')
    
    }
 }
 
 //Eventos
 
 