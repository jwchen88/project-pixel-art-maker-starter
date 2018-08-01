// Select color input
// Select size input
let height,width;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  event.preventDefault();
  height=$('#inputHeight').val();
  width=$('#inputWidth').val();
  makeGrid(height, width);
});

function makeGrid(x,y) {
  $('tr').remove();

// Your code goes here!
  for (let i=1; i<=x; i++){
    $('#pixelCanvas').append('<tr id=row'+i+'></tr>');
    for (let j=1; j<=y; j++){
      $('#row'+i).append('<td></td>');
    }
  }
  //add color to cell
  $('td').click(function addColor(){
    color=$('#colorPicker').val();
    if ($(this).attr('style')){
       $(this).removeAttr('style')
    }else{
     $(this).attr('style','background-color:'+color);
    }
});
};
