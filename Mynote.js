 //add bookbutton function
 var plus =document.getElementById("but4")
 var shadow = document.getElementById("shadow")
 plus.addEventListener("click",function(){
     shadow.style.display="block"
 })


 //cancel form function
 var cancel = document.getElementById("but3")
 cancel.addEventListener("click",function(event){
    event.preventDefault()
    shadow.style.display="none"
 })

 //add image function
var inputfile= document.getElementById("cf")
var profilepic= document.getElementById("img")
inputfile.onchange = function(){
photo=URL.createObjectURL(inputfile.files[0])
profilepic.src=photo
}
 //add book function
 var add=document.getElementById("but2")
 var cont=document.getElementById("cont")
 var bookname = document.getElementById("ip1")
 var something = document.getElementById("ip2")
 var author = document.getElementById("ip3")
 
 add.addEventListener("click",function(event){
 event.preventDefault()
 var div=document.createElement("div")
 div.setAttribute("class","contbook")
 div.innerHTML=` <h2 id="h2">${bookname.value}</h2><br>
                  <p>${something.value}</p>
                  <h3 id="h3">${author.value}</h3>
                  <img id="img" src= ${profilepic.src}>
                  <label for="cf">Add Photo</label><input  id="cf" type="file" accept="image/jpeg ,image/png ,image/jpg">
                  <button id="but1" onclick="delet(event)">Delet</button>`
   cont.append(div)
   shadow.style.display="none"
  
 })
 
 //delet function
function delet(event)
{
 event.target.parentElement.remove()
}

//UNDU function
var undu = document.getElementById("but5")
undu.addEventListener("click",function(){
 var div=document.createElement("div")
  div.setAttribute("class","contbook")
 div.innerHTML=` <h2 id="h2">${bookname.value}</h2><br>
                  <p>${something.value}</p>
                  <h3 id="h3">${author.valuen}</h3>
                  <img id="img" src= ${profilepic.src}>
                  <button id="but1"  onclick="delet(event)">Delet</button>`
  cont.append(div)
})