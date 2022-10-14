$(document).ready(function () {
  var hours = [];
  var nowHour = new Date().getHours();

  for (let index = 0; index < 24; index++) {
    var element = index + (index < 12 ? "AM" : "PM");
    hours.push(element);
  }

  console.log("hours ===", hours);

  function generateHoursTable() {
    var str = "<table><body >";
      
    for (let index = 0; index < hours.length; index++) {
      const element = hours[index];
      str +=
        "<tr>" +
        "<th width='10%'>" + element + "</th>" +
        "<td width='80%' colspan='4' class='stage-current'>Welcome</td>" +
        "<td width='10%' class='save-button'>save</td>" +
        "</tr>";
    }

    str += "</body></table>"
    $('#tableBody').append(str);
  }
  
  generateHoursTable();
});
