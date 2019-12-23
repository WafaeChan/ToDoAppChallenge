
let addme= document.querySelector('.addme')
let maindiv= document.querySelector('.maindiv')



addme.addEventListener('click', function(){


let inputsquare= document.querySelector('.inputsquare')
let subdiv= document.createElement('div')
let complete= document.createElement('button')
let deleteit= document.createElement('button')
let addedtext= document.createElement('h4')

complete.innerHTML= "Complete"
deleteit.innerHTML= "Delete"
addedtext.innerHTML= inputsquare.value

subdiv.style.display = "flex"
subdiv.style.justifyContent = "center"
subdiv.style.marginTop = "50px"

complete.style.width = "150px"
complete.style.height = "80px"
complete.style.border = "solid 3px rgb(200, 200, 200)"
complete.style.borderRadius = "10px"
complete.style.fontSize = "20px"
complete.style.color = "#7A7679"
complete.style.backgroundColor = "white"


deleteit.style.width = "150px"
deleteit.style.height = "80px"
deleteit.style.border = "solid 3px rgb(200, 200, 200)"
deleteit.style.borderRadius = "10px"
deleteit.style.fontSize = "20px"
deleteit.style.color = "#7A7679"
deleteit.style.backgroundColor = "white"

deleteit.onmouseover = function(){
    deleteit.style.backgroundColor = "#4696E5"
    deleteit.style.color = "white"
    deleteit.style.transition = "0.5s"
}

deleteit.onmouseleave = function() {

    deleteit.style.backgroundColor = "white"
    deleteit.style.color = "#7A7679"
    deleteit.style.transition = "0.5s"
}

complete.onmouseover = function(){
    complete.style.backgroundColor = "#4696E5"
    complete.style.color = "white"
    complete.style.transition = "0.5s"
}

complete.onmouseleave = function() {

    complete.style.backgroundColor = "white"
    complete.style.color = "#7A7679"
    complete.style.transition = "0.5s"
}

addedtext.style.fontSize = "20px"
addedtext.style.color = "#7A7679"
addedtext.style.marginLeft = "50px"

subdiv.appendChild(complete)
subdiv.appendChild(deleteit)
subdiv.appendChild(addedtext)

console.log(subdiv)
maindiv.prepend(subdiv)
inputsquare.innerHTML= ""

complete.addEventListener('click', function(){

    complete.innerHTML= "Undo"
    addedtext.style.textDecoration= "line-through"
})
deleteit.addEventListener('click', function (){
    subdiv.remove()
})

})






// let addBtn= document.querySelector('.addme')
// let response= document.querySelector('.response')

// addBtn.addEventListener('click', ()=>{


// let inputVal = document.querySelector('.inputsquare')
// let respContent = document.createElement('div')
// let completeBtn = document.createElement('button')
// let removeBtn = document.createElement('button')
// let outputVal = document.createElement('h4')

// completeBtn.innerHTML= "Complete"
// removeBtn.innerHTML= "Remove"
// outputVal.innerHTML= inputVal.value

// respContent.appendChild(completeBtn)
// respContent.appendChild(removeBtn)
// respContent.appendChild(outputVal)

// response.prepend(respContent)
// inputVal.innerHTML= ""

// })