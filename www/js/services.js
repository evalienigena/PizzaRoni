angular.module('starter.services', [])

.factory('integranteService', function(){
  var integrantes = [
    {id:1, nombre: 'Eva María Arias Marroquín', carnet: 'AM101916'},
    {id:2, nombre: 'Gio Hernandez', carnet:'HM123123'}
  ];

  return{
    getIntegrantes: function(){
      return integrantes;
    },
    getIntegrante: function(id){
      return integrantes[id];
    },
  }
})

.factory('comboService', function(){
  //Creando el array de objetos
  var combos = [
    {id:1, nombre: "Pizza Pepperoni", descripcion: 'Deliciosa pizza de 10 porciones con Pepperoni Deluxe', precio: '10.99', imagen: 'img/pepperoni.jpg'},
    {id:2, nombre: 'Pizza Suprema', descripcion: 'Incomparable Pizza Suprema de 12 porciones', precio: '12.99', imagen: 'img/suprema.jpg'},
    {id:3, nombre: 'Pizza Chiz', descripcion: 'Deliciosa Pizza de Queso, 12 porciones', precio: '12.99', imagen: 'img/cheese.jpg'}
  ]; 

  return {
    //Funcion que servirá para listar todos los combos
    //Devuelve todos los objetos del array
    getCombos: function(){
      return combos;
    },
    //Devuelve sólo un combo identificado por el parametro que le pasamos (id)
    getCombo: function(id){
      return combos[id];
    },
  }
})

.factory('comandaService', function(){
  var comandas = [
    {id:1, total:'10.99', descripcion:'Deliciosa pizza de 12 porciones con Pepperoni Deluxe', registro:'2018-09-19 05:08:26'},
    {id:2, total:'12.99', descripcion:'Incomparable Pizza Suprema de 12 porciones', registro:'2018-09-19 06:08:26'},
    {id:3, total:'12.99', descripcion:'Deliciosa pizza de 12 porciones con Pepperoni Deluxe', registro:'2018-09-19 07:08:26'}
  ];

  return {
    getComandas: function(){
      return comandas;
    },
    getComanda: function(id){
      return comandas[id];
    },
  }
});

/*
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
*/
