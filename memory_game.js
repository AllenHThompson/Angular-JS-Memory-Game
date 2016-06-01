var app = angular.module('memoryGame', []);
var monsters;
app.controller('memoryGameController', function($scope, $timeout){
     var clickOne;
     var clickTwo;
     var turn = "first";
     monsters = $scope.monsters = [
          {image: 'monsters-01.png', state: "closed", match: false},
          {image: 'monsters-02.png', state: "closed", match: false},
          {image: 'monsters-03.png', state: "closed", match: false},
          {image: 'monsters-04.png', state: "closed", match: false},
          {image: 'monsters-01.png', state: "closed", match: false},
          {image: 'monsters-02.png', state: "closed", match: false},
          {image: 'monsters-03.png', state: "closed", match: false},
          {image: 'monsters-04.png', state: "closed", match: false},
          // {image: 'monsters-05.png', state: "closed", match: false},
          // {image: 'monsters-06.png', state: "closed", match: false},
          // {image: 'monsters-07.png', state: "closed", match: false},
          // {image: 'monsters-08.png', state: "closed", match: false},
          // {image: 'monsters-09.png', state: "closed", match: false},
          // {image: 'monsters-10.png', state: "closed", match: false},
          // {image: 'monsters-11.png', state: "closed", match: false},
          // {image: 'monsters-12.png', state: "closed", match: false},
          // {image: 'monsters-13.png', state: "closed", match: false},
          // {image: 'monsters-14.png', state: "closed", match: false},
          // {image: 'monsters-15.png', state: "closed", match: false},
          // {image: 'monsters-16.png', state: "closed", match: false},
     ];

     $scope.openTile = function(monster) {
          if (monster.state === "open"){
               return;
          }
          monster.state = "open";
          if (turn === "first") {
               turn = "second";
               clickOne = monster;
          } else if (turn === "second") {
               turn = "first";
               if (clickOne.image === monster.image) {
                    monster.match = true;
                    clickOne.match = true;
                    monster.state = "open";
                    $scope.checkWinner();
               } else {
                    $timeout(function() {
                         monster.state = "closed";
                         clickOne.state = "closed";
                    }, 1000);
               }
          }
     }

     $scope.checkWinner = function() {
          var gameOver = true;
          for (var i = 0; i < $scope.monsters.length; i++) {

               if  ($scope.monsters[i].match !== true) {
                    console.log('monster no match', $scope.monsters[i]);
                    gameOver = false;
                    break;
               }


          }
          if (gameOver) {
               $scope.message = "Winner!";
          }
          //console.log(gameOver);
     }

});
