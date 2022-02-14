const changeName = document.getElementById('changer');
let name = document.getElementById('name')

changeName.addEventListener('click',change);
// Classes with color
let colors =['blue','red','yellow','blue','green','red']
let result = ""
// change the browser's name function
function change() {
    let char = name.value.split('')
    
    for (let i = 0; i < char.length; i++) {
    if(i < 6){
        result += `<span class="${colors[i]}">${char[i]}</span>`
    }else if(i >= 6){
        let color = colors[Math.floor(Math.random() * colors.length)];
        result += `<span class="${color}">${char[i]}</span>`
    }
   
}
document.getElementById('title').innerHTML = result
return result = ""
}


