
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
