/* Desenvolva sua lógica aqui */

//só queria um feedback se possível de como faria para atualizar a aba entradas ou saídas na linha 58 sem precisar apertar nelas novamente ou em todos quando eu clicar para excluir tal item

//também quero perguntar sobre o margin: 0 auto;, mas esse eu prefiro que pelo menos seja em call e também sobre o index.html no github

let listIds = insertedValues.map((data) => data)

function renderizarLista(array) {

    const body = document.querySelector("#app")
    let sumValue = document.querySelector(".sum-value")
    let ul   = document.querySelector(".lists-financer")

    body.appendChild(ul)

    ul.innerHTML = ""

    let totalValue = 0

    array.forEach(element => {
        
        let li = document.createElement("li")
        let spanValue = document.createElement("span")
        let divList = document.createElement("div")
        let button = document.createElement("button")
        let divTrash = document.createElement("div")
        let imageTrash = document.createElement("img")

        li.classList.add("list-financer", "flex", "justify-between", "align-i-center")
        spanValue.classList.add("value")
        divList.classList.add("div-list", "flex", "align-i-center")
        button.classList.add("type-financer")
        divTrash.classList.add("div-trash")
        imageTrash.classList.add("trash")

        totalValue += parseFloat(element.value)

        spanValue.innerText = `R$ ${parseFloat(element.value).toFixed(2).replace(".", ",")}`

        if(element.categoryID === 0) {
            button.innerText = "Entrada"
        } else {
            button.innerText = "Saída"
        }

        divTrash.id = element.id
        imageTrash.id = element.id

        imageTrash.src = "./assets/trash.png"
        imageTrash.alt = "Lixeira para excluir"

        ul.appendChild(li)
        li.append(spanValue, divList)
        divList.append(button, divTrash)
        divTrash.appendChild(imageTrash)

        divTrash.addEventListener("click", (event) => {
            if(event.target.id == element.id) {
                const index = insertedValues.indexOf(element)
                insertedValues.splice(index, 1)
                renderizarLista(array)
            }
        })
    });

    sumValue.innerText = `R$ ${totalValue.toFixed(2).replace(".", ",")}`
}

renderizarLista(insertedValues)

function financerFilter(array) {

    let buttonsFinancer = document.querySelectorAll(".button-financer")

    buttonsFinancer.forEach(element => {
        element.addEventListener("click", (event) => {  
            if (event.target.innerText == "Todos") {
                renderizarLista(insertedValues)
            } 
            else if (event.target.innerText == "Entradas") {
                const filterListEntry = array.filter((data) => data.categoryID == 0)
                renderizarLista(filterListEntry)
            } else {
                const filterListLeave = array.filter((data) => data.categoryID == 1)
                renderizarLista(filterListLeave)
            }
            buttonsFinancer.forEach(element => {
                element.classList.remove("button-chosen")
                event.target.classList.add("button-chosen")
            });
        })
    });
}

financerFilter(insertedValues)