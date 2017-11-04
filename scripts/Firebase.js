import * as firebase from "firebase";

let config = {
    apiKey: "AIzaSyCc6WyV3ABA3jCnrzLicTpIvwpbwxBHhWk",
    authDomain: "westviewspeechanddebate-95c13.firebaseapp.com",
    databaseURL: "https://westviewspeechanddebate-95c13.firebaseio.com",
    projectId: "westviewspeechanddebate-95c13",
    storageBucket: "westviewspeechanddebate-95c13.appspot.com",
    messagingSenderId: "898377549593"
  };

const fb = firebase.initializeApp(config);

export default fb;