var ItemsController = {
  render:  function(id){
    var item = null
    if(id == 'new'){
      item = new Item()
    } else {
      item = this.find(id)
    }
    
    $('#view').html(tmpl('item', item))
  },
  find: function(id){
    function finder(el){
      return el.id == id
    }
    return Db.Data.Items.find(finder)
  },

  destroy: function(id){
    // FIXME: WTH Javascript // tried slice(id,1)
    var item = this.find(id) 
    var idx  = Db.Data.Items.indexOf(item)
    delete Db.Data.Items[idx]
    Db.Data.Items = Db.Data.Items.filter(Boolean)
    Db.save()
    document.location = '#/usage'    
  },
  update: function(id){
    var frm = $('#frmItem')[0]
    var item = this.find(id)
         .name  = frm.name.value
         .watts =   frm.watts.value
         .hours = frm.hours.value
         .priority = $(frm.priority).val()


    Db.save()
    document.location = '#/usage'
  },
  create: function(){
    var id = new Date().getTime()
    L(id)
    var frm = $('#frmItem')[0]
    var item = new Item(
          frm.name.value, 
          frm.watts.value,
          frm.hours.value,
          $(frm.priority).val(), 
          id)

    Db.Data.Items.push(item)
    Db.save()
    document.location = '#/usage'
  },  
}
