'use strict';

const app = require('../app');


const onSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.games);
  }

app.game = data.game;

};


const success = (data) => {
  console.log(data);

};


const signInSuccess = (data) => {

  app.user = data.user;
  console.log(data);

};


//create a new game
const getSuccess = (data) => {

  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.games);
  }

app.game = data.game;
// console.log(data.game.cells);





  // app.game = data.game;
  // // app.user = data.user
  // console.log(data.game);

};


const signOutSuccess = () => {
  console.log('You sign out succesfully!');
  delete app.user;

};


const failure = (error) => {
  console.error(error);
};


const onUpdate = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.games);
  }


};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  onSuccess,
  onUpdate,
  getSuccess
};
