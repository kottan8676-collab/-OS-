importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
 apiKey: "AIzaSyDoMPkVXFb8yW57W9S5tX6Xk70AJmik_O4",
  authDomain: "knowledgeos-19481.firebaseapp.com",
  projectId: "knowledgeos-19481",
  storageBucket: "knowledgeos-19481.firebasestorage.app",
  messagingSenderId: "110904798378",
  appId: "1:110904798378:web:6670dffaaa026c260734d3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});
