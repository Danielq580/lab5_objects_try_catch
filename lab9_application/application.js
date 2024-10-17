// key event
document.addEventListener("keydown", function(event){
    // prompt the the key was pressed
    console.log(`key ${event.key} was pressed`)
    // prompt the ASCII code of the key that was pressed
    console.log(`ASCII code of the pressed key is ${event.keyCode}`)
    //prompt the key that was pressed
    console.log(`Using 'which' property ${event.which}`)
})  

// class toggle example
// collect element
let btnpressme = document.querySelector("button.btnpressme")
// add event
btnpressme.addEventListener("click", function(e){
if (e.target.textContent ==="PRESS ME"){
    e.target.textContent ="Button was pressed!"
}
else{
    e.target.textContent ="PRESS ME"
}
// toggle class in a button
e.target.classList.toggle("btnactive")
})

// PREVENT DEFAULY EXAMPLE
// collect element
let linkqcc = document.querySelector(".linkqcc")
linkqcc.addEventListener('click', function(event){
    event.preventDefault()
    alert("Website out of service")
})

//MODAL WINDOW
// collect element
let modalwindow = document.querySelector(".modalwindow")
let closemodalx = document.querySelector(".closemodalx")
let btnpromotion = document.querySelector(".btnpromotion")
let btnopenmodal = document.querySelector(".btnopenmodal")
// add an event to open a modal window
btnopenmodal.addEventListener("click",function(){
    modalwindow.style.display = "block"
})
// add an event to close the modal window
closemodalx.addEventListener("click", function(){
    modalwindow.style.display = "none"
})
btnpromotion.addEventListener("click",function(){
    modalwindow.style.display = "none"
})