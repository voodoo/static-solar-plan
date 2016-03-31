// FIXME: HAHA "Router"
function Router () {
  var DEFAULT_ROUTE = 'usage'
  var name   = location.hash.slice(1) || DEFAULT_ROUTE;
      name   = name.replace(/^\//,'')
  var named  = name.split(/\//)

  // eg item/1
  if(named.length > 1) {
    ItemsController.render(named[1])    
  } else {
    Controller.setName(name)
    Controller.render()        
  }
}

window.addEventListener('hashchange', Router);
window.addEventListener('load', Router);
