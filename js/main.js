const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 4,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
];
let passengers1=[];
let b=0;
let big=passengers[0].connectedFlights;
for(k=0;k<passengers.length;k++){
  if(passengers[k].connectedFlights>big){
      big=passengers[k].connectedFlights;
  }
}
for(i=big;i>0;i--){
  for(j=0;j<passengers.length;j++){
    if(passengers[j].connectedFlights==i){
      passengers1[b]=passengers[j];
      b++;
    }
  }
}
console.log(passengers1);