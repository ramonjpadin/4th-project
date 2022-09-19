$('#currentDay').text(moment().format('[Today\'s Date: ]dddd, MMMM Do, YYYY h:mm:ss a'));

$(function renderTextArea() {
    let timeBlockRows = $('.row');
    let currentTime = Number(moment().format('H'));

    timeBlockRows.each(function (i) {
        let rowText = $(this).children('textarea');
        let storedText = JSON.parse(localStorage.getItem('row ' + i))

        if (currentTime === $(this).children('textarea')) {

        }
    })
}