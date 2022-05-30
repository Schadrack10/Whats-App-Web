import { useEffect, useState } from "react";
//import firebase from "firebase/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'
// import { useAuthState } from 'react-firebase-hooks/auth';

import ChatRoom from "../Components/ChatRoom";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";


// initialization
// if (!firebase.apps.length) {
//   firebase.initializeApp({

  const firebaseConfig = {
    apiKey: "AIzaSyBNnDPBlQimaGiM7YjrQXcg7fBNdoDTD7U",
  authDomain: "whatsappclonefb-f92f9.firebaseapp.com",
  projectId: "whatsappclonefb-f92f9",
  storageBucket: "whatsappclonefb-f92f9.appspot.com",
  messagingSenderId: "868145828515",
  appId: "1:868145828515:web:c862cc78282f3a2c03a516",
  measurementId: "G-C7J39SJ6WR"
  }
//   );
// } else {
//   firebase.app(); // if already initialized, use that one
// }

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
// const db = firebaseConfig.firestore();

// export const auth = getAuth(firebaseApp);
//export const db = getFirestore(firebaseApp);
// export const storage = getStorage(firebaseApp);
// export default {auth, db, storage};
export const useAuthStatus = ()=> useAuthState(auth);

// export 
const auth = getAuth();

// export default firebaseConfig;

// const auth = firebase.auth();
//const db = firebase.firestore();
export default function Home() {
  const [user, setUser] = useState(() => auth.currentUser);

  // export component

  const db = props.db;
  const { uid, displayName, photoURL } = props.user;

  const dummySpace = useRef();

  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoURL,
    });

    setNewMessage("");

    // scroll down the chat
    dummySpace.current.scrollIntoView({ behavor: "smooth" });
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(100)
      .onSnapshot((querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setMessages(data);
      });
  }, [db]);

  return (
    <div className="container">
      <ul>
        {messages.map((message) => (
          <li
            key={message.id}
            className={message.uid === uid ? "sent" : "received"}
          >
            <section>
              display user image
              {message.photoURL ? (
                <img
                  src={message.photoURL}
                  alt="Avatar"
                  width={45}
                  height={45}
                />
              ) : null}
            </section>

            <section>
              display message text
              <p>{message.text}</p>

              display user name
              {message.displayName ? <span>{message.displayName}</span> : null}
              <br />
              display message date and time
              {message.createdAt?.seconds ? (
                <span>
                  {formatRelative(
                    new Date(message.createdAt.seconds * 1000),
                    new Date()
                  )}
                </span>
              ) : null}
            </section>
          </li>
        ))}
      </ul>
    </div>
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  {
    user ? (
      <>
        <nav id="sign_out">
          <h2>Chat With Friends</h2>
          <button onClick={signOut}>Sign Out</button>
        </nav>
        <>
          <nav id="sign_out">
            <h2>Chat With Friends</h2>
            <button onClick={signOut}>Sign Out</button>
          </nav>

          chat room component
          <ChatRoom user={user} db={db} />
        </>
      </>
    ) : (
      <section id="sign_in">
        <h1>Welcome to Chat Room</h1>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </section>
    );
  }
}
