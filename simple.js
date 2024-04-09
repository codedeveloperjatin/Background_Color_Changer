const simple = ["red", "blue", "green", "yellow"]

const btn = document.getElementById('btn')

btn.addEventListener('click', function(){

    const randm = Math.floor(Math.random()* simple.length)
    document.body.style.backgroundColor = simple[randm]
})


