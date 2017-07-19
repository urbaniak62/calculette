
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

/*-----------EFFACER-UN-CHIFFRE-A-LA-FOIS-------*/

	function toto(){
	ecran.value=ecran.value.slice(0,ecran.value.length-1);
	}

	/*-----------EFFACER-TOUS-L'ECRAN-------*/

	function totoA(){
		ecran.value=ecran.value.slice(0,ecran.value.length-ecran.value.length);
	}
/*------------FIN-DE--SCRIPT----------*/
