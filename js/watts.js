var Watts = {
  priorities: ['Need', 'Want', 'Luxury'],
  byPriority: function(priority){
    var watts = 0
    Db.Data.Items.forEach(function(item, i){
      if(item.priority == priority){
        watts += item.watts * item.hours
      }

    })
    return watts 
  },  
  // Return watts by priority
  sumOfWattsBy: function(priority){
    if(priority == 'Want'){
      return this.byPriority('Need') + this.byPriority('Want')
    } else if(priority == 'Luxury'){
      return this.byPriority('Need') + this.byPriority('Want') + this.byPriority('Luxury')
    } else {
      return this.byPriority('Need')
    }
  },   
  
  itemsBy: function(priority){
    var items = []
    Db.Data.Items.map(function(item,index){
      if(item.priority == priority) items.push(item)
    })
    return items
  },   

  battsMultiplier: function(priority){
    var percent = 1 + (1 - (Db.Data.DepthOfDischarge / 100))
    return (percent * Db.Data.Autonomy) + 1
  },
  numberOfPanels: function(priority){
    var fudgedWatts  = this.sumOfWattsBy(priority) * Db.Data.FudgeFactor
    var sunWattHours = Db.Data.Insolation * Db.Data.PanelSize
    return fudgedWatts / sunWattHours
  },


}