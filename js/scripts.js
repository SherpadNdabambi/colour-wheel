$(document).ready(function(){
    setFooterYear();
});

function setFooterYear(){
    let date = new Date(), year = date.getFullYear();
    $("#footerYear").text(year.toString());
}