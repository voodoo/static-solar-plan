App = {
  
  init: function(){   
    Db.init()
    $('#app').html(tmpl("app", Db.Data))
    this.initGlobalHandlers()
  },

  initGlobalHandlers: function(){

    $('#aTest').on('click', function(evt){
      evt.preventDefault()
      Test.init()
    })
  }
  
}

