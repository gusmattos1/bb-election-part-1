document.addEventListener("DOMContentLoaded", function() {

var button = document.getElementById('button-request')
result = document.getElementById('result')

var url = 'https://bb-election-api.herokuapp.com/'

button.addEventListener('click', function () {

  $.ajax({
  			url: url,
  			method: 'GET',
  			dataType: 'json'
  		}).done(function(data){
        console.log('request done');
        dados = data
        result.innerHTML = ''
        for (var i = 0; i < data.candidates.length; i++) {
          result.innerHTML += '<p>' + data.candidates[i].name + '<br>' + data.candidates[i].votes + '</p>'
        }
      }).fail(function () {
        console.log('Your request was not successful');
      });
});
});
