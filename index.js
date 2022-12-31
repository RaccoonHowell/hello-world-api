const openButton = document.getElementById("open-btn")
const openUrl = "https://sandbox.api.service.nhs.uk/hello-world/hello/world"

const appResButton = document.getElementById("app-restricted-btn")
const appResUrl = "https://sandbox.api.service.nhs.uk/hello-world/hello/application"

openButton.addEventListener("click", () => {
    fetch(openUrl)
        .then(res => res.json())
        .then(data => console.log(data))
})

appResButton.addEventListener("click", () => {
    fetch(appResUrl, {
        headers: {
            "apikey": "zdb9BLQ28GMcNNMtjWS7KSBhRzHF5j98"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
})