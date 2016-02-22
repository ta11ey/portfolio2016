angular.module('portfolio').directive('skillsDir', function(){
    return {
        restrict:'E',
        templateUrl:'./../../templates/skills.html',
        replace:true,
        controller:['$scope', function($scope){
            var skills = $("#skills").fadeTo(0, 0);

            $(window).scroll(function(d,h) {
                skills.each(function(i) {
                   var a = $(this).offset().top + ($(this).height()/2);
                   var b = $(window).scrollTop() + $(window).height();
                    if (a < b) $(this).fadeTo(500,1);
                });
            });
        }]
    }
})
