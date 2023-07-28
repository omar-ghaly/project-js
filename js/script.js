var order = document.querySelectorAll(".order")


var content = document.querySelector("#content")


var btn = document.querySelector("#btn1")


var result = document.querySelector(".result")

var totalprice = 0

var total = document.querySelector(".Total-Price")


order.forEach(function (item){
    item.onclick = function(){
        content.innerHTML += item.getAttribute("tittle") + " - "
        
        
        if (content.innerHTML != ""){
            btn.style.display = "block"
        }
        if (content.innerHTML != ""){
            total.style.display = "block"
        }

        totalprice += +(item.getAttribute("price"))

    }
    
})


btn.onclick = function() {
   result.innerHTML = totalprice 
   if (content.innerHTML != ""){
    result.style.visibility = "visible"
}

}


