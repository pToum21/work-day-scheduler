$(document).ready(function () {
// this is an event listener and function that listens for a click event on the save button and adds  it to the local storage
  $('.saveBtn').on('click', function(){
    // these var are used by dom traversial 
    var saveHour = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(saveHour, userInput);
  });
  
  // this function will check the current time against the time of each id
  // and represent it by changing the color on the Scheduler
  function hourChecker(){
    $('.time-block').each(function(){
      var hourIdEl = $(this).attr('id').split('hour-').join('');
      var dayJsHour = dayjs().format('H');
       if (hourIdEl > dayJsHour) {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
      } else if (hourIdEl < dayJsHour){
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
      } else {
          $(this).addClass('present');
          $(this).removeClass('past');
          $(this).removeClass('future');
      }
    });
  }
  // This function saves data to the browser when the user clicks the save button and inputs information
  function saveLocalData() {
    
    $('#hour-9').children('.description').val(localStorage.getItem('hour-9'));
    $('#hour-10').children('.description').val(localStorage.getItem('hour-10'));
    $('#hour-11').children('.description').val(localStorage.getItem('hour-11'));
    $('#hour-12').children('.description').val(localStorage.getItem('hour-12'));
    $('#hour-13').children('.description').val(localStorage.getItem('hour-13'));
    $('#hour-14').children('.description').val(localStorage.getItem('hour-14'));
    $('#hour-15').children('.description').val(localStorage.getItem('hour-15'));
    $('#hour-16').children('.description').val(localStorage.getItem('hour-16'));
    $('#hour-17').children('.description').val(localStorage.getItem('hour-17'));  
  }
  // this displays the current day and math
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
  hourChecker();
  saveLocalData();
});

