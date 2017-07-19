

var chiffre= document.getElementsByClassName("button");
// var add= document.getElementsByClassName("buttonAdd");
var Moins= document.getElementsByClassName("buttonMoins");
var multi= document.getElementsByClassName("buttonMulti");
var div= document.getElementsByClassName("buttonDiv");
// var resulta= document.getElementsByClassName("buttonegal");
var ecran= document.getElementById("ecran");
var effacer="0";
function calcul(a){
	ecran.value= ecran.value +a ;

 //console.log(ecran.value);
	}
	 function add(a){
		 ecran.value= ecran.value +a ;
		//console.log(ecran.value);
	}


	/*RESULTAT-----------------*/
	function resulta(){

		ecran.value=eval(ecran.value);
	}


	function toto(){
	ecran.value=ecran.value.slice(0,ecran.value.length-1);
	}
