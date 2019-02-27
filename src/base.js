import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAIIvsKwsilE7g9IpvQL2rnBbqZeMFZpao",
  authDomain: "fisheswesboss.firebaseapp.com",
  databaseURL: "https://fisheswesboss.firebaseio.com",
});

const base = Rebase.createClass(firebase.database())

export {firebaseApp};

export default base;