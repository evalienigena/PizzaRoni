angular.module('starter.controllers', [])

//Home
.controller('homeCtrl', function($scope) {})

//Envía todos los combos
.controller('combosCtrl', function($scope, comboService){
  $scope.combos = comboService.getCombos();
})

//Envia el detalle del combo seleccionado
.controller('combosDetalleCtrl', function($scope, $stateParams, comboService){
  var comboId = $stateParams.comboId;
  $scope.combo = comboService.getCombo(comboId);
})

//Envia todas las comandas
.controller('comandaCtrl', function($scope, comandaService){
  $scope.comandas = comandaService.getComandas();
})

//Envia el detalle de una comanda
.controller('comandaDetalleCtrl', function($scope, $stateParams, comandaService){
  var comandaId = $stateParams.comandaId;
  $scope.comanda = comandaService.getComanda(comandaId);
})

.controller('integrantesCtrl', function($scope, integranteService){
  $scope.integrantes = integranteService.getIntegrantes();
})

.controller('integranteDetalleCtrl', function($scope, $stateParams, integranteService){
  var alumno = $stateParams.integranteId;
  $scope.integrantes = integranteService.getIntegrante(alumno);
})

/*
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}); */
