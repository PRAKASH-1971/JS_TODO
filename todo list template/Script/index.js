document.querySelector("#form").addEventListener("submit",onsubmit);

var tarr = JSON.parse(localStorage.getItem("todoDataBase"))||[];


function onsubmit(event){
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var priority = document.querySelector("#priority").value;

  console.log(name,quantity,priority);

  var tobj = {
      name : name,
      quantity : quantity,
      priority : priority,
  };
  tarr.push(tobj);
  console.log(tarr);
  localStorage.setItem("todoDataBase",JSON.stringify(tarr));

}
