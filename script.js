let led = [];

let inputid = document.getElementById("input-id");
let inputbtn = document.getElementById("button-save");
let ul = document.getElementById("ul-li");



   inputbtn.addEventListener("click", function () {

      let value = inputid.value;
  
      led.push(value);
  
      localStorage.setItem("led", JSON.stringify(led));
  
      renderItems();
  
      inputid.value = "";
      console.log(localStorage.getItem("led"));
  
  });



  function renderItems() {

   let listitem = "";

   for (let i = 0; i < led.length; i++) {

       listitem += `
       <li>
           <a target="_blank" href="${led[i]}">${led[i]}</a>
       </li>
       `;
   }

   ul.innerHTML = listitem;
}



