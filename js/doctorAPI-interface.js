import { Health } from './../js/doctorAPI.js';

$(document).ready(function(){
  $('#medical-doctor-form').submit(function(event) {
    event.preventDefault();
    let doc = new Health();
    let docname = $('#doctor').val();
    console.log(docname);
    doc.doctorName(docname).then(greeting);

    function greeting(response){
      let body = JSON.parse(response);
      console.log(body);
      let arr = []; //all the objects
      console.log(arr);



      body.data.forEach(function(profile) {
        arr.push(profile);
      });

      // arr each loop not iterating through all the objects in the array
      arr.length.forEach(function(profile) {
          $('#doctor-list').append(`<li>${arr.profile.first_name}, ${arr.profile.last_name}</li>`);
      }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });


    }
  });






});
