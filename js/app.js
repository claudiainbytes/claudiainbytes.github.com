(function () {

'use strict';

      var myskills = angular.module('myskills', []);
      var myexperience = angular.module('myexperience', []);
      var myprojects = angular.module('myprojects', []);
      var myeducation = angular.module('myeducation', []);
      var app = angular.module('app', ['myskills', 'myexperience', 'myeducation', 'myprojects']);

      app.directive('prettyp', function(){
            return function(scope, element, attrs){
                  $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools:false });
            }
      })
      .directive('loadcharts', function(){
            return function(scope, element, attrs){
                  $(document).ready(function(e) {
                  //var windowBottom = $(window).height();
                  var index=0;
                  $(document).scroll(function(){
                        var top = $('#skills').height()-$(window).scrollTop();
                        //console.log(top)
                        if(top<-300){
                              if(index==0){     
                              
                                    $('.chart').easyPieChart({
                                          easing: 'easeOutBounce',
                                          onStep: function(from, to, percent) {
                                                $(this.el).find('.percent').text(Math.round(percent));
                                          }
                                    });
                              
                                    }
                              index++;
                        }
                  })
            });
            }
      }).
      directive('loadportfolio', function(){
            return function(scope, element, attrs){
                  $(document).load(function() {
                        var $container = $('.portfolio-items');
                        $container.isotope({
                              filter: '*',
                              animationOptions: {
                              duration: 750,
                              easing: 'linear',
                              queue: false
                              }
                        });
                        $('.cat a').click(function() {
                        $('.cat .active').removeClass('active');
                        $(this).addClass('active');
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                              filter: selector,
                              animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false
                              }
                        });
                        return false;
                  });
                  });
            }
      });

      myskills.controller('myskillsController', function($scope, $http){
            $http.get('json/skills.json')
                  .then(function(respuesta) {
                        $scope.my_skills = respuesta.data;
                  })
      });

      myexperience.controller('myexperienceController', function($scope, $http){
            $http.get('json/experience.json')
                  .then(function(respuesta) {
                        $scope.my_experiences = respuesta.data;
                  })
      });

      myeducation.controller('myeducationController', function($scope, $http){
            $http.get('json/education.json')
                  .then(function(respuesta) {
                        $scope.my_education = respuesta.data;
                  })
      });

      myprojects.controller('myprojectsController', function($scope, $http){
            $http.get('json/projects.json')
                  .then(function(respuesta) {
                        $scope.my_projects = respuesta.data;
                  })
      });

}());