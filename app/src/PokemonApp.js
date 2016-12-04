var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource']);

angular.
module('PokemonApp')
.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common = {
		"application-id": "96136DA0-9E28-45F1-FF12-8EB101D6F800",
		"secret-key": "A32BE456-B717-D0F6-FFE2-03B673C8EA00"
	};
   }
])
.config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/berries', {
            templateUrl: 'src/BerryList/BerryList.html',
            controller: 'BerryListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/createBerry', {
            templateUrl: 'src/CreateBerry/CreateBerry.html',
            controller: 'CreateBerryCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
