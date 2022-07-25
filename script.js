function sendMail(str){
    var link = "smithams711@gmail.com" + "subject=" + escapse("This is my subject") + "&body=" + escapse(str);
    location.href = link;

}

function submit(){
    var name = document.forms["contact_form "]["Name"].value;
    var 
}