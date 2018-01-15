
      $scope.store = function(data){
          var testval = false;
      if(data.answer != undefined){
        for(var i=0; i<$localStorage.testanswers.length; i++){
          if($localStorage.testanswers[i].qno == data.qno){
            $localStorage.testanswers[i].answer = data.answer;
            testval = true;
          }
        }
        if(testval == false){
          $localStorage.testanswers.push({qno: data.qno, ques: data.ques, prob: data.problem, answer: data.answer, testname: $localStorage.testdata.name, correctans: data.ans, correctansdata: data.ansdata, problem: data.problem, solution: data.solution});
        }
      }
      else{
        for(var i=0; i<$localStorage.testanswers.length; i++){
          if($localStorage.testanswers[i].qno == data.qno){
            $localStorage.testanswers[i].answer = null;
            testval = true;
          }
        }
        if(testval == false){
          $localStorage.testanswers.push({qno: data.qno, ques: data.ques, prob: data.problem, answer: null, testname: $localStorage.testdata.name, correctans: data.ans, correctansdata: data.ansdata, problem: data.problem, solution: data.solution});
        }
      }
  
      }