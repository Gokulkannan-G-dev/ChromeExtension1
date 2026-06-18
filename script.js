let led = [];

let inputid = document.getElementById("input-id");
let inputbtn = document.getElementById("button-save");
let ul = document.getElementById("ul-li");
let deletebtn = document.getElementById("button-delete");


let ledFromLocal = JSON.parse( localStorage.getItem("led"));

if(ledFromLocal){
    led = ledFromLocal;
    render(led);
}

deletebtn.addEventListener("dblclick",function (){
    localStorage.clear();
    led = [];
    render(led);
})


   inputbtn.addEventListener("click", function () {

      let value = inputid.value;
  
      led.push(value);
  
      localStorage.setItem("led", JSON.stringify(led));
  

      render(led);
  
      inputid.value = "";
      


  
  });



  function render(arrays) {

   let listitem = "";

   for (let i = 0; i < arrays.length; i++) {

       listitem += `
       <li>
           <a target="_blank" href="${arrays[i]}">${arrays[i]}</a>
       </li>
       `;
   }

   ul.innerHTML = listitem;
}



