import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMc13Tte2m3b4VhCdCENMy00H43SLt6ys",
    authDomain: "linkedin-clone-00.firebaseapp.com",
    projectId: "linkedin-clone-00",
    storageBucket: "linkedin-clone-00.appspot.com",
    messagingSenderId: "1026784801700",
    appId: "1:1026784801700:web:f84425f2f5dc98d4a24731",
    measurementId: "G-8YEXY2EM2R"
  };


  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();

  export{db, auth};
  