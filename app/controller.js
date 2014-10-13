var carService = angular.module('carService', ['ngRoute']);

function carServiceRouteConfig($routeProvider){
	$routeProvider.
		when('/', {
			controller: ListController,
			templateUrl: 'list.html'
		}).
		when('/service/:id',{ 
			controller: DetailsController,
			templateUrl: 'details.html'
		}).
		when('/add_customer',{
			controller: AddCustomerController,
			templateUrl: 'addCustomer.html'
		}).
		otherwise({
			redirectTo: '/'
		})
}

carService.config(carServiceRouteConfig);

car_information = [{	id:1,
						name: 'Lethlohonolo', phone_number: '061 093 9086', 
						car_details: [{ car_type: 'Mini S', kms: '99 406', car_registraion:'ZYV 966 GP'}],
						service_details: 'Transmission 0.1 cover, Fix, Full oil service, engine wash',
						price: '1200'
					},
					{	id:2,
						name: 'Bafedile', phone_number: '073 164 2293', 
						car_details: { car_type: 'VW Polo', kms: ' n/a', car_registraion:'XBF 042 GP'},
						service_details: 'Varn bush change, Full oil service',
						price: '2000'
					},
					{	id:3,
						name: 'Kabelo', phone_number: '083 212 7967', 
						car_details: { car_type: 'Mini 1.6', kms: '124 721', car_registraion:'WFL 891 GP'},
						service_details: 'Plugs gaskets, Full oil service, engine wash',
						price: '800'
					},
					{	id:4,
						name: 'Peter', phone_number: '084 326 6465', 
						car_details: { car_type: 'Mini S', kms: '124 068', car_registraion:'STUNKY GP'},
						service_details: 'Petrol filter, Full oil service, engine wash',
						price: '600'
					}]

function ListController($scope) {
	$scope.car_information = car_information;
}

function DetailsController($scope, $routeParams) {
	$scope.car_information = car_information[$routeParams.id];
}

function AddCustomerController($scope){
	$scope.message = '';

	$scope.addCustomer = function(){
		car_information.push({id:5, name: $scope.customer.first, phone_number: $scope.customer.phone_number, 
								car_details: {car_type: $scope.customer.car_type, kms: $scope.car_kms, 
											car_registration: $scope.car_registration},
											service_details:'', price: ''});
		$scope.message = 'Thanks, ' + $scope.customer.first + ', we added you!';
	}
}






