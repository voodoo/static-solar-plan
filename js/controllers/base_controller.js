// Controller for all views except item
var Controller = {
  name:  null,
  setName: function(name){
    this.name = name
  },
  render:  function(){
    $('#view').hide()
    $('#view').html(tmpl(this.name, Db.Data))
    this.after()
  },
  after: function(){
    this.setRdo()
    this.setNav()
    //$('#view').slideDown(250)
    $('#view').fadeIn(100)
  },
  setNav: function(){
    $('#navbar li.active').removeClass('active')
    var li = $('#navbar li a[href="#/' + this.name + '"]')
    li.parent('li').addClass('active')    
  },
  setRdo: function(){
    var self = this
    $('.rdo a').on('click', function(evt){
      evt.preventDefault()
      var name  = $(this).data('name')
      var value = $(this).text()
      Db.Data[name]=value
      Db.save()
      self.render()
    })
  }
}
