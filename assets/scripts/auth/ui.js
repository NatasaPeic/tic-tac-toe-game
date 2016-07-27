'use strict';

const app = require('../app');


const onSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  }
};

const success = (data) => {
  console.log(data);
  console.log($('#user-name').val());
  console.log($('#user-email').val());
  console.log($('#user-password').val());
  console.log($('#user-password').val());


};


const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  console.log($('#user-name').val());
  console.log($('#user-email').val());

  console.log(data.user);


};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  onSuccess
};
