$(document).ready( function() {

    $('#map').mousemove( function(event) {
       var x = event.pageX - this.offsetLeft;
       var y = event.pageY - this.offsetTop;
       var txt = x + "/" + y;
    
       $('#coord').text(txt);
    });
    
});
