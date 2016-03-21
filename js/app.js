App = {
  // Local db
  Db: {},
  // Fire
  init: function(){   
    $('#app').html(this.html())
    this.setEditable()
    this.setRdo()
  },
  // HTML for the app
  html: function(){
    return tmpl("app", this.Db);
  },
  // Calculate item watt hours by cursing over each row of usage table
  setUsageItems: function(){
    var items = []
    var elements = $('#pnlUsage table tr[data-row]');
    // FIXME: Why not work with jq?
    Array.prototype.forEach.call(elements, function(el, i){
      var tds = el.querySelectorAll('td')
      items.push({
        name:     tds[0].innerText,
        priority: tds[1].innerText,
        watts:    tds[2].innerText,
        hours:    tds[3].innerText
      })
    });    

    this.Db.Items = items 
  },
  // Catch conenteditable for priority
  setItemPriority: function(item){
    // only except these as priority
    var PRIORS = 'need,want,luxury'.split(',')
    var value  = item.innerText.toLowerCase().trim()
    // defaults to
    var dValue = 'Need'
    if(value.indexOf('w') != -1){
      dValue = 'Want'
    } else if(value.indexOf('l') != -1 || value.indexOf('x') != -1){
      dValue = 'Luxury'
    }
    item.innerText = dValue
  },  
  // Respond to clicking settings ui radios
  setRdo: function(){
    $('.rdo a').on('click', function(evt){
      evt.preventDefault()
      var name  = $(this).data('name')
      var value = $(this).text()
      App.Db[name]=value
      store.set('db', App.Db)
      App.init()
      
    })
  },  
  // Fixme: bad terminology
  setState: function(){
    this.setUsageItems()
    store.set('db', this.Db)
    this.init()
  },
  // Fire up the db from default - or use localstorage
  setInitialState: function(){
    if (!store.enabled) {
        L('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
        this.Db = Db
    }
    if(store.get('db')){
      this.Db = store.get('db')
    } else {
      store.set('db', Db)
      this.Db = Db
    }
  },
  // Reset items to be editable - since we lose them after repaint
  setEditable: function(){

    var editable = $('[contenteditable="true"]');

    addEvent(editable, 'blur', function () {
      if(this.innerText == "") {
        $(this).parent('tr').remove()
      } else if(this.className == 'priority'){
        App.setItemPriority(this)
      }
      App.setState()
    });  

  },
  // Fall back to default db values
  reset: function(){
    store.clear()
    location.reload()
  },
  newItem: function(){
    this.Db.Items.unshift({
      name:     'New Item',
      watts:    '100',
      hours:    1,
      priority: 'Need'
    })
    store.set('db', this.Db)
    this.init()
  },  
  // Uniq priorities
  uniqPriorities: function(){
    return this.Db.Items.map(function(item,index){
      return item.priority
    }).uniq()
  }, 
  // Items by priority
  itemsBy: function(priority){
    var items = []
    this.Db.Items.map(function(item,index){
      if(item.priority == priority) items.push(item)
    })
    return items
  },     
  // Return watts by priority
  wattsBy: function(priority){
    var watts = 0
    this.Db.Items.forEach(function(item, i){
      if(item.priority == priority){
        watts += item.watts * item.hours
      }

    })
    return watts 
  },
  // Return watts by priority
  sumOfWattsBy: function(priority){
    if(priority == 'Want'){
      return this.wattsBy('Need') + this.wattsBy('Want')
    } else if(priority == 'Luxury'){
      return this.wattsBy('Need') + this.wattsBy('Want') + this.wattsBy('Luxury')
    } else {
      return this.wattsBy('Need')
    }
  },  

  numberOfPanels: function(priority){
    var fudgedWatts  = this.sumOfWattsBy(priority) * this.Db.FudgeFactor
    var sunWattHours = this.Db.Insolation * this.Db.PanelSize
    return (fudgedWatts / sunWattHours) + 1
  },

  // Show json so it can be saved
  // save: function(){
  //   var db  = store.get('db')
  //   var sDb = JSON.stringify(db, null, 2)
  //   $('#t-json').val(sDb)
  //   $('#d-json').toggle()
  //   document.getElementById('t-json').select()
  // },

  // Update json from a saved version
  update: function(){
    var text = $('#txtJson').val();
    var db   = JSON.parse(text);
        store.set('db', db);
        location.reload();

  }  

}

