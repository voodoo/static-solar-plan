function Item(name, watts, hours, priority,id){
  this.name     = name       || "Item Name"
  this.watts    = watts      || 100
  this.hours    = watts      || 1
  this.priority = priority   || 'Need'
  this.id       = id         || 'new'
}