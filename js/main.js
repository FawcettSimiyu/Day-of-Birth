//Create the projects General Array Function
function MakeArray(n) {
   this.length = n;
   for (var i = 1; i <=n; i++) {
     this[i] = 0;
   }
}

//Create Weekdays Array
days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"

//Create Months Array
months = new MakeArray(12);
months[1] = "January"
months[2] = "February"
months[3] = "March"
months[4] = "April"
months[5] = "May"
months[6] = "June"
months[7] = "July"
months[8] = "August"
months[9] = "September"
months[10] = "October"
months[11] = "November"
months[12] = "December"
//Create Female Names arrays
names = new MakeArray(7);
names[1]="Akosua"
names[2]="Adwao"
names[3]="Abenaa"
names[4]="Akua"
names[5]="Yaa"
names[6]="Afua"
names[0]="Ama"
//Create Male Names arrays
name = new MakeArray(7);
name[1]="Kwasi"
name[2]="Kwadwo"
name[3]="kwabena"
name[4]="Kwaku"
name[5]="Yaw"
name[6]="Kofi"
name[0]="Kwame"

function GetSelectedText(){
				var e = document.getElementById("gender");
				var result = e.options[e.selectedIndex].text;
				document.getElementById("result").innerHTML = result;
			}


//Day of Week Function
function compute(form) {
   var gender_value1 = parseInt(form.day.value, 10)
   if ((gender_value1 < 0) || (gender_value1 > 31)) {
      alert("Invalid Date, PLease Enter the Correct Date")
   }
   var gender_value2 = parseInt(form.month.value, 10)
   if ((gender_value2< 0) || (gender_value2 > 12)) {
      alert("Invalid Month, Please Enter the Correct Month")
   }
   var gender_value2x = parseInt(form.month.value, 10);
   var gender_value3 = parseInt(form.year.value, 10);
   if (gender_value2 == 1) {
      gender_value2x = 13;
      gender_value3 = val3-1
   }
   if (gender_value2 == 2) {
      gender_value2x = 14;
      gender_value3 = gender_value3-1;
   }
   var gender_value4 = parseInt(((gender_value2x+1)*3)/5, 10);
   var gender_value5 = parseInt(gender_value3/4, 10);
   var gender_value6 = parseInt(gender_value3/100, 10);
   var gender_value7 = parseInt(gender_value3/400, 10);
   var gender_value8 = gender_value1+(gender_value2x*2)+gender_value4+gender_value3+gender_value5-gender_value6+gender_value7+2
   var gender_value9 = parseInt(gender_value8/7, 10);
   var gender_value0 = gender_value8-(gender_value9*7);

   form.result1.value = months[gender_value2]+" "+form.day.value +", "+form.year.value
   form.result2.value = days[gender_value0]
//Select Gender Name
   if (days[parseInt(gender_value0)] =="Saturday"){
     form.result3.value = "Selected Male? Akan Name is Kwame."+ " Selected Female? Akan Name is " + names[0];
   } else if (days[parseInt(gender_value0)] =="Sunday") {
     form.result3.value = "Selected Male? Akan Name is Kwasi."+ " Selected Female? Akan Name is " + names[1];
   } else if (days[parseInt(gender_value0)]=="Monday") {
     form.result3.value= "Selected Male? Akan Name is Kwadwo."+ " Selected Female? Akan Name is " + names[2];
   } else if (days[parseInt(gender_value0)]=="Tuesday") {
     form.result3.value ="Selected Male? Akan Name is Kwabena."+ " Selected Female? Akan Name is " + names[3];
   } else if (days[parseInt(gender_value0)]=="Wednesday") {
     form.result3.value="Selected Male? Akan Name is Kwaku."+ " Selected Female? Akan Name is " + names[4];
   } else if (days[parseInt(gender_value0)]=="Thursday") {
     form.result3.value="Selected Male? Akan Name is Yaw."+ " Selected Female? Akan Name is " + names[5];
   } else {
     form.result3.value="Selected Male? Akan Name is Kofi."+ " Selected Female? Akan Name is " + names[6];
   }

}
