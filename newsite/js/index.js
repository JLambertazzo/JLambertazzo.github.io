document.addEventListener('DOMContentLoaded', () => {
    fetch('https://salty-brook-12944.herokuapp.com/weather/Toronto').then(res => res.json()).then(json => {
        new RainMachine('.rain-container', json)
    })
    const myList = new ListExtender();
    myList.appendTo('#list-container');
    myList.setPlaceholder('Type Here!');
    myList.setInputType('text');
})