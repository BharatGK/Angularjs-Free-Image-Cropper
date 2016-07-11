var imageCropper=angular.module('imageCropper',['ngImgCrop']);
imageCropper.controller("ImageCropperCtrl",[ '$scope','$rootScope',function($scope,$rootScope) 
{    
      
						
					          $scope.myImage='';
						      $rootScope.myCroppedImage='';
							  $scope.type='square';
                              
    
					        var handleFileSelect=function(evt) {
					          var file=evt.currentTarget.files[0];
					          var reader = new FileReader();
					          reader.onload = function (evt) {
					            $scope.$apply(function($scope){
					              $scope.myImage=evt.target.result;
					            });
					          };
					          reader.readAsDataURL(file);
					        };
					        angular.element(document.querySelector('#inputRectangleFileId')).on('change',handleFileSelect);    
}]);
