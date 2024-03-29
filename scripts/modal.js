/* Desenvolva sua lógica aqui */

function adicionarValor(array) {

    const modal  = document.querySelector(".modal-black")
    const openModal = document.querySelector(".button-register")
    const closeModal = [...document.querySelectorAll(".close")]

    let form         = document.querySelector("#form-financer")
    let valueMoney   = document.querySelector("#value")
    let valueType    = [...document.querySelectorAll(".buttons-value")]
    let buttonSubmit = document.querySelector(".insert-value")
    

    openModal.addEventListener("click", () => {
        modal.classList.add("flex")
    })

    closeModal.forEach(element => {
        element.addEventListener("click", () => {
            modal.classList.remove("flex")
            valueType.forEach(element => {
                element.classList.remove("button-chosen")
            });
        })
    });
    
    let category = 0

    valueType.forEach(element => {
        element.addEventListener("click", (event) => {
            if(event.target.innerText == "Entrada") {
                category = 0
            } else {
                category = 1
            }
            valueType.forEach(element => {
                element.classList.remove("button-chosen")
                event.target.classList.add("button-chosen")
            });
            event.preventDefault()
        })
    });
    

    form.addEventListener("submit", (event) => {

        if(typeof +valueMoney.value != "number"){
            valueMoney.value = ""
        }

        let registerValue = {
            id: listIds.length,
            value: parseFloat(valueMoney.value),
            categoryID: category
        }

        console.log(valueMoney.value)

        listIds.push(registerValue)
        array.push(registerValue)

        valueType.forEach(element => {
            element.classList.remove("button-chosen")
        });

        modal.classList.remove("flex")

        renderizarLista(insertedValues)
        event.preventDefault()
    })
}

adicionarValor(insertedValues)