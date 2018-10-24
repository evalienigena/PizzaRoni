// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    //Un estado abstracto es basicamente un estado(vista) que nunca vemos, solo lo usamos como el "parent" de los "sub-views". Estos estados no pueden enlazarse.
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  //Defecto: HOME
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'homeCtrl'
      }
    }
  })

  //COMBOS
  .state('tab.combos', {
      url: '/combos',
      views: {
        'tab-combos': {
          templateUrl: 'templates/tab-combos.html',
          controller: 'combosCtrl'
        }
      }
    })
    //DETALLE DEL COMBO: más informacion
    .state('tab.combo-detalle', {
      //Manda el id del combo seleccionado :comboId
      url: '/combos/:id',
      views: {
        'combo-detalle': {
          templateUrl: 'templates/combo-detalle.html',
          controller: 'comboCtrl'
        }
      }
    })

  //COMANDAS - ORDENES
  .state('tab.comanda', {
    url: '/comanda',
    views: {
      'tab-comandas': {
        templateUrl: 'templates/tab-comandas.html',
        controller: 'comandasCtrl'
      }
    }
  })

  //DETALLE ORDEN
  .state('tab.comanda-detalle', {
    url: '/comanda/:comandaId',
    views: {
      'tab-comanda': {
        templateUrl: 'templates/comanda-detalle.html',
        controller: 'comandaCtrl'
      }
    }
  })

  .state('tab.integrantes', {
    url: '/integrantes',
    views: {
      'tab-integrantes': {
        templateUrl: 'templates/tab-integrantes.html',
        controller: 'integrantesCtrl'
      }
    }
  })

  .state('tab.integrantes-detalle', {
    url: '/integrantes/:integranteId',
    views: {
      'tab-integrantes': {
        templateUrl: 'templates/integrantes-detalle.html',
        controller: 'integranteDetalleCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
