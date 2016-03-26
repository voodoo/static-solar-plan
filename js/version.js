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
  },
  
  MAX_SIZE: 50000, // assuming that is about 5meg

  size: function(){
    return JSON.stringify(store.getAll()).length
  },

  usagePercentage: function(){
    return parseInt(this.MAX_SIZE / this.size())
  }  
}

Version.init()