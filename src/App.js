import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtLaLbkrEgpgvNWQD9q1WCOr5JqyynuZY",
  authDomain: "enso-fitness-academy.firebaseapp.com",
  projectId: "enso-fitness-academy",
  storageBucket: "enso-fitness-academy.appspot.com",
  messagingSenderId: "128523708087",
  appId: "1:128523708087:web:73f3779ce729e1a8a0cf32",
  measurementId: "G-4FCSW2TXL1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
