var myInp = document.querySelector(".input input");
var inpClear = document.querySelector(".input .remove");
var sendBtn = document.querySelector(".send");
var hs = document.querySelector(".hide-show .rfrf");

inpClear.addEventListener("click",function(){
    myInp.value = "";
})

sendBtn.addEventListener("click",function(){
    if(myInp.value.trim() != ""){
        document.querySelector(".error").innerText = "";
        let elem = document.createElement("li");
        elem.innerHTML =  `
        <li class="item">
            <span>${myInp.value.trim()}</span>
            <div class="remove">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </li>
        `;
        document.querySelector(".list").append(elem);
        myInp.value = "";
    }
    else{
        document.querySelector(".error").innerText = "Bos mesaj gonderile bilmez !"
    }
    
    for(let item of document.querySelectorAll(".list .item .remove")){
        item.addEventListener("click",function(){
            console.log("sasaas")
            this.parentElement.remove();
        })
    }
})


$(document).ready(function(){
    $(".close").click(function(){
        $(".list").toggle("");
    })
})