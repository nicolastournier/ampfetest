(function () {
  'use strict';

  angular.module('amp.services').service('peopleListService', peopleListService);

  peopleListService.$inject = ['$http', '$q', 'urlService'];
  
  function peopleListService($http, $q, urlService, listType) {

  		return {
  			getPeopleList: getPeopleList
  		}

  		function getPeopleList(listType){

  			var list, deferred;

			deferred = $q.defer();

			$http.get(urlService[listType])

			.then(function(result) {
	    
				list = result.data;
				deferred.resolve(list);
			
			}, function(error) {
			
				list = error;
				deferred.reject(error);
			});

			list = deferred.promise;
			return $q.when(list)
		}   
	}
})();
