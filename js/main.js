var app = angular.module('portfolio', ['ui.router'])

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('home', {
        url:"/",
        templateUrl:'templates/home.html'
               
         
    })
}])

angular.module('portfolio').directive('coverPage', coverPage)


function coverPage() {
    return {
        restrict: 'E',
        templateUrl: './../../templates/coverPage.html',
        replace: true,
        controller: ['$scope', function ($scope) {
            $(document).ready(function () {
                $('#developerTitle').hide();
                $('#screen').delay(3000).fadeOut('slow')
                $('#hiddenLetter').fadeIn(500, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter1').fadeIn(700, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter2').fadeIn(900, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter3').fadeIn(1100, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter4').fadeIn(1300, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter5').fadeIn(1500, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter6').fadeIn(1700, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter7').fadeIn(1900, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter8').fadeIn(2100, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter9').fadeIn(2300, function () {
                    $(this).removeClass("hidden")
                })
                $('#hiddenLetter10').fadeIn(2500, function () {
                    $(this).removeClass("hidden")
                })
                $('#developerTitle').fadeIn(2000).slideUp('slow');

                //    $timeout(function(){
                $('#hiddenLetter').animate({color: 'gray'}, 2000);
                //    },1000)
            })
        }]
    }
}

angular.module('portfolio').directive('projectsDir', function(){
    return {
        restrict:'E',
        templateUrl:'./../../templates/projects.html',
        replace:true,
        controller:['$scope', function($scope){

              $('#topLeft').hover(function(){
                $("#devvitLearn").html("LearnMore")
            },
            function(){
                $("#devvitLearn").html("Devvit")
            })
            
            $('#topRight').hover(function(){
                $("#velourLearn").html("LearnMore")
            },
            function(){
                $("#velourLearn").html("Velour")
            })
            
            $('#bottomLeft').hover(function(){
                $("#devCmsLearn").html("LearnMore")
            },
            function(){
                $("#devCmsLearn").html("Dev CMS")
            })
            $('#bottomBottom').hover(function(){
                $("#blog").html("Read")
            },
            function(){
                $("#blog").html("Blog")
            })
            
        }]
    }
})



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

//# sourceMappingURL=main.js.map
