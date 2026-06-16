let led = [];
let inputid = document.getElementById("input-id");
let inputbtn = document.getElementById("button-save");
let ul = document.getElementById("ul-li");


inputbtn.addEventListener("click" , function(){
    led.push(inputid.value);
    renderItems();
    inputid.value = "";
});


function renderItems(){
   let listitem = "";
   listitem += `
   <li>
      <a target='_blank' href='${inputid.value}'>${inputid.value}</a>
   </li>
   
   `;

   ul.innerHTML += listitem
  //let a = document.createElement("li");
  //a.innerHTML = inputid.value;
   //ul.append(a);


}



