import { Health } from './../js/doctorAPI.js';

$(document).ready(function(){

  $('#medical-doctor-form').submit(function(event){
    event.preventDefault();
    let doc = new Health();
    let docname = $('#doctor').val();
    doc.doctorName(docname).then(greeting);

    function greeting(response){
      let body = JSON.parse(response);
      let arr = [];
      body.profile.forEach(function(profile) {
        arr.push(profile);
      });
      arr.forEach(function(profile){
        $('#doctor-list').append(`<li>${profile.first_name}</li>`);
      }, function(error) {

          $('.showErros').text(`There was an error processing your request: ${error.message}`);
      });
    }
  });






});
