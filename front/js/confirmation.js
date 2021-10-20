function main(){
    const idNode = document.getElementById("orderId");
    idNode.innerText = localStorage.getItem("orderId");
    console.log(localStorage.getItem("orderId"))
    localStorage.clear();
}

main();