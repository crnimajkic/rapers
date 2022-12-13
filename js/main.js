const button = document.querySelector('button')

button.addEventListener('click', getRealName)

async function getRealName() {

    const rapperName = document.querySelector('input').value
    try {
        const response = await fetch(`/api/${rapperName}`)

        const data = await response.json()
        document.querySelector('h2').innerText = data.birthName
    } catch (err) {
        console.log(err)
    }
}