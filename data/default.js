var Data = {
 Insolation:          4,
 FudgeFactor:         1.5,
 DepthOfDischarge:    50,
 PanelSize:           250,
 Autonomy:            2,
 
 CostOfBatteries:           250,
 CostForGridTiedSystem:        4,

 Items:[
    {name: "Fridge", priority: 'Need', watts: 100, hours: 5},
    {name: "Lights", priority: 'Need', watts: 20, hours: 18},
    {name: "Freezer", priority: 'Want', watts: 120, hours: 8},
    {name: "TV", priority: 'Want', watts: 120, hours: 4},  
    {name: "AC", priority: 'Luxury', watts: 1000, hours: 6}
  ]  
}
