document.addEventListener('DOMContentLoaded', () => {
    fetch('https://salty-brook-12944.herokuapp.com/weather/Toronto').then(res => res.json()).then(json => {
        const rm = new RainMachine('.rain-container', json)
        document.querySelector('#weather-loading').classList.add('hidden')
        document.querySelector('#weather-loaded').classList.remove('hidden')
        const colour = rm.getSkyColour()
        // set all relevant colours
        document.querySelectorAll('.sky-colour').forEach(el => {
            el.style.color = colour
            console.log(el)
        })
    })
    fetch('https://salty-brook-12944.herokuapp.com/weather/Winnipeg').then(res => res.json()).then(json => {
        const rm2 = new RainMachine('.rain-container-2', json)
    })
    const myList = new ListExtender();
    myList.appendTo('#list-container');
    myList.setPlaceholder('Type Here!');
    myList.setInputType('text');
})

function search(e) {
    const val = document.querySelector('#search').value
    fetch(`https://salty-brook-12944.herokuapp.com/weather/${val}`).then(res => res.json()).then(json => {
        const rm2 = new RainMachine('.rain-container-2', json)
    })
}