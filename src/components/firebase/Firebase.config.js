const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

/*   const firebaseConfig = {
    apiKey: "AIzaSyBYeOZCuAX-RjTEr6qpcm3ste__zrQ_kWU",
    authDomain: "worldtravel-e.firebaseapp.com",
    projectId: "worldtravel-e",
    storageBucket: "worldtravel-e.appspot.com",
    messagingSenderId: "615795379879",
    appId: "1:615795379879:web:a62459b8ad84791b9d1582"
  };  */

  export default firebaseConfig;