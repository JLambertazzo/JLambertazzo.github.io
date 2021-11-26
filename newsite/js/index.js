document.addEventListener('DOMContentLoaded', () => {
    const rm = new RainMachine('.rain-container', { precipitation: Math.floor(Math.random() * 2) > 0 ? 'rain' : 'snow', wind: Math.floor(Math.random() * 3) })
    const myList = new ListExtender();
    myList.appendTo('#list-container');
    myList.setPlaceholder('Type Here!');
    myList.setInputType('text');
})