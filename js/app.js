
function HabiDsabi(){
    if (document.getElementById("check").checked == true){
        console.log("tomanocu")
        document.getElementById("botao").disabled = false
       
    }
	if (document.getElementById("check").checked == false){
        console.log("farso")
        document.getElementById("botao").disabled = "disabled"
    }
}
