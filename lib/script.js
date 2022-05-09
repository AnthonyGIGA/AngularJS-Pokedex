
agGrid.initialiseAgGridWithAngular1(angular);


// incluir dependencias en ngMaterial
var pokeApp = angular.module('pokedex', ['agGrid', 'ngMaterial', 'ngMessages'])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('red')
      .primaryPalette('red');

    $mdThemingProvider.theme('blue')
      .primaryPalette('blue');
      
  });




pokeApp.controller('pokemonController', ['$http', function($http) {
    var types = 
    [
       { type: 'Normal'},
       { type: 'Fighting'}, 
       { type: 'Flying'}, 
       { type: 'Poison'},
       { type: 'Ground'},
       { type: 'Rock'},
       { type: 'Bug'},
       { type: 'Ghost'},
       { type: 'Fire'},
       { type: 'Grass'},
       { type: 'Water'},
       { type: 'Electric'},
       { type: 'Psychic'},
       { type: 'Ice'},
       { type: 'Dragon'},
       { type: 'Dark'},
       { type: 'Fairy'}
     ]; 
    var pokemons = this;
    $http.get('../data/dbpokemon.json')
      .success(function(data) {
        pokemons.pokemon = data;
      });
  }
]);

  
pokeApp.controller('pokemonCategory', function($scope) {
  $scope.types = 
  [
     { type: 'Normal'},
     { type: 'Fighting'}, 
     { type: 'Flying'}, 
     { type: 'Poison'},
     { type: 'Ground'},
     { type: 'Rock'},
     { type: 'Bug'},
     { type: 'Ghost'},
     { type: 'Fire'},
     { type: 'Grass'},
     { type: 'Water'},
     { type: 'Electric'},
     { type: 'Psychic'},
     { type: 'Ice'},
     { type: 'Dragon'},
     { type: 'Dark'},
     { type: 'Fairy'}
   ]; 
   $scope.generations = 
   [
      { name: '1st', number: 1},  
      { name: '2nd', number: 2},   
      { name: '3rd', number: 3},   
      { name: '4th', number: 4},   
      { name: '5th', number: 5},   
      { name: '6th', number: 6}
    ]; 
});
 

// metodo para barra de carga
pokeApp.controller('AppCtrl', ['$interval',
    function($interval) {
      var self = this;

      self.activated = true;
      self.determinateValue = 30;

      // Iterate every 100ms, non-stop and increment
      // the Determinate loader.
      $interval(function() {

        self.determinateValue += 1;
        if (self.determinateValue > 100) {
          self.determinateValue = 30;
        }

      }, 100);
    }
  ]);

  pokeApp.controller('pokemonSelect', function($scope, $mdDialog) { 
      $scope.showAdvanced = function(ev, pokemon) {
        $mdDialog.show({
            clickOutsideToClose: true,
            controller: function($mdDialog, pokemonC) {
                var vm = this;
                vm.pokemon = pokemonC; 
                $scope.cancel = function() {
                  $mdDialog.hide();
                };
            },
            controllerAs: 'modal',
            templateUrl: 'dialog2.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            locals: {
                pokemonC: pokemon
            }
        });
    };
  });

  pokeApp.controller('pokemonAg', function($scope) { 
      $scope.showAg = function() {
        document.getElementById('AgGridList').style.display = 'block';
        document.getElementById('AgGridListButtonShow').style.display = 'none';
        document.getElementById('AgGridListButtonHide').style.display = 'block';
    };
      $scope.hideAg = function() {
        document.getElementById('AgGridList').style.display = 'none';
        document.getElementById('AgGridListButtonHide').style.display = 'none';
        document.getElementById('AgGridListButtonShow').style.display = 'block';
    };
  });


// pokeApp.controller('pokemonSelect', function($scope, $mdDialog, $interval) { 

  
// $scope.showAdvanced = function (pokemon, ev) {
//   $mdDialog.show({ 
//     controller: function($scope, $mdDialog, pokemon) {
//         var vm = this;
//         vm.pokemon = pokemon;
//         $scope.hide = function() {
//             $mdDialog.hide();
//         };
//         $scope.cancel = function() {
//             $mdDialog.cancel();
//         };
//     },
//     templateUrl: 'dialog2.html',
//     // Appending dialog to document.body to cover sidenav in docs app
//     // Modal dialogs should fully cover application to prevent interaction outside of dialog
//     parent: angular.element(document.body),
//     targetEvent: ev,
//     clickOutsideToClose: true,
//     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
//   })
// };

//   function DialogController($scope, $mdDialog) {
//     $scope.hide = function() {
//       $mdDialog.hide();
//     };
 
//     $scope.answer = function() {
//       $mdDialog.hide();
//     };
//   }
// });

