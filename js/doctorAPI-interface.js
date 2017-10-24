import { Health } from './../js/doctorAPI.js';

$(document).ready(function(){
  $('#medical-doctor-form').submit(function(event) {
    event.preventDefault();
    let doc = new Health();
    let docname = $('#doctor').val();

    doc.doctorName(docname).then(greeting);

    function greeting(response){
      let body = JSON.parse(response);
      let doctors = body.data;
      // arr each loop not iterating through all the objects in the array
      doctors.forEach(function(doctor) {
          $('#doctor-list').append(`<li>${doctor.profile.first_name}, ${doctor.profile.last_name}</li>`);
      }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });


    }
  });






});
