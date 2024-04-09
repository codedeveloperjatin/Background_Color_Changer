const hex = ["green", "red", "gray", "orange"]

const btn = document.getElementById('btn')

btn.addEventListener('click', function(){

    const randomNumber = Math.floor(Math.random() * hex.length)

    document.body.style.backgroundColor = hex[randomNumber]
})