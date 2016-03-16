App = {
  items: [],
  priorities: function(){
    return this.items.map(function(item,index){
      return item.priority
    }).uniq()
    //return Helper.uniq(prios);
  },  
  wattsBy: function(priority){
    var watts = 0
    Array.prototype.forEach.call(this.items, function(item, i){
      if(item.priority == priority){
        watts += item.watts * item.hours
      }

    })
    return watts 
  },
  init: function(){   
    $('#app').innerHTML = this.html()
    this.setEditable()
  },
  html: function(){
    return tmpl("app-html", this.items);
  },
  setState: function(){
    var items = []
    var elements = $s('#app table tr[data-row]');
    //L(elements)
    Array.prototype.forEach.call(elements, function(el, i){
      var tds = el.querySelectorAll('td')
      items.push({
        name:     tds[0].innerText,
        priority: tds[1].innerText,
        watts:    tds[2].innerText,
        hours:    tds[3].innerText
      })
    });    

    this.items = items
    store.set('items', this.items)
    this.init()
  },
  setInitialState: function(){
    if (!store.enabled) {
        console.log('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
        this.items = Items
    }
    if(store.get('items')){
      this.items = store.get('items')
    } else {
      store.set('items', Items)
      this.items = store.get('items')
    }
  },
  setEditable: function(){

    var editable = $s('[contenteditable="true"]');

    addEvent(editable, 'blur', function () {
      App.setItemPriority(this)
      App.setState()
    });  

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
    var items  = store.get('items')
    var sItems = JSON.stringify(items, null, 2)
    $('#t-json').val(sItems)
    $('#d-json').toggle()
    document.getElementById('t-json').select()
  },

  update: function(){
    var text = $('#t-json').val()
    var items = JSON.parse(text)
        store.set('items', items)
        location.reload()

  }

}

