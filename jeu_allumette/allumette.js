var app= angular.module('monApp', []);
app.controller('myGameController',['$scope',myGameController]);
function myGameController($scope){
	/*initialiser les paramètres du jeu et choisir le joueur qui va commencer le jeu*/
	$scope.newGame= function () {
		$scope.visible=true;
		$scope.round=1;
		$scope.nbreAllumettes=getRandomInteger(15,30);
		$scope.gamePlayer=getRandomInteger(1,2);
		$scope.allumettes=[];
		for (var i = 0; i <$scope.nbreAllumettes; i++) {
		$scope.allumettes[i]={"src":"allumette.png"};
		}
		if ($scope.gamePlayer==1) {
			alert("le joueur1 va commencer le jeu");
			$scope.state2=true;
			$scope.state1=false;
			player1=true;
		}
		else{
			alert("le joueur2 va commencer le jeu");
			$scope.state1=true;
			$scope.state2=false;
			player2=true;
	}
	/*la fonction player1 permet grace au nombre d'allumettes choisi en cliquant sur l'un des boutons de modifier l'etat du jeu et mettre à jour le nbre d'allumettes affichées*/
	$scope.player1=function(nb){
	
	$scope.nbreAllumettes=$scope.nbreAllumettes-nb;
	console.log($scope.nbreAllumettes);
	$scope.allumettes=[];
	for (var i = 0; i <$scope.nbreAllumettes; i++) {
		$scope.allumettes[i]={"src":"allumette.png"};
	}
	if ($scope.nbreAllumettes<=0) {
		$scope.visible=false;
		alert("joueur1 a gagné la partie");
		$scope.state1=true;
		$scope.state2=true;

		/*setTimeout(location.reload(),3000);*/ 
	}
	else{
		alert("c'est le tour du joueur2");
		$scope.state1=true;
		$scope.state2=false;
	}

};
	$scope.player2=function(nb){
		
	$scope.nbreAllumettes=$scope.nbreAllumettes-nb;
	$scope.allumettes=[];
		for (var i = 0; i <$scope.nbreAllumettes; i++) {
		$scope.allumettes[i]={"src":"allumette.png"};
		
		}

	if ($scope.nbreAllumettes<=0) {
		$scope.visible=false;
		alert("joueur2 a gagné la partie");
		$scope.state1=true;
		$scope.state2=true;
/*		setTimeout(location.reload(),5000); 
*/	}
	else{
		alert("c'est le tour du joueur1");
		$scope.state1=false;
		$scope.state2=true;
	}
}
};
	


}






