// var apiKey = require('./../.env').apiKey;

export class Health {

  doctorName(docname){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      // let url = `https://newsapi.org/v1/articles?source=${newssrc}&sortBy=top&apiKey=${apiKey}`;

      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5231%2C-122.413%2C100&first_name=${docname}&skip=0&user_key=5491f0d0d7f8d5be3ddd160af52cacc4`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
