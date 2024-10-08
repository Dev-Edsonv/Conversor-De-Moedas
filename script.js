
let convertButton = document.querySelector("button")
let currencySelect = document.querySelector("#switchTo")

function convertValues() {

    let inputCurrency = document.querySelector("#result").value
    let myValue = document.querySelector("#value")
    let myResult = document.querySelector("#resultValue")
    let imageCurrency = document.querySelector(".seccondCurrency")

    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "dolar") {
        myResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)

        imageCurrency.src = "./img/usd.png"
    }
    if (currencySelect.value == "euro") {
        myResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday )

         imageCurrency.src = "./img/euro.png"
    }

    if (currencySelect.value == "real") {
        myResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency / euroToday )
    }



  




}

convertButton.addEventListener("click", convertValues)