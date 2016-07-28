'use strict';


const getFormFields = require(`../../../lib/get-form-fields`);


const api = require('./api');
const ui = require('./ui');



const onSignUp = function (event) {

  let data = getFormFields(this);

  event.preventDefault();


  api.signUp(data)
   .done(ui.success)
   .fail(ui.failure);
};



const onSignIn = function (event) {

  let data = getFormFields(this);

  event.preventDefault();


  api.signIn(data)
   .done(ui.signInSuccess)
   .fail(ui.failure);
};



const onChangePassword = function(event) {

  let data = getFormFields(this);

  event.preventDefault();

    api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);

};



const onSignOut = function (event) {

  event.preventDefault();


  api.signOut()
   .done(ui.signOutSuccess)
   .fail(ui.failure);
};


const onCreateGame = function (event) {

  event.preventDefault();

  api.create()
    .done(ui.onSuccess)
    .fail(ui.onError);

};


const onGetGame = function(event){

  event.preventDefault();

    api.show()
    .done(ui.getSuccess)
    .fail(ui.onError);

};


const onUpdateGame = function (event) {

  event.preventDefault();

  api.update()
  .done(ui.onUpdate)
  .fail(ui.onError);
};


const addHandlers = () => {

  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);


  // create new game
  $('#game-create').on('submit', onCreateGame);

  //show game
  $('#game-request').on('submit', onGetGame);

  //update a game
  $('#game-update').on('submit', onUpdateGame);

};


module.exports = {
  addHandlers,
};
