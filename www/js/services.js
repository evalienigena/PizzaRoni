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
    {id:4, nombre: 'Pizza Hawaiiana', descripcion: 'Deliciosa Pizza Hawaiiana con jamón, 12 porciones', precio: '13.99', imagen: 'img/hawaiian-pizza.jpg'},
    {id:5, nombre: 'Chicken & Bacon Pasta', descripcion: 'Clásica y deliciosa pasta con pollo rostizado y tocino', precio: '8.99', imagen: 'img/chicken-pasta-with-bacon.jpg'},
    {id:6, nombre: 'Shrimp Pesto Pasta', descripcion: 'La clásica pesto pasta con frescos y deliciosos camarones', precio: '10.99', imagen: 'img/shrimp-pesto-pasta.jpg'},
    {id:7, nombre: 'Ensalada con macaroni', descripcion: 'Riquísima ensalada con pepino, elote, tomates fritos, macaroni y pimientos rojos y verdes', precio: '7.99', imagen: 'img/pasta-salad.jpg'},
    {id:8, nombre: 'Grilled Chicken Salad', descripcion: 'Riquísima ensalada de pollo a la parrilla con variedad de vegetales', precio: '7.99', imagen: 'img/grilled-chicken-salad.jpg'},
    {id:9, nombre: 'Pan con ajo', descripcion: 'Orden de pan tostado con queso y ajo, incluye salsa casera de tomate', precio: '4.99', imagen: 'img/garlic-bread.jpg'},
    {id:10, nombre: 'Cheese Sticks', descripcion: 'Orden de deditos de queso, incluye salsa casera de tomate', precio: '4.99', imagen: 'img/cheesesticks.jpg'},
    {id:11, nombre: "Pizza Breakfast", descripcion: 'Deliciosa pizza para tu desayuno', precio: '10.99', imagen: 'img/Breakfast.jpeg'},
    {id:12, nombre: 'Pizza Roasted', descripcion: 'Incomparable Pizza de 12 porciones', precio: '15.99', imagen: 'img/Roasted.jpeg'},
    {id:13, nombre: 'Pizza Vegana', descripcion: 'Deliciosa Pizza totalmente Vegana', precio: '12.99', imagen: 'img/Vegana.jpeg'}
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
});
