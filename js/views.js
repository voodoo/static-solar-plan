!function(n){"use strict";var t=function(n,a){var e=t.cache[n];return a?e(a,t):function(n){return e(n,t)}};t.cache={app:function(n,t){var a=(t.encode,function(n,a){e+=t(n,a)}),e="";return a("nav",n),e+=' \n<div class="container-fluid">\n  <div class="row">\n    <div class="col-lg-12">\n      ',a("usage",n),e+="\n      ",a("panel-settings",n),e+="   \n      ",a("panels",n),e+="   \n      ",a("battery-settings",n),e+="   \n      ",a("batts",n),e+="   \n      ",a("save-modal",n),e+=" \n    </div>\n  </div>\n</div>\n\n",a("fork-me",n),e+="        \n"},"battery-settings":function(n,t){var a=(t.encode,function(n,a){e+=t(n,a)}),e='<a name="settings"></a>\n\n<div class="panel panel-default" id="panelSettings">\n  <div class="panel-heading">\n     <h3 class="panel-title">Battery Settings</h3>\n   </div>\n   <div class="panel-body">\n\n      ';return a("rdo",{name:"DepthOfDischarge",value:n.DepthOfDischarge,options:[10,20,30,40,50,60,70,80,90],title:"Percentage you intend to discharge your batteries"}),e+="  \n      <hr/>\n      ",a("rdo",{name:"Autonomy",value:n.Autonomy,options:[1,2,3,4,5],title:"How many days your batteries can go without sun"}),e+=" \n\n\n\n  </div>\n</div>      "},batts:function(n,t){var a='<a name="batts"></a>\n<div class="panel panel-default">\n  <div class="panel-heading"><h3 class="panel-title">Batteries</h3></div>\n  <table class="table table-striped">\n  <thead>\n    <tr>\n      <th>Priority</th>\n      <th>Watts</th>\n      <th>Batts</th>\n    </tr>\n  </thead>\n  <tbody>\n\n  </tbody>\n  </table>\n</div>';return a},"fork-me":function(n,t){var a='<a class="github-fork-ribbon right-bottom fixed" href="https://github.com/voodoo/static-solar-plan" title="Fork me on GitHub">Fork me on GitHub</a>';return a},nav:function(n,t){var a='<a name="top"></a>\n<nav class="navbar navbar-inverse navbar-fixed-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#top">Solar Plan</a>\n    </div>\n    <div id="navbar" class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li><a href="#usage">Usage <span class="glyphicon glyphicon-pencil"></span></a></li>\n        <li><a href="#panels">Panels <span class="glyphicon glyphicon-th-large"></span></a></li>\n        <li><a href="#batts">Batteries <span class="glyphicon glyphicon-oil"></span></a></li>\n        <li>\n            <a href="#" data-toggle="modal" \n                        data-target="#save-modal">Save <span class="glyphicon glyphicon-floppy-disk"></span>\n            </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>';return a},"panel-settings":function(n,t){var a=(t.encode,function(n,a){e+=t(n,a)}),e='<a name="settings"></a>\n\n<div class="panel panel-default" id="panelSettings">\n  <div class="panel-heading">\n     <h3 class="panel-title">Panel Settings</h3>\n   </div>\n   <div class="panel-body">   \n\n      ';return a("rdo",{name:"PanelSize",value:n.PanelSize,options:[50,75,100,150,200,250,275,300,325],title:"Size of your panels in watts"}),e+=" \n      <hr/>\n      ",a("rdo",{name:"Insolation",value:n.Insolation,options:[1,2,3,4,5,6],title:"Number of hours your region receives"}),e+=" \n      <hr/>\n      ",a("rdo",{name:"FudgeFactor",value:n.FudgeFactor,options:[1,1.1,1.25,1.4,1.5,1.75,2],title:"Acccount for inefficiencies of panels, controller, wiring, etc"}),e+="   \n       \n  \n\n  </div>\n</div>      "},panels:function(n,t){var a=t.encode,e='<a name="panels"></a>\n<div class="panel panel-default">\n  <div class="panel-heading">\n    <h3 class="panel-title">Panels</h3>\n  </div>\n  <table class="table table-striped">\n  <thead>\n    <tr>\n      <th>Priority</th>\n      <th>Watts</th>\n      <th>Formula</th>\n      <th># of Panels</th>\n    </tr>\n  </thead>\n  <tbody>\n  ',s=App.uniqPriorities();e+="\n  ";for(var l=0;l<s.length;l++)e+="\n    <tr>\n      <td>"+a(s[l])+"</td>\n      <td>"+a(App.sumOfWattsBy(s[l]).toLocaleString())+'</td>\n      <td>\n        (\n        <span title="Watt Hours">'+a(App.sumOfWattsBy(s[l]).toLocaleString())+'</span> \n        / \n        (\n        <span title="Insolation">'+a(n.Insolation)+'</span> \n        *\n        <span title="PanelSize">'+a(n.PanelSize)+'</span>\n        )\n        *\n        <span title="FudgeFactor">'+a(n.FudgeFactor)+'</span> \n        ) + \n        <span title="Round Up">1</span>\n      </td>\n      <td>\n        <span title="'+a(App.numberOfPanels(s[l]))+'">\n          '+a(parseInt(App.numberOfPanels(s[l])+1))+"\n        </span>\n      </td>\n    </tr>\n  ";return e+="   \n  </tbody>\n  </table>\n</div>\n"},rdo:function(n,t){for(var a=t.encode,e="<p><label>"+a(n.name)+"</label> "+a(n.title)+'</p>\n<div id="rdo'+a(n.name)+'" class="btn-group btn-group-justified rdo"\n  role="group" \n  aria-label="Justified button group"> \n  ',s=0;s<n.options.length;s++){e+="\n    ";var l="default";n.options[s]==n.value&&(l="primary"),e+='\n    <a data-name="'+a(n.name)+'" \n        href="#" class="btn btn-'+a(l)+'" role="button">'+a(n.options[s])+"</a> \n  "}return e+="\n</div>\n"},"save-modal":function(n,t){var a=t.encode,e='<div class="modal fade" id="save-modal" tabindex="-1" role="dialog" aria-labelledby="save-modal">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h4 class="modal-title" id="myModalLabel">Save</h4>\n      </div>\n      <div class="modal-body">\n          <div class="alert alert-info .alert-dismissible" role="alert">\n             <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n            <p>\n               Your changes are saved automatically via localstorage. However, if you want to permanantly save you plan, or share it with others, copy the JSON below.\n            </p>\n            <p>\n              If you have a copy, that you want to use, paste it below and click the \'Update\' button below.\n            </p>\n          </div>\n            <textarea rows="30" cols="70" id="txtJson" style="width:100%">'+a(JSON.stringify(n,null,2))+'</textarea>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        <button type="button" class="btn btn-primary" onclick="App.update()">Update</button>\n      </div>\n    </div>\n  </div>\n</div>\n';return e},totals:function(n,t){var a=t.encode,e='<a name="totals"></a>\n<div class="panel panel-default">\n  <div class="panel-heading">\n    <span class="glyphicon glyphicon-plus pull-right" \n          onclick="$(this).parents(\'.panel\').find(\'table\').toggle()"></span>\n    <h3 class="panel-title">Totals by Priority</h3>\n  </div>\n  <table class="table table-striped" style="display:none">\n    <thead>\n      <tr>\n        <th>Priority</th>\n        <th></th>\n        <th width="140">Watt Hours</th>    \n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Need</td>\n        <td></td>\n        <td>'+a(App.wattsBy("Need").toLocaleString())+'</td>\n      </tr>\n      <tr>\n        <td>Want</td>\n        <td align="right">('+a(App.wattsBy("Need").toLocaleString())+" + "+a(App.wattsBy("Want").toLocaleString())+")</td>\n        <td>"+a((App.wattsBy("Need")+App.wattsBy("Want")).toLocaleString())+'</td>\n      </tr>    \n      <tr>\n        <td>Luxury</td>\n        <td align="right">\n         (\n          '+a(App.wattsBy("Need").toLocaleString())+" + \n          "+a(App.wattsBy("Want").toLocaleString())+" + \n          "+a(App.wattsBy("Luxury").toLocaleString())+" \n          )\n          </td>\n        <td>"+a((App.wattsBy("Need")+App.wattsBy("Want")+App.wattsBy("Luxury")).toLocaleString())+"</td>\n      </tr>         \n    </tbody>\n  </table>\n</div>";return e},usage:function(n,t){var a=t.encode,e='<a name="usage"></a>\n\n<div class="panel panel-default" id="pnlUsage">\n  <div class="panel-heading">\n    <a href="#" onclick="App.newItem()" class=\'btn btn-success btn-sm pull-right\'>New</a>&nbsp;&nbsp;&nbsp;&nbsp;\n    <h3 class="panel-title pull-left">\n      Usage\n    </h3>\n    <div class="clearfix"></div>\n  </div>\n  <table class="table table-striped">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th title="Need, Want or Luxury">Priority</th>\n      <th>Watts</th>\n      <th>Hours</th>\n      <th width="140">Watt Hours</th>     \n    </tr>\n  </thead>\n  <tbody>\n  ',s=0;e+="\n  ";var l=0;e+="\n  ";var o=App.uniqPriorities();e+="\n  ";for(var i=0;i<o.length;i++){e+="\n    ";var r=App.itemsBy(o[i]);e+="\n    ";for(var d=0;d<r.length;d++)e+='\n      <tr data-row="'+a(l)+'">\n        <td contenteditable=true>'+a(r[d].name)+'</td>\n        <td contenteditable=true class="priority">'+a(r[d].priority)+"</td>\n        <td contenteditable=true>"+a(r[d].watts)+"</td>\n        <td contenteditable=true>"+a(r[d].hours)+"</td>\n        <td >"+a((r[d].hours*r[d].watts).toLocaleString())+"</td>\n      </tr>\n     ",l+=1,e+="\n     ",s+=r[d].hours*r[d].watts,e+="\n   ";e+='\n   <tr>\n      <td class="subtotal" colspan="4">\n        ',"Want"==o[i]&&(e+="\n          ("+a(App.wattsBy("Need").toLocaleString())+" + <b>"+a(App.wattsBy("Want").toLocaleString())+"</b> )\n        "),e+="\n        ","Luxury"==o[i]&&(e+="\n          ("+a(App.wattsBy("Need").toLocaleString())+" + "+a(App.wattsBy("Want").toLocaleString())+" + <b>"+a(App.wattsBy("Luxury").toLocaleString())+"</b>)\n        "),e+="        \n      </td>\n      <td><b>"+a(App.sumOfWattsBy(o[i]).toLocaleString())+"</b></td></tr>\n\n  "}return e+="\n </tbody>\n  </table>\n</div>"}},t.encReg=/[<>&"'\x00]/g,t.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},t.encode=function(n){return(null==n?"":""+n).replace(t.encReg,function(n){return t.encMap[n]||""})},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.tmpl=t}(this);
