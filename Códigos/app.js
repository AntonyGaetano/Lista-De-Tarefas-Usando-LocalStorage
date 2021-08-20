const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

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

        const pos = tarefas.indexOf(item)
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`)

        itemList.appendChild(itemText)
        itemList.appendChild(tarefaCompleta)
        itemList.appendChild(linkElement)
        

        listElement.appendChild(itemList)
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
listElement.addEventListener("click",deleteAndeCheck);

function removeTarefa(pos){
    tarefas[pos].addEventListener()
    tarefas.splice(pos, 1)
    mostraTarefas()
    salvarNoLocalStorage()
}

function salvarNoLocalStorage() {
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
} 

function deleteAndeCheck(e){

    const item = e.target;
    const Total = item.parentElement

    console.log(Total)
 
    if(item.classList[0] === "completed-btn"){
     Total.classList.toggle('completed')
    
    }
 }
 
 //Eventos
 
 