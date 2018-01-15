var app = angular.module('Dalyhall', [
  'ngRoute','ngStorage'
]);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    
    .when("/", {templateUrl: "templates/home.html", controller: "PageCtrl"})
    .when("/payment/:name", {templateUrl: "templates/payment.html", controller: "paymentCtrl"})
    .when("/proceed/:name", {templateUrl: "templates/proceed.html", controller: "proceedCtrl"})
    .when("/about/:name", {templateUrl: "templates/about.html", controller: "aboutCtrl"})
    .when("/result", {templateUrl: "templates/result.html", controller: "resultCtrl"})
    .when("/resultdetails", {templateUrl: "templates/resultdetails.html", controller: "resultdetailsCtrl"})
    .when("/payment1/:name", {templateUrl: "templates/payment1.html", controller: "payment1Ctrl"})
    .when("/proceed1/:name", {templateUrl: "templates/proceed1.html", controller: "proceed1Ctrl"})
    .when("/fun/:name", {templateUrl: "templates/faq.html", controller: "faqCtrl"})
    .when("/vertical/:name", {templateUrl: "templates/vertical.html", controller: "verticalCtrl"})
    .when("/leaderboard/:name", {templateUrl: "templates/leaderboard.html", controller: "leaderCtrl"})
    .when("/profile", {templateUrl: "templates/profile.html", controller: "profileCtrl"})
    .otherwise("/404", {templateUrl: "templates/404.html", controller: "PageCtrl"});
}]);

app.controller('profileCtrl', function ($scope, $location, $http, $routeParams, $localStorage) {
   $scope.screensize = parseInt(window.innerWidth);
  $http.get("js/data.json").then(function(res){
                $scope.datas = res.data.newcontest;
                $scope.funs = res.data.fun;
                $scope.leaders = res.data.leaderboard;
                console.log("$scope.datas",$scope.datas);
              });
     
});

app.controller('verticalCtrl', function ($scope, anchorSmoothScroll, $location, $http, $routeParams, $localStorage) {
 $scope.selectedindex = 0;
 $scope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(eID);
 
      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
      
    };
  $scope.screensize = parseInt(window.innerWidth);
   $http.get("js/data.json").then(function(res){
                var datas = res.data.fun;
                for(var i=0; i<datas.length; i++){
                  if(datas[i].name == $routeParams.name){
                    $scope.data = datas[i];
                    $localStorage.testdata = datas[i];
                    $scope.quizname = $localStorage.testdata.name;
                  }
                }
               
                console.log("$scope.datas",$scope.quiz);
              });

});

app.controller('leaderCtrl', function ($scope, $location, $http, $routeParams, $localStorage) {
  $scope.quizname = $localStorage.testdata.name;
  $scope.screensize = parseInt(window.innerWidth);
   $http.get("js/data.json").then(function(res){
                var datas = res.data.leaderboard;
                
                    $scope.datas = datas;
                   
                console.log("$scope.datas",$scope.data);
              });
   

});

app.controller('resultCtrl', function ($scope, $location, $http, $routeParams, $localStorage) {
  $scope.quizname = $localStorage.testdata.name;
  $scope.screensize = parseInt(window.innerWidth);

});

app.controller('resultdetailsCtrl', function ($scope, $location, $http, $routeParams, $localStorage) {
  $scope.selectedindex = 0;
   $("#div-to-scroll").scroll(function(){
      $("#div-to-scroll").getNiceScroll().resize();
    });
    $scope.go = function(data){
        $scope.selectedindex= data;
      }
  $scope.quizname = $localStorage.testdata.name;
  $scope.datas = $localStorage.testanswers;
  $scope.screensize = parseInt(window.innerWidth);
  $scope.gonext = function(){
  
  
  if($scope.selectedindex < $localStorage.testdata.question.length-1){
      $scope.selectedindex = parseInt($scope.selectedindex)+1;
     }

    }

});

app.controller('paymentCtrl', function ($scope, $location, $http, $routeParams, $localStorage) {
  $scope.screensize = parseInt(window.innerWidth);
  $http.get("js/data.json").then(function(res){
                var datas = res.data.newcontest;
                for(var i=0; i<datas.length; i++){
                  if(datas[i].name == $routeParams.name){
                    $scope.data = datas[i];
                    $localStorage.testdata = datas[i];
                    $scope.quizname = $localStorage.testdata.name;
                  }
                }
               
                console.log("$scope.datas",$scope.data);
              });
});

app.controller('proceedCtrl', function ($scope, $location, $http, $routeParams, $localStorage) {
  $scope.screensize = parseInt(window.innerWidth);
  $http.get("js/data.json").then(function(res){
                var datas = res.data.newcontest;
                for(var i=0; i<datas.length; i++){
                  if(datas[i].name == $routeParams.name){
                    $scope.data = datas[i];
                    $localStorage.testdata = datas[i];
                    $scope.quizname = $localStorage.testdata.name;
                  }
                }
               
                console.log("$scope.datas",$scope.data);
              });  

});

app.controller('payment1Ctrl', function ($scope, $location, $http, $routeParams, $localStorage) {
  $scope.screensize = parseInt(window.innerWidth);
  $http.get("js/data.json").then(function(res){
                var datas = res.data.fun;
                for(var i=0; i<datas.length; i++){
                  if(datas[i].name == $routeParams.name){
                    $scope.data = datas[i];
                    $localStorage.testdata = datas[i];
                    $scope.quizname = $localStorage.testdata.name;
                  }
                }
               
                console.log("$scope.datas",$scope.data);
              });
});

app.controller('proceed1Ctrl', function ($scope, $location, $http, $routeParams, $localStorage) {
  $scope.screensize = parseInt(window.innerWidth);
  $http.get("js/data.json").then(function(res){
                var datas = res.data.fun;
                for(var i=0; i<datas.length; i++){
                  if(datas[i].name == $routeParams.name){
                    $scope.data = datas[i];
                    $localStorage.testdata = datas[i];
                    $scope.quizname = $localStorage.testdata.name;
                  }
                }
               
                console.log("$scope.datas",$scope.quiz);
              });  

});

app.controller('aboutCtrl', function ($scope, $location, $http, $routeParams, $localStorage) {
  console.log("about ctrl");
  $("#div-to-scroll").scroll(function(){
  $("#div-to-scroll").getNiceScroll().resize();
});
  $scope.screensize = parseInt(window.innerWidth);
  console.log("$scope.screensize",$scope.screensize);

      $scope.selectedindex = 0;
      $scope.go = function(data){
        $scope.selectedindex= data;
      }
      var correctanswer = 0;
      var unanswer = 0;
      var wronganswer = 0;
      $localStorage.testanswers = [];
  $http.get("js/data.json").then(function(res){
                var datas = res.data.newcontest;
                for(var i=0; i<datas.length; i++){
                  if(datas[i].name == $routeParams.name){
                    $scope.quiz = datas[i];
                    $localStorage.testdata = datas[i];
                  }
                }
               
                console.log("$scope.datas",$scope.quiz);
              });
    $scope.gonext = function(data){
      console.log("data",data);
      $localStorage.testanswers.push({qno: data.qno, ques: data.ques, prob: data.problem, answer: data.answer, testname: $localStorage.testdata.name, correctans: data.ans, correctansdata: data.ansdata, problem: data.problem, solution: data.solution});
    if($scope.selectedindex < $localStorage.testdata.question.length-1){
      $scope.selectedindex = parseInt($scope.selectedindex)+1;
     }

      if($localStorage.testanswers != undefined){
      if($localStorage.testanswers.length === 10){
      for(var i=0;i<$localStorage.testanswers.length;i++){
      if($localStorage.testanswers[i].answer == $localStorage.testanswers[i].correctansdata){
      console.log("checking", $localStorage.testanswers[i].answer == $localStorage.testanswers[i].correctansdata)
      $localStorage.testanswers[i].status = 'correct';
      correctanswer = parseInt(correctanswer)+1;
      console.log("correctanswer", correctanswer);
    }
      else if($localStorage.testanswers[i].answer == null){
        $localStorage.testanswers[i].status = 'unanswer';
       unanswer = parseInt(unanswer)+1;
      console.log("unanswer", unanswer);
      }
      else{
        $localStorage.testanswers[i].status = 'wrong';
        wronganswer = parseInt(wronganswer)+1;
      console.log("wronganswer", wronganswer);
   
      }

      console.log("correctanswer", correctanswer, "wronganswer", wronganswer, "unanswer", unanswer);
      $location.path("/result");
        }
      }
    }
        
  }

});

app.controller('faqCtrl', function ($scope, $location, $http, $routeParams, $localStorage) {
     console.log("faq ctrl");
     $("#div-to-scroll").scroll(function(){
      $("#div-to-scroll").getNiceScroll().resize();
    });
    $scope.screensize = parseInt(window.innerWidth);
  console.log("$scope.screensize",$scope.screensize);

      $scope.selectedindex = 0;
      $scope.go = function(data){
        $scope.selectedindex= data;
      }
      var correctanswer = 0;
      var unanswer = 0;
      var wronganswer = 0;
      $localStorage.testanswers = [];
  $http.get("js/data.json").then(function(res){
                var datas = res.data.fun;
                for(var i=0; i<datas.length; i++){
                  if(datas[i].name == $routeParams.name){
                    $scope.quiz = datas[i];
                    $localStorage.testdata = datas[i];
                  }
                }
               
                console.log("$scope.datas",$scope.quiz);
              });
    $scope.gonext = function(data){
      console.log("data",data);
      $localStorage.testanswers.push({qno: data.qno, ques: data.ques, prob: data.problem, answer: data.answer, testname: $localStorage.testdata.name, correctans: data.ans, correctansdata: data.ansdata, problem: data.problem, solution: data.solution});
    if($scope.selectedindex < $localStorage.testdata.question.length-1){
      $scope.selectedindex = parseInt($scope.selectedindex)+1;
     }

      if($localStorage.testanswers != undefined){
      if($localStorage.testanswers.length === 10){
      for(var i=0;i<$localStorage.testanswers.length;i++){
      if($localStorage.testanswers[i].answer == $localStorage.testanswers[i].correctansdata){
      console.log("checking", $localStorage.testanswers[i].answer == $localStorage.testanswers[i].correctansdata)
      $localStorage.testanswers[i].status = 'correct';
      correctanswer = parseInt(correctanswer)+1;
      console.log("correctanswer", correctanswer);
    }
      else if($localStorage.testanswers[i].answer == null){
        $localStorage.testanswers[i].status = 'unanswer';
       unanswer = parseInt(unanswer)+1;
      console.log("unanswer", unanswer);
      }
      else{
        $localStorage.testanswers[i].status = 'wrong';
        wronganswer = parseInt(wronganswer)+1;
      console.log("wronganswer", wronganswer);
   
      }

      console.log("correctanswer", correctanswer, "wronganswer", wronganswer, "unanswer", unanswer);
      $location.path("/result");
        }
      }
    }
        
  }

    /* $scope.screensize = parseInt(window.innerWidth);
     console.log("$scope.screensize",$scope.screensize);
     $scope.selectedindex = 0;
     var correctanswer = 0;
     var unanswer = 0;
     var wronganswer = 0;
     $localStorage.testanswers = [];
      $http.get("js/data.json").then(function(res){
                var datas = res.data.fun;
                for(var i=0; i<datas.length; i++){
   
                  if(datas[i].name == $routeParams.name){
                    $scope.quiz = datas[i];
                    $localStorage.testdata = datas[i];
                  }
                }
               
                console.log("$scope.datas",$scope.quiz);
              });
      $scope.gonext = function(data){
      console.log("data",data);
      if(data.answer != null){
          
      }
      $localStorage.testanswers.push({qno: data.qno, ques: data.ques, prob: data.problem, answer: data.answer, testname: $localStorage.testdata.name, correctans: data.ans, correctansdata: data.ansdata, problem: data.problem, solution: data.solution});
      if($scope.selectedindex < $localStorage.testdata.question.length-1){
      $scope.selectedindex = parseInt($scope.selectedindex)+1;
      }

      if($localStorage.testanswers != undefined){
      if($localStorage.testanswers.length === 10){
      for(var i=0;i<$localStorage.testanswers.length;i++){
      if($localStorage.testanswers[i].answer == $localStorage.testanswers[i].correctansdata){
      console.log("checking", $localStorage.testanswers[i].answer == $localStorage.testanswers[i].correctansdata)
      $localStorage.testanswers[i].status = 'correct';
      correctanswer = parseInt(correctanswer)+1;
      console.log("correctanswer", correctanswer);
      }
      else if($localStorage.testanswers[i].answer == null){
        $localStorage.testanswers[i].status = 'unanswer';
       unanswer = parseInt(unanswer)+1;
      console.log("unanswer", unanswer);
      }
      else{
        $localStorage.testanswers[i].status = 'wrong';
        wronganswer = parseInt(wronganswer)+1;
      console.log("wronganswer", wronganswer);
   
      }

      console.log("correctanswer", correctanswer, "wronganswer", wronganswer, "unanswer", unanswer);
      $location.path("/result");
        }
      }
    }      
  }*/

});

app.controller('PageCtrl', function ($scope, $location, $http) {
  $scope.screensize = parseInt(window.innerWidth);
  $http.get("js/data.json").then(function(res){
                $scope.datas = res.data.newcontest;
                $scope.funs = res.data.fun;
                $scope.leaders = res.data.leaderboard;
                console.log("$scope.datas",$scope.datas);
              });
});
app.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});
app.directive('scrollOnClick', function() {

  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        console.log("inside scrollOnClick");
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});