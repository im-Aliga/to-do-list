function Revan(){
    var input=document.getElementById("input").value;
    var text=document.getElementById('textdiv');
   
    if(input.length==0){
        alert("fezail")
    }
    else{
        var h2=document.createElement("h2");
        var icon =document.createElement("i");
        icon.setAttribute("class","fa-solid fa-trash remove")
        h2.innerHTML=input;
        var divtext=document.createElement("div")
        divtext.setAttribute("class","d-flex justify-content-between bg-dark text-white mezahir")
        var div=document.getElementById("textdiv")
        divtext.appendChild(h2);
        divtext.appendChild(icon);
        div.appendChild(divtext)
        var remover=document.querySelectorAll(".remove")
        for(var i=0;i<remover.length;i++){
            remover[i].onclick=function(){
                this.parentElement.remove()
            }
        }
    }

}

