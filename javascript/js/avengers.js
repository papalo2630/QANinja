var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers']

function listaVingadores() {

    var ul = document.getElementById('avengers') // <ul><li>Tony Stark</li></ul> 
    ul.innerHTML = ''

    avengers.forEach(function (name) {
        var li = document.createElement('li') // <li></li>
        var text = document.createTextNode(name) // Tony Stark
        li.appendChild(text) // <li>Tony Stark</li>
        ul.appendChild(li) // <ul><li>Tony Stark</li></ul>
    })
}