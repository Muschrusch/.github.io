$(document).ready( function() {

    $('#map').hover( function(event) {
       var x = event.pageX - this.offsetLeft;
       var y = event.pageY - this.offsetTop;
       var txt = x + "/" + y;
    
       $('#coord').text()
    });
    
});
