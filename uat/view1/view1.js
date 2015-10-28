'use strict';

angular.module('investmentApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', function($scope, $log, $location) {


    var markedJourneys = [0];

    $scope.setSelected = function(journey) {
        for (var i in $scope.journeys) {
            $scope.journeys[i].selected = false;
        }
        if (markedJourneys.indexOf(this.$index) == -1) {
            markedJourneys.push(this.$index);
        }
        $scope.journeys[this.$index].selected = true;
    }

    var data1 = [{
        //dress data
        floor: 10,
        ceil: 300,
        value: 30,
        image: 'images/girls/iconDefaultDress.png',
        modifiedImage: 'images/girls/iconDress.png'
    }, {
        //shoes data
        floor: 15,
        ceil: 300,
        value: 50,
        image: 'images/girls/iconDefaultShoe.png',
        modifiedImage: 'images/girls/iconShoes.png'
    }, {
        //bags data
        floor: 15,
        ceil: 1000,
        value: 70,
        image: 'images/girls/iconDefaultBag.png',
        modifiedImage: 'images/girls/iconbag.png'
    }, {
        //Cosmetics
        floor: 1,
        ceil: 35,
        value: 8,
        image: 'images/girls/iconDefaultCosmetics.png',
        modifiedImage: 'images/girls/iconCosmetics.png'
    },{
        //hats
        floor: 1,
        ceil: 35,
        value: 8,
        image: 'images/girls/iconDefaulthat.png',
        modifiedImage: 'images/girls/iconHat.png'
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

    $scope.journeys = [{
        selected: true,
        img: "images/journey/3_style.png",
        imgSelected: "images/journey/3_style_selected.png",
        sliders: data1
    }, {
        img: "images/journey/1_houseNenvironment.png",
        imgSelected: "images/journey/1_houseNenvironment_selected.png",
        sliders: data2
    }, {
        img: "images/journey/2_vehicle.png",
        imgSelected: "images/journey/2_vehicle_selected.png",
        sliders: data3
    }, {
        img: "images/journey/4_Vacations.png",
        imgSelected: "images/journey/4_Vacations_selected.png",
        sliders: data4
    }, {
        img: "images/journey/5_Hobbies.png",
        imgSelected: "images/journey/5_Hobbies_selected.png",
        sliders: data4
    }];

    $scope.imgsrc = function($index) {
        if ($scope.journeys[$index].hover || $scope.journeys[$index].selected) {
            return $scope.journeys[$index].imgSelected;
        }
        else {
            return $scope.journeys[$index].img;
        }
    }

    var configDatas = {
        cat1: {
            weightage: 25,
            items: [{
                defaultValue: 30,
                weightage: 20
            }, {
                defaultValue: 50,
                weightage: 20
            }, {
                defaultValue: 70,
                weightage: 20
            }, {
                defaultValue: 8,
                weightage: 20
            },{
                defaultValue: 8,
                weightage: 20
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
        },
        cat5: {
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

    $scope.averageMonthlyExpense = averageMonthlyExpense;

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
        if (selectedCat == null) return;

        //selectedCat = i;
        var configData = configDatas['cat' + (Number(selectedCat) + 1)];
        var configDataWeight = configData.weightage;


        var configDataValue = configDataWeight * defAverageMonthlyExpense / 100; //1000


        for (var i in configData.items) {
            var defaultValue = configData.items[i].defaultValue;
            var weight = configData.items[i].weightage;
            var currentValue = $scope.journeys[selectedCat].sliders[i].value;

            var diff = ((currentValue - defaultValue) / defaultValue) * 100;

            var itemContribution = weight * configDataValue / 100; //250

            itemChange += diff * itemContribution / 100; //30
        }

        //console.log(Math.floor(itemChange));
        averageMonthlyExpense = defAverageMonthlyExpense + itemChange;
        //$timeout(function(){

        var careerLeft = 60 - Number($location.search().age);
        var age=Number($location.search().age);
        var inflationRate = 10;

        //var goal = averageMonthlyExpense * 12 * careerLeft;

        var r=0.025;
        var g=0.08;
        var c1=r-g;
        var c2=Math.pow((1+g)/(1+r),careerLeft);
        var c3=1-c2;
        var c4=(goal*c1)/c3;
        console.log(c4);
        var l=20 //life expectency after retirement
        var goal=averageMonthlyExpense*Math.pow((1+r),careerLeft)*((1-Math.pow(1+r),l)/r);
        var r=0.1; //rate of interest
        var n=12;
        var targetInvestment=(goal*r/n)/(Math.pow(1+(r/n),careerLeft*n)-1);



        $scope.$apply(function() {
            $scope.averageMonthlyExpense = Math.floor(averageMonthlyExpense);
            $scope.goal = goal;
            $scope.targetInvestment = targetInvestment/12;
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
