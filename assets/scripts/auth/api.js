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

// no data passed
const create = () => $.ajax({

    url: app.api + '/games/',
    method: 'POST',
    data: app.user,
    //added headers
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }

});



const show = () => $.ajax({

      method: 'GET',
      url: app.api + '/games/' + app.game.id,
      data: app.game,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      }


});

// let newMove =   {
//   "game": {
//     "cell": {
//       "index": index
//       "value": value
//     },
//     "over": over
//   }
// },

const update = () => $.ajax({


  method: 'PATCH',
  url: app.api + '/games/' + app.game.id,

  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  // data:




});



module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  create,
  show,
  update

};
