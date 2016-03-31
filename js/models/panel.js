var Panel = {
  wattsBy: function(priority){
   return (Db.Data.PanelSize * this.numberBy(priority))
  },
  numberBy: function(priority){
    return Math.ceil(this.fudgedWattsBy(priority) / this.sunWattHours())
  },
  fudgedWattsBy: function(priority){
    return (Db.Data.FudgeFactor * Watts.sumOfBy(priority))
  },
  sunWattHours: function(){
    return (Db.Data.Insolation * Db.Data.PanelSize)
  }
}