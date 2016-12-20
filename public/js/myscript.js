function initialize() {
    var mapOptions = {
            center: new google.maps.LatLng(32.880835, -117.237570),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 15
          };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
};

$('#message').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
