//track keeptracking
var track = function(){
  navigator.geolocation.watchPosition(function(position) {
  var myDataRef = new Firebase('https://shining-fire-3947.firebaseio.com/location');  
  myDataRef.push($.now() + " " + position.coords.latitude + " "+ position.coords.longitude);
});
}


// geolocation
var getlocation = function() {
  var startPos;
  navigator.geolocation.getCurrentPosition(function(position) {
    startPos = position;
    //console.log(startPos.coords.latitude);
    //console.log(startPos.coords.longitude);
    lat=startPos.coords.latitude;
    longi=startPos.coords.latitude;

    var myDataRef = new Firebase('https://shining-fire-3947.firebaseio.com/pavan');
    myDataRef.push($.now() + " " + startPos.coords.latitude + " "+ startPos.coords.longitude);

  });
};

//geolocation ?
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported for this Browser/OS version yet.');
}

//Firebase
//var myDataRef = new Firebase('https://shining-fire-3947.firebaseio.com/');

//myDataRef.set('User ' + name + ' says ' + text);
