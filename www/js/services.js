angular.module('starter.services', [])

//Arreglo que muestra los integrantes
.factory('integranteService', function(){
  var integrantes = [
    {id:1, nombre: 'Eva María Arias Marroquín', carnet: 'AM101916', imagen: "img/eva.jpeg"},
    {id:2, nombre: 'Marvin Javier Chojolán Ramos', carnet:'CR100315', imagen: "img/marvin.jpg"},
    {id:3, nombre: 'Diana Leticia Cuéllar Salguero', carnet:'CS100315', imagen: "img/diana.jpeg"},
    {id:4, nombre: 'Kevin Giovanni Maldonado Hernández', carnet:'MH100516', imagen: "img/gio.jpg"},
    {id:5, nombre: 'Elsy Marisol Ramírez Bonilla', carnet:'RB100215', imagen: "img/elsy.jpeg"}
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

//Arreglo que muestra los combos
.factory('comboService', function(){
  //Creando el array de objetos
  var combos = [
    {id:1, nombre: "Pizza Pepperoni", descripcion: 'Deliciosa pizza de 10 porciones con Pepperoni Deluxe', precio: '10.99', imagen: 'img/pepperoni.jpg'},
    {id:2, nombre: 'Pizza Suprema', descripcion: 'Incomparable Pizza Suprema de 12 porciones', precio: '12.99', imagen: 'img/suprema.jpg'},
    {id:3, nombre: 'Pizza Chiz', descripcion: 'Deliciosa Pizza de Queso, 12 porciones', precio: '12.99', imagen: 'img/cheese.jpg'},
    {id:4, nombre: "Pizza Breakfast", descripcion: 'Deliciosa pizza para tu desayuno', precio: '10.99', imagen: 'img/Breakfast.jpeg'},
    {id:5, nombre: 'Pizza Roasted', descripcion: 'Incomparable Pizza de 12 porciones', precio: '15.99', imagen: 'img/Roasted.jpeg'},
    {id:6, nombre: 'Pizza Vegana', descripcion: 'Deliciosa Pizza totalmente Vegana', precio: '12.99', imagen: 'img/Vegana.jpeg'}
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

//Muestra el detalle de las comandas
.factory('comandaService', function(){
  var comandas = [
    {id:1, total:'10.99', descripcion:'Deliciosa pizza de 12 porciones con Pepperoni Deluxe', registro:'2018-09-19 05:08:26'},
    {id:2, total:'12.99', descripcion:'Incomparable Pizza Suprema de 12 porciones', registro:'2018-09-19 06:08:26'},
    {id:3, total:'12.99', descripcion:'Deliciosa pizza para tu desayuno', registro:'2018-09-19 09:18:45'},
    {id:4, total:'12.99', descripcion:'Deliciosa Pizza totalmente Vegana', registro:'2018-09-20 08:26:09'},
    {id:5, total:'15.99', descripcion:'Incomparable Pizza de 12 porciones', registro:'2018-10-25 09:23:26'}
  ];

  return {
    getComandas: function(){
      return comandas;
    },
    getComanda: function(id){
      return comandas[id];
    },
  }
})