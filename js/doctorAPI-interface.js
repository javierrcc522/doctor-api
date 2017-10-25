import { Health } from './../js/doctorAPI.js';
//first api call
$(document).ready(function(){
// 2 api calls in one
  $('#medical-problem-form').submit(function(event) {
    event.preventDefault();
    let doc = new Health();
    let problemName = $('#problem').val();
    let docName = $('#doctor').val();

    let greeting2 = doc.searchQuery(problemName, docName);

    greeting2.then(function(response){
      let body = JSON.parse(response);
      let problem = body.data;
      // arr each loop not iterating through all the objects in the array
      problem.forEach(function(doctor) {
          $('#problem-list').append(`<ul><li>${doctor.profile.first_name}, ${doctor.profile.last_name}</li> <li>${doctor.specialties[0].description}</li> <li>${doctor.practices[0].visit_address.street}</li><li>${doctor.practices[0].phones[0].number}</li><li>${doctor.practices[0].website}</li><li>taking patience: ${doctor.practices[0].accepts_new_patients}</li></ul>`);
      }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });


    });
  });




});
