$(document).ready(function () {
    var hours = [];

    for (let index = 0; index < 24; index++) {
        var element = index < 12 ? index + "AM" : (index - 12) + "PM";
        hours.push(element);
    }

    console.log("hours ===", hours);

    function generateHoursTable() {
        var str = "<table><body >";

        for (let index = 0; index < hours.length; index++) {
            const element = hours[index];
            var middel = "<td id='" + element + "' width='80%' colspan='4' class='stage stage-current'><p id='p" + element + "'>welcome</p></td>"
            var nowHour = new Date().getHours();
            if (nowHour == (element.includes("PM") ? parseInt(element) + 12 : parseInt(element))) {
                middel = "<td id='" + element + "'width='80%' colspan='4' class='stage stage-current-hour'>Current hour</td>"
            }
            if (nowHour > (element.includes("PM") ? parseInt(element) + 12 : parseInt(element))) {
                middel = "<td id='" + element + "'width='80%' colspan='4' class='stage stage-old'>event that already happend</td>"
            }
            str +=
                "<tr>" +
                "<th width='10%'>" + element + "</th>" +
                middel +
                "<td width='10%' class='save-button'><button name='" + element + "'>save</button></td>" +
                "</tr>";
        }

        str += "</body></table>"
        $('#tableBody').html(str);
    }

    generateHoursTable();

    setInterval(function() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    $("button").click(function(e) {
        var selector = '#i' + e.target.name
        console.log('button click ===', e.target.name, $(selector).val());
        localStorage.setItem(e.target.name, $(selector).val())
    })

    $("th,td.stage").click(function(e) {
        console.log('welcome click ===', e.target.id)
        var selector = '#' + e.target.id;
        $(selector).html('<input type="text" id="i' + e.target.id + '" />')
    })
});
