//Use GeoIPLookup service to find latitude longitude coordinates from browser
  let IPrequest = new XMLHttpRequest();
  IPrequest.open('GET', 'https://json.geoiplookup.io/', true);
  IPrequest.onload = function function1(lat,long) {
    // Convert JSON data to an object
    let IPresult = JSON.parse(this.response);
    //save coordinates as variables
    var lat = IPresult.latitude
    var long = IPresult.longitude
  //  document.getElementById("GPS").innerHTML = "latitude: " + lat + " longitude: " + long;

//Make request to Sunrise-Sunset API to find sunset time
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+long+'&date=today&formatted=0', true);
    request.onload = function function2(lat,long,unix) {
      // Convert JSON data to an object
      let result = JSON.parse(this.response);
      var sunsetUTC = result.results.sunset;
      //Create variables for year,month,day,hour,minute,second
          var year = sunsetUTC.slice(0, 4);
          var month = sunsetUTC.slice(5, 7);
          var day = sunsetUTC.slice(8, 10);
          var hour = sunsetUTC.slice(11, 13);
          var minute = sunsetUTC.slice(14, 16);
          var second = sunsetUTC.slice(17, 19);

//Convert UTC to local time
//format into a UTC format to run JS function to find local time (depends on local clock)
    var localsunsettime = new Date(month+'/'+day+'/'+year+' '+hour+':'+minute+':'+second+' UTC');
    var timestringed = localsunsettime.toString();
    var time = timeTo12HrFormat(timestringed.slice(16,24));

   function timeTo12HrFormat(time)
   {   // Take a time in 24 hour format and format it in 12 hour format
       var time_part_array = time.split(":");
       var ampm = 'AM';
       if (time_part_array[0] >= 12) {
           ampm = 'PM';
       }
       if (time_part_array[0] > 12) {
           time_part_array[0] = time_part_array[0] - 12;
       }

       formatted_time = time_part_array[0] + ':' + time_part_array[1] + ':' + time_part_array[2] + ' ' + ampm;
       return formatted_time;
   }

   document.getElementById("time").innerHTML = time
   document.getElementById("sunset").innerHTML = "in local time:"

    }
    request.send();
  }
  IPrequest.send();





//}
