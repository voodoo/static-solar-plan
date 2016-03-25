App = {
  init: function(){   
    Db.init()
    $('#app').html(tmpl("app", Db.Data))
  }
}

