
let convertButton = document.querySelector("button")
let currencySelect = document.querySelector("#switchTo")
let myText = document.querySelector(".currencyParagraph")

function convertValues() {

    let inputCurrency = document.querySelector("#result").value
    let myValue = document.querySelector("#value")
    let myResult = document.querySelector("#resultValue")
    let imageCurrency = document.querySelector(".seccondCurrency")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.6
    const bitcoinsToday = 100

    myValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)

    if (currencySelect.value == "dolar") {
        myResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)

        myText.innerHTML = "Dólar"
        imageCurrency.src = "./img/usd.png"
        
    }
    if (currencySelect.value == "euro") {
        myResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)

        myText.innerHTML = "Euro"
        imageCurrency.src = "./img/euro.png"
    }

    if (currencySelect.value == "libra") {
        myResult.innerHTML = new Intl.NumberFormat("gbp", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)

        myText.innerHTML = "Libra"
        imageCurrency.src = "./img/libra.png"
    }

    if (currencySelect.value == "bitcoins") {
        myResult.innerHTML = new Intl.NumberFormat("btc", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / bitcoinsToday)

        myText.innerHTML = "Bitcoins"
        imageCurrency.src = "./img/bitcoin.png"
    }

}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", convertValues)