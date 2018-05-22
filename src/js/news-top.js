/* This function was copied from:
 * https://stackoverflow.com/questions/22714286/call-jquery-function-from-angularjs-controller
 */
function loadNewsArchive() {
  var json = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': "../html/news/archive.json",
      'dataType': "json",
      'success': function (data) {
          json = data;
      }
  });
  return json;
}

console.log("In this file");

var app = angular.module("news-top", []);
app.controller("news-articles", function($scope) {
  $scope.newsArchive = loadNewsArchive();
});
