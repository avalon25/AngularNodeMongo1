var app=angular.module("AngNodMong", []);

app.controller("tkcontroller", ['$scope', function($scope) {
	$scope.demo = "thakur kondasani"


var words = ["mark", "dark", "bark", "lark", "park"];

$scope.incorrectLettersChosen=[];
$scope.correctLettersChosen=[];
$scope.guesses=[];
$scope.displayedWord=[];
$scope.input = {
	letter : ''
}

var selectRandomWord = function(){
	var index = Math.round(Math.random()*words.length);
	return words[index];
}

var newGame = function(){
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
	$scope.guesses=[];
	$scope.displayedWord=[];

	selectedWord = selectRandomWord();
	//console.log(selectedWord);

	var tempDisplayWord = '';
	for (var i = 0; i < selectedWord.length; i++) {
			tempDisplayWord += '*';
		}
	$scope.displayWord = tempDisplayWord;
}

$scope.letterChosen = function(){
	
}

newGame();

}]);