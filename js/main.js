//Create the projects General Array Function
function MakeArray(n) {
   this.length = n;
   for (var i = 1; i <=n; i++) {
     this[i] = 0;
   }
}
//Create Week days Array
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
//Day of Week Function
function compute(form) {
   var val1 = parseInt(form.day.value, 10)
   if ((val1 < 0) || (val1 > 31)) {
      alert("Invalid Date, PLease Enter the Correct Date")
   }
   var val2 = parseInt(form.month.value, 10)
   if ((val2 < 0) || (val2 > 12)) {
      alert("Invalid Month, Please Enter the Correct Month")
   }
   var val2x = parseInt(form.month.value, 10)
   var val3 = parseInt(form.year.value, 10)
   if (val2 == 1) {
      val2x = 13;
      val3 = val3-1
   }
   if (val2 == 2) {
      val2x = 14;
      val3 = val3-1
   }
   var val4 = parseInt(((val2x+1)*3)/5, 10)
   var val5 = parseInt(val3/4, 10)
   var val6 = parseInt(val3/100, 10)
   var val7 = parseInt(val3/400, 10)
   var val8 = val1+(val2x*2)+val4+val3+val5-val6+val7+2
   var val9 = parseInt(val8/7, 10)
   var val0 = val8-(val9*7)
   form.result1.value = months[val2]+" "+form.day.value +", "+form.year.value
   form.result2.value = days[val0]
   //Select Male Gender Name
      if (days[val0]=="Saturday"){
        form.result3.value = "Kwame"
      } else if (days[val0]=="Sunday") {
        form.result3.value = "Kwasi"
      } else if (days[val0]=="Monday") {
        form.result3.value= "Kwadwo"
      } else if (days[val0]=="Tuesday") {
        form.result3.value ="kwabena"
      } else if (days[val0]=="Wednesday") {
        form.result3.value="Kwaku"
      } else if (days[val0]=="Thursday") {
        form.result3.value="Yaw"
      } else {
        form.result3.value="Kofi"
      }
