const node_for_click = document.getElementById('for_click')

function find_edit(){
    const item = document.getElementsByTagName('span')[1]
    console.log(item.innerText)
    item.innerText = 'Velikanov'

    const itema = document.getElementsByTagName('span')[2]
    console.log(itema.innerText)
    itema.innerText = 'Ivan'

    const itemb = document.getElementsByTagName('span')[3]
    console.log(itemb.innerText)
    itemb.innerText = 'Vitalievich'
}

node_for_click.addEventListener("click",find_edit)
