let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<input class="checkbox" type="checkbox" > <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}