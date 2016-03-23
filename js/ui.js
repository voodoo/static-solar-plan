var UI = {
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
  }  
}

var addEvent = (function () {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.addEventListener(type, fn, false);
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  } else {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  }
})();
