'use strict';

const app = require('../app');



const signIn = (data) => $.ajax({
  url: app.api + '/sign-in',
  method: 'POST',
  data,
});


const changePassword = (data) => $.ajax({

  url: app.api + '/change-password/' + app.user.id,
  method: 'PATCH',
  data,
  headers: {
    Authorization: 'Token token=' + app.user.token,
  }
});


const signUp = (data) => $.ajax({

    url: app.api + '/sign-up',
    method: 'POST',
    data,

   });


const signOut = () => $.ajax({


  url: app.api + '/sign-out/' + app.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  }
});


const create = () => $.ajax({

    url: app.api + '/games/',
    method: 'POST',
    data: app.user,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }

});


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  create

};
