var triviaApp = angular.module('triviaApp', [])
triviaApp.controller('QuestionListCtrl', function($scope){
    $scope.questions = [
        {
            id: 1,
            question: "Why is AngularJS named AndgularJS?",
            option1: "It sounds cool.",
            option2: "It describes HTML brackets",
            option3: "The author had a habit of holding his head at an angle while coding.",
            answer: "2"
        }
]
})