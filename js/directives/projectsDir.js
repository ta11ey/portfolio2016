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

