
'use strict';

angular.module('investmentApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', function($scope, $log, $timeout) {


    var markedJourneys=[0];

    $scope.setSelected = function(journey) {
        for (var i in $scope.journeys) {
            $scope.journeys[i].selected = false;
        }
            if(markedJourneys.indexOf(this.$index)==-1){
               markedJourneys.push(this.$index);
            }
        $scope.journeys[this.$index].selected = true;
    }




    var data1 = [{
        //dress data
        floor: 10,
        ceil: 300,
        value: 30,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            50: 'images/shoes/girls/image2.jpg',
            100: 'images/shoes/girls/image3.jpg',
            200: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //shoes data
        floor: 15,
        ceil: 300,
        value: 50,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            50: 'images/shoes/girls/image2.jpg',
            100: 'images/shoes/girls/image3.jpg',
            200: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //bags data
        floor: 15,
        ceil: 1000,
        value: 70,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            100: 'images/shoes/girls/image2.jpg',
            200: 'images/shoes/girls/image3.jpg',
            500: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //Cosmetics
        floor: 1,
        ceil: 35,
        value: 8,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }];

    var data2 = [{
        //dress data
        floor: 100,
        ceil: 3000,
        value: 300,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //shoes data
        floor: 15,
        ceil: 300,
        value: 50,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //bags data
        floor: 15,
        ceil: 1000,
        value: 70,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //Cosmetics
        floor: 1,
        ceil: 35,
        value: 8,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }]

    var data3 = [{
        //dress data
        floor: 10,
        ceil: 300,
        value: 30,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //shoes data
        floor: 15,
        ceil: 300,
        value: 50,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //bags data
        floor: 15,
        ceil: 1000,
        value: 70,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //Cosmetics
        floor: 1,
        ceil: 35,
        value: 8,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }]

    var data4 = [{
        //dress data
        floor: 10,
        ceil: 300,
        value: 30,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //shoes data
        floor: 15,
        ceil: 300,
        value: 50,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //bags data
        floor: 15,
        ceil: 1000,
        value: 70,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }, {
        //Cosmetics
        floor: 1,
        ceil: 35,
        value: 8,
        img: {
            0: 'images/shoes/girls/image1.jpg',
            10: 'images/shoes/girls/image2.jpg',
            20: 'images/shoes/girls/image3.jpg',
            30: 'images/shoes/girls/image4.jpg'
        }
    }]

    var slidersData=[data1,data2,data3,data4];

    $scope.sliders1 = data1;
    $scope.sliders2 = data2;
    $scope.sliders3 = data3;
    $scope.sliders4 = data4;



    $scope.journeys = [{
        selected: true,
        imgsrc: "images/test.png"
    }, {
        imgsrc: "images/test.png"
    }, {
        imgsrc: "images/test.png"
    }, {
        imgsrc: "images/test.png"
    }];

    var configDatas = {
        cat1: {
            weightage: 25,
            items: [{
                defaultValue: 30,
                weightage: 25
            }, {
                defaultValue: 50,
                weightage: 25
            }, {
                defaultValue: 70,
                weightage: 25
            }, {
                defaultValue: 8,
                weightage: 25
            }]
        },
        cat2: {
            weightage: 25,
            items: [{
                defaultValue: 30,
                weightage: 25
            }, {
                defaultValue: 50,
                weightage: 25
            }, {
                defaultValue: 70,
                weightage: 25
            }, {
                defaultValue: 8,
                weightage: 25
            }]
        },
        cat3: {
            weightage: 25,
            items: [{
                defaultValue: 30,
                weightage: 25
            }, {
                defaultValue: 50,
                weightage: 25
            }, {
                defaultValue: 70,
                weightage: 25
            }, {
                defaultValue: 8,
                weightage: 25
            }]
        },
        cat4: {
            weightage: 25,
            items: [{
                defaultValue: 30,
                weightage: 25
            }, {
                defaultValue: 50,
                weightage: 25
            }, {
                defaultValue: 70,
                weightage: 25
            }, {
                defaultValue: 8,
                weightage: 25
            }]
        }
    }

    var averageMonthlyExpense = 2000;
    var defAverageMonthlyExpense = 2000;
   /* $scope.$on("slideEnded", function() {
        $scope.monthlySpend();
    });*/

    $scope.averageMonthlyExpense=averageMonthlyExpense;

    $scope.monthlySpend = function() {
        // averageMonthlyExpense = 2000;
        var selectedCat;
        var itemChange = 0;
        for (var i in $scope.journeys) {
            var journey = $scope.journeys[i]
            if (journey.selected) {
                selectedCat = i;
                break;
            }
        }
        if (selectedCat==null) return;
        selectedCat++;

        var configData = configDatas['cat' + selectedCat];
        var configDataWeight = configData.weightage;


        var configDataValue = configDataWeight * defAverageMonthlyExpense / 100; //1000


        for (var i in configData.items) {
            var defaultValue = configData.items[i].defaultValue;
            var weight = configData.items[i].weightage;
            var currentValue = $scope['sliders' + selectedCat][i].value;

            var diff = ((currentValue - defaultValue) / defaultValue) * 100;

            var itemContribution = weight * configDataValue / 100; //250

            itemChange += diff * itemContribution / 100; //30
            //configData.items[i].defaultValue = currentValue;

            //var out=(diff*configDataWeight/100)*weight/100;


        }
        var l=1000;
        var n=20;

        var ir=0.03;
        var gr=0.05;

        var c1=l*(gr-ir);
        var c2=1-(1+ir)/Math.pow((1+gr),n);
        var c=c1/c2;
        console.log(c);

        //var x1=




        console.log(Math.floor(itemChange));
        averageMonthlyExpense = defAverageMonthlyExpense + itemChange;
        //$timeout(function(){

        $scope.$apply(function() {
            $scope.averageMonthlyExpense = Math.floor(averageMonthlyExpense);
        })

        //})

    }

    $scope.total = function() {
        var total = 0;
        for (var i in $scope.sliders) {
            total += $scope.sliders[i].value;
        }
        return total;
    };

    $scope.gauzeTotal = function() {
        var total = $scope.journeys.length;
        var marked = markedJourneys.length;

        return marked / total * 100;
    }

    $scope.value = 1.5;
    $scope.upperLimit = 100;
    $scope.lowerLimit = 0;
    $scope.unit = "%";
    $scope.precision = 1;
    $scope.ranges = [{
        min: 0,
        max: 25,
        color: '#DEDEDE'
    }, {
        min: 25,
        max: 50,
        color: '#8DCA2F'
    }, {
        min: 50,
        max: 75,
        color: '#FDC702'
    }, {
        min: 75,
        max: 100,
        color: '#FF7700'
    }];
})
