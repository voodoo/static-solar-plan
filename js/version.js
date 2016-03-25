var Version = {
  init: function(){
    if(!store.get('versions')) store.set('versions', [])    
  },
  current: function(){
    return this.versions(this.versions().length)
  },
  versions: function(){
    return store.get('versions')
  },

  add: function(data){
    var newer = this.versions()
        newer.push(data)
    store.set('versions', newer)
  },
  show: function(id){
    var v = this.versions()[id]
    $('#txtJson').val(JSON.stringify(v, null, 2))
  }
}

Version.init()