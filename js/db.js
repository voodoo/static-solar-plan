var Db = {
  Data: null,
  init: function(){
    if (!store.enabled) {
        L('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
        this.Data = Data
    }
    if(store.get('db')){
      this.Data = store.get('db')
    } else {
      L('initting Db.Data')
      this.Data = Data
      store.set('db', Data)
    }
  },  
  save: function(data){
    if("Version" in window){
      Version.add(this.Data)
    }
    store.set('db', this.Data)
  },

  update: function(){
    var text = $('#txtJson').val();
    var db   = JSON.parse(text);
        this.Data = db
        // So source order can be maintained
        ItemsController.orderItems()
        this.save()
        location.reload();

  },
  // Fall back to default db values
  reset: function(){
    if(confirm("Really? This will erase your data and start over")){
      store.clear()
      location.reload()      
    }
  }
}




  // // Calculate item watt hours by cursing over each row of usage table
  // setUsageItems: function(){
  //   var items = []
  //   var elements = $('#pnlUsage table tr[data-row]');
  //   // FIXME: Why not work with jq?
  //   Array.prototype.forEach.call(elements, function(el, i){
  //     var tds = el.querySelectorAll('td')
  //     items.push({
  //       name:     tds[0].innerText,
  //       priority: tds[1].innerText,
  //       watts:    tds[2].innerText,
  //       hours:    tds[3].innerText
  //     })
  //   });    

  //   this.Db.Items = items 
  // },
  // // Catch conenteditable for priority
  // setItemPriority: function(item){
  //   // only except these as priority
  //   var PRIORS = 'need,want,luxury'.split(',')
  //   var value  = item.innerText.toLowerCase().trim()
  //   // defaults to
  //   var dValue = 'Need'
  //   if(value.indexOf('w') != -1){
  //     dValue = 'Want'
  //   } else if(value.indexOf('l') != -1 || value.indexOf('x') != -1){
  //     dValue = 'Luxury'
  //   }
  //   item.innerText = dValue
  // },  
 
  // // Fixme: bad terminology
  // setState: function(){
  //   this.setUsageItems()
  //   store.set('db', this.Db)
  //   $('#view').html(tmpl("usage", this.Db));
  //   //UI.setEditable()
  // },
  // // Fire up the db from default - or use localstorage
  // setInitialState: function(){
  //   if (!store.enabled) {
  //       L('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
  //       this.Db = Db
  //   }
  //   if(store.get('db')){
  //     this.Db = store.get('db')
  //   } else {
  //     store.set('db', Db)
  //     this.Db = Db
  //   }
  // },

  // newItem: function(){
  //   this.Db.Items.unshift({
  //     name:     'New Item',
  //     watts:    '100',
  //     hours:    1,
  //     priority: 'Need'
  //   })
  //   store.set('db', this.Db)
  //   this.init()
  // },  
  // // Uniq priorities
  // uniqPriorities: function(){
  //   return this.Db.Items.map(function(item,index){
  //     return item.priority
  //   }).uniq()
  // }, 
  // // Items by priority
  // itemsBy: function(priority){
  //   var items = []
  //   this.Db.Items.map(function(item,index){
  //     if(item.priority == priority) items.push(item)
  //   })
  //   return items
  // },     
  // // Return watts by priority
  // wattsBy: function(priority){
  //   var watts = 0
  //   this.Db.Items.forEach(function(item, i){
  //     if(item.priority == priority){
  //       watts += item.watts * item.hours
  //     }

  //   })
  //   return watts 
  // },