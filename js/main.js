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
