
const listElement = document.querySelector('.ul')
const inputElement = document.querySelector('.input')
const buttonELement = document.querySelector('.button')

const tarefas = []

function mostraTarefa(){
    listElement.innerHTML = ""

    for(item of tarefas){
        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item)

        itemList.setAttribute('class', 'mdl-list__item')

        const linkElement = document.createElement('a')
        linkElement.setAttribute('class', 'material-icons')

        const linkText = document.createTextNode('delete')
        linkElement.appendChild(linkText)

        const pos = tarefas.indexOf(item)
        linkElement.addEventListener('click',removeTarefa(pos))

        itemList.appendChild(itemText)
        itemList.appendChild(linkElement)

        listElement.appendChild(itemList)
    }
}

mostraTarefa()

function addTarefa(){
    const tarefa = inputElement.value

    tarefas.push(tarefa)

    inputElement.value = ""
    mostraTarefa()
}

buttonELement.addEventListener('click', addTarefa)

function removeTarefa(pos){
    tarefas.splice(pos,1)
    mostraTarefa()
}