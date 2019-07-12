//Function to get value of selected button
var genders= document.getElementById('genders').value;
if (document.getElementById('g1').checked){
  gender_value=document.getElementById('g1').value;
} else if (document.getElementById('g2').checked) {
  gender_value=document.getElementById('g2').value;
} else if (document.getElementById('g3').checked) {
  gender_value=document.getElementById('g3').value;
}
//Create arrays
 var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
 var femaleNames=["Akosua","Adwao","Abenaa","Akua","Yaa","Afua","Ama"];
