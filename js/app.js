App = {
  Db: {},
  priorities: function(){
    return this.Db.Items.map(function(item,index){
      return item.priority
    }).uniq()
  },  
  wattsBy: function(priority){
    var watts = 0
    this.Db.Items.forEach(function(item, i){
      if(item.priority == priority){
        watts += item.watts * item.hours
      }

    })
    return watts 
  },
  init: function(){   
    $('#app').html(this.html())
    this.setEditable()
    this.setRdo()
  },
  html: function(){
    return tmpl("app", this.Db);
  },
  setState: function(){
    var items = []
    var elements = $('#pnlUsage table tr[data-row]');
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
    store.set('db', this.Db)
    this.init()
  },
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
  setEditable: function(){

    var editable = $('[contenteditable="true"]');

    addEvent(editable, 'blur', function () {
      App.setItemPriority(this)
      App.setState()
    });  

  },
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
  setItemPriority: function(item){
    
    if(item.className == 'priority'){
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
    }
  },

  reset: function(){
    store.clear()
    location.reload()
  },

  save: function(){
    var db  = store.get('db')
    var sDb = JSON.stringify(db, null, 2)
    $('#t-json').val(sDb)
    $('#d-json').toggle()
    document.getElementById('t-json').select()
  },

  update: function(){
    var text = $('#t-json').val()
    var db   = JSON.parse(text)
        store.set('db', db)
        location.reload()

  }

}

