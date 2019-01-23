
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('.random').on('click', (e) => {
  $.ajax({
    url: 'http://127.0.0.1:3000',
    type: 'GET',
    success: (direction) => {
      console.log(direction)
      SwimTeam.move(JSON.parse(direction));
    },
    error: (error) => {
      console.error('failed')
    }
  })

})

console.log('Client is running in the browser!');
