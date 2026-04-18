importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "あなたのapiKey",
  authDomain: "あなたのauthDomain",
  projectId: "あなたのprojectId",
  storageBucket: "あなたのstorageBucket",
  messagingSenderId: "あなたのmessagingSenderId",
  appId: "あなたのappId"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});