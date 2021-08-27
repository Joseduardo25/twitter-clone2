import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBHDkTYUHdS2TXqNEydhrvCwjvSQUAiFxU",
        authDomain: "twitter-clone2-bd8e0.firebaseapp.com",
        projectId: "twitter-clone2-bd8e0",
        storageBucket: "twitter-clone2-bd8e0.appspot.com",
        messagingSenderId: "157647692806",
        appId: "1:157647692806:web:701f4c69ef77aa417b4f87",
        measurementId: "G-74SX9PWYEB"
})

const db =firebaseApp.firestore()

export { db }