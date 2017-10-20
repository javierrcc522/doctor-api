import { Health } from './../js/doctorAPI.js';

$(document).ready(function(){

  $('#medical-doctor-form').submit(function(event){
    event.preventDefault();
    let doc = new Health();
    let docname = $('#doctor')

  });
});
