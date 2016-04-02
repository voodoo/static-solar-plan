var Test = {
  tests: [],
  init: function(){
    if(confirm('This will reset the db before (and after) running tests. Are you sure?')){
      this.resetDb()
      this.run()
      //this.results()
    }  
  },
  run: function(){
    // this.tests.push(
    //     {action: "visit usage panel", expectation: "see default plan", result: "fail"},
    //     {action: "click first entry, Fridge", expectation: "see Fridge values", result: "success"}
    
    $('#pnlUsage').waitUntilExists(function(){
      L('beofre')
      $(this).find('tr.trItem')[0].click()
    })
    L('after') //.click()

    // document.location = '#/usage'
    // $('#pnlUsage').waitUntilExists(function(){
    //   Test.tests.push({
    //       action: "visit usage panel", 
    //       expectation: "see default plan", 
    //       result: $(this).find('tr.trItem td')[0].innerHTML == 'Fridge'}
    //       )
    //   $(this).find('tr.trItem')[0].click()
    //   $('#frmItem').waitUntilExists(function(){
    //     $('input#watts').val(300)
    //     $('.btn-primary')[0].click()
    //     $('#pnlUsage').waitUntilExists(function(){
          
    //       Test.tests.push({
    //           action: "change an items watts", 
    //           expectation: "should show in the summary", 
    //           result: $(this).find('tr.trItem td')[1].innerText == '300'}
    //           )   
    //       Test.results()   
    //       Test.resetDb()     
    //     })
    //   })    
    // })
      
  },
  results: function(){
    $('#view').html(tmpl('test', {tests: this.tests}))
  },
  resetDb: function(){
    Db.Data = $Data
    store.set('db', Db.Data)
    L('reset')
  }
}

// $('#pnlUsage').waitUntilExists(function(){
//   L("Usage panel loaded")
//   $(this).find('tr.trItem')[0].click()
//   L("Clicked first item")
//   $('#frmItem').waitUntilExists(function(){
//     $('input#watts').val(300)
//     L("Filled watts with 300")
//     $('input#name').val("fittelybits")
//     L("Filled in name with fittleybits")
//     $('.btn-primary')[0].click()
//     L("Clicked submit")
//     $('#pnlUsage').waitUntilExists(function(){
//       L("Returned to panel usage page")
//       assert(this.innerHTML.indexOf('buummer') != -1, "fittely was found")
//     })

//   })
// })
