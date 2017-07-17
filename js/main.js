

var chiffre= document.getElementsByClassName("button");
// var add= document.getElementsByClassName("buttonAdd");
var Moins= document.getElementsByClassName("buttonMoins");
var multi= document.getElementsByClassName("buttonMulti");
var div= document.getElementsByClassName("buttonDiv");
// var resulta= document.getElementsByClassName("buttonegal");
var ecran= document.getElementById("ecran");

function calcul(a){
	ecran.value= ecran.value +a ;

 console.log(ecran.value);
	}
	 function add(a){
		 ecran.value= ecran.value +a ;
		console.log(ecran.value);
	}

	/*RESULTAT-----------------*/
	function resulta(){
		var total = eval(ecran.value);
		alert(total);
		document.getElementById("ecran").innerHTML=total;


		// alert(eval(total.toString()));

	}
