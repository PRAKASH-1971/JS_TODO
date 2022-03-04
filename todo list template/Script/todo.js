var todoList = JSON.parse(localStorage.getItem("todoDataBase"));
console.log(todoList);
var complete = []

todoList.map(function(elem){
    var row = document.createElement("tr")

    var col1 = document.createElement("td")
    col1.innerText = elem.name

    var col2 = document.createElement("td")
    col2.innerText = elem.quantity

    var col3 = document.createElement("td")
    col3.innerText = elem.priority
    
    
    var col4 = document.createElement("td")
    col4.className = "col4"

    var input = document.createElement("input");
    input.type = "checkbox";
    input.className = "css-class-name";
    input.addEventListener("click",function(){
        markcomplete(elem);
    }) 


    var h3 = document.createElement("h3")
    h3.textContent = "Mark as Complete"     
    
 
    col4.append(input,h3); 
    row.append(col1,col2,col3,col4)
    document.querySelector("#body").append(row)

})


function  markcomplete(elem){
    console.log(elem)
    complete.push(elem)
    localStorage.setItem("acc",JSON.stringify(complete))
}