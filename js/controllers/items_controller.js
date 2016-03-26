var ItemsController = {
  currentIndex: null,
  render:  function(index){
    this.currentIndex = index
    var item = null
    if(index == 'new'){
      item = new Item()
    } else {
      item = Db.Data.Items[index]
    }
    
    $('#view').html(tmpl('item', item))
  },
  isNew: function(){
    return this.currentIndex === 'new'
  },
  destroy: function(id){
    // FIXME: WTH Javascript // tried slice(id,1)
    delete Db.Data.Items[id]
    Db.Data.Items = Db.Data.Items.filter(Boolean)
    Db.save()
    document.location = '#/usage'    
  },
  update: function(id){
    var frm = $('#frmItem')[0]
    var item = Db.Data.Items[id]
        item.name  =     frm.name.value
        item.watts =     frm.watts.value
        item.hours =     frm.hours.value
        item.priority =  $(frm.priority).val()
    this.orderItems()
    Db.save()
    document.location = '#/usage'
  },
  create: function(){
    var frm = $('#frmItem')[0]
    var item = new Item(
          frm.name.value, 
          frm.watts.value,
          frm.hours.value,
          $(frm.priority).val())

    Db.Data.Items.push(item)
    this.orderItems()
    Db.save()
    document.location = '#/usage'
  },  
  orderItems: function(){
    var orderedItems = []
    Watts.priorities.forEach(function(p){
      Watts.itemsBy(p).forEach(function(i){
        orderedItems.push(i)
      })
    })

    Db.Data.Items = orderedItems
    return orderedItems

  }  
}
