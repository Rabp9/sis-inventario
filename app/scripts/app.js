.when('/print-qr-page', {
  templateUrl: 'views/print-qr-page.html',
  controller: 'PrintQrPageCtrl',
  controllerAs: 'printQrPage'
})
'use strict';

/**
 * @ngdoc overview
 * @name sisInventarioApp
 * @description
 * # sisInventarioApp
 *
 * Main module of the application.
 */
angular
.module('sisInventarioFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ui.sortable',
    'scrollable-table',
    'angularValidator',
    'ui.select',
    'checklist-model',
    'monospaced.qrcode',
    'AngularPrint'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Inicio'
    };
    
    var credencialesState = {
        name: 'credenciales',
        url: '/credenciales',
        templateUrl: 'views/credenciales.html',
        controller: 'CredencialesCtrl',
        controllerAs: 'credenciales',
        title: 'Credenciales'
    };
    
    var marcasState = {
        name: 'marcas',
        url: '/marcas',
        templateUrl: 'views/marcas.html',
        controller: 'MarcasCtrl',
        controllerAs: 'marcas',
        title: 'Marcas'
    };
    
    var tiposState = {
        name: 'tipos',
        url: '/tipos',
        templateUrl: 'views/tipos.html',
        controller: 'TiposCtrl',
        controllerAs: 'tipos',
        title: 'Tipos'
    };
    
    var licenciasState = {
        name: 'licencias',
        url: '/licencias',
        templateUrl: 'views/licencias.html',
        controller: 'LicenciasCtrl',
        controllerAs: 'licencias',
        title: 'Licencias'
    };
    
    var bienesState = {
        name: 'bienes',
        url: '/bienes',
        templateUrl: 'views/bienes.html',
        controller: 'BienesCtrl',
        controllerAs: 'bienes',
        title: 'Bienes'
    };
    
    var bienesViewState = {
        name: 'bienes-view',
        url: '/bienes/{id}',
        templateUrl: 'views/bienes-view.html',
        controller: 'BienesViewCtrl',
        controllerAs: 'bienesView',
        params: {
            id: {
                value: '1'
            }
        }
    };
    var registrarLoteState = {
        name: 'registrar-lote',
        url: '/registrarLote',
        templateUrl: 'views/registrar-lote.html',
        controller: 'RegistrarLoteCtrl',
        controllerAs: 'registrarLote',
        title: 'Registrar Lote'
    };
    
    var printQrState = {
        name: 'print-qr',
        url: '/print-qr',
        templateUrl: 'views/print-qr.html',
        controller: 'PrintQrCtrl',
        controllerAs: 'printQr',
        title: 'Imprimir Códigos QR'
    };
    
    var movimientosState = {
        name: 'movimientos',
        url: '/movimientos',
        templateUrl: 'views/movimientos.html',
        controller: 'MovimientosCtrl',
        controllerAs: 'movimientos',
        title: 'Movimientos'
    };
    
    var busquedaState = {
        name: 'busqueda',
        url: '/busqueda',
        templateUrl: 'views/busqueda.html',
        controller: 'BusquedaCtrl',
        controllerAs: 'busqueda',
        title: 'Búsqueda'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(credencialesState);
    $stateProvider.state(marcasState);
    $stateProvider.state(tiposState);
    $stateProvider.state(licenciasState);
    $stateProvider.state(bienesState);
    $stateProvider.state(bienesViewState);
    $stateProvider.state(registrarLoteState);
    $stateProvider.state(printQrState);
    $stateProvider.state(movimientosState);
    $stateProvider.state(busquedaState);
    $urlRouterProvider.when('', '/');
})
.run(function($rootScope, $state, $window, 
$timeout, $cookies, $location) {
        
    /*
    $rootScope.logged = false;
    if ($cookies.get('pago-servicios-tmt-token')) {
        $rootScope.logged = true;
        $rootScope.user = $cookies.getObject('pago-servicios-tmt-user');
    } else {
        $rootScope.logged = false;
    }
    
    $rootScope.$state = $state;
    */
    $rootScope.$on('$stateChangeSuccess', function(event, toParams, fromState, fromParams) {
        $rootScope.title = $state.current.title;
        $window.scrollTo(0, 0);
    });
    /*
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
    
    $interval(function() {
        programacionesservice.getPendientesPago(function(data) {
            var programaciones = data.programaciones;
            angular.forEach(programaciones, function(value, key) {
                var title = value.servicio.descripcion;
                var extra = {
                    icon: 'images/icono.png',
                    body: 'Deuda de: ' + value.descripcion_detallada
                };
                // Lanzamos la notificación
                var notification = new Notification(title, extra);
                $timeout(function() {
                    notification.close();
                }, 30000);
            });
        });
    }, 300000);
    
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (!$rootScope.logged) {
            if (toState.name !== 'usersLogin') {
                $location.path('/users/login');
            }
        } else {
            if ($rootScope.user.rol_user.rol.permisos.search(toState.controllerAs) >= 0) {
                $rootScope.message_root = null;
            } else {
                if (toState.controllerAs !== 'main' && toState.controllerAs !== 'usersLogin') {
                    event.preventDefault();
                    $rootScope.message_root = {
                        type: 'error',
                        text: 'No tiene permisos'
                    };
                }
            }
        }
    });
    
    $rootScope.logout = function() {
        if (confirm('¿Está seguro de cerrar sesión?')) {
            $cookies.remove('pago-servicios-tmt-user');
            $cookies.remove('pago-servicios-tmt-token');
            $rootScope.user = undefined;
            $rootScope.logged = false;
            $state.go('usersLogin');
        }
    };
    */
});