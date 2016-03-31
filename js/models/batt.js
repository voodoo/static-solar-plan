var Batt = {

  //https://www.solarpaneltalk.com/forum/off-grid-solar/off-grid-solar-panel-systems/1954-how-many-batteries-why-tutorial
  voltsForPanelWatts: function(watts){
    var volts = 12
    if(watts > 1000 && watts < 2001){
      volts = 24
    } else if(watts > 2000 && watts < 3001){
      volts = 36
    } else if(watts > 3000){
      volts = 48
    }
    return volts
  }
}