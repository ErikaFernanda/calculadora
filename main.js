function start() {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9,0]
   
    
    const n = document.createElement("h3");
    for (var i = 0; i < num.length; i++) {
        
        node =document.createElement('div');
        node.addEventListener("click", click);
        
        node.classList.add("number")
        node.innerHTML='<div onclick='+click()+'>'+num[i]+'</div>'
        document.getElementById("numbers").append(node);
        console.log(i)
    }


}
function click(e){
    console.log(e)
}
