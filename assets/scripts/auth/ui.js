'use strict';

const app = require('../app');


const onSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  }
app.game = data.game;

};

const success = (data) => {
  console.log(data);



};


const signInSuccess = (data) => {

  app.user = data.user;

  app.game = data.game;

  console.log(app);





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
