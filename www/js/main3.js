// Test of the UserHandler class
$(()=>{
  $('body').append(`
    <p><b>Note:</b> To try logout, unregister and change - login first!</p>
    <button>check</button>
    <button>login</button>
    <button>logout</button>
    <button>register</button>
    <button>registerAndLogin</button>
    <button>unregister</button>
    <button>change</button>
    <pre></pre>
  `);

  $('button').click(async function(){
    let email, password, propsToChange;
    let demo = $(this).text();
    if(['login', 'register', 'registerAndLogin'].includes(demo)){
      email = prompt('Email');
      password = prompt('Password');
    }
    if(demo == 'change'){
      propsToChange = {password: prompt('Password')};
    }
    let result = await UserHandler[demo](
      propsToChange || email, password
    );
    $('pre').text(
      'Result:\n' + JSON.stringify(result,'','  ') + '\n\n' +
      'Info:\n' + JSON.stringify(result.info,'','  ')
    );
  });

  $('button').first().click();

});