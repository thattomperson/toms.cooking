import * as sapper from '@sapper/app';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Performance Monitoring library
import "firebase/performance";

// TODO: Replace the following with your app's Firebase project configuration
import firebaseConfig from "../firebase.json"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const perf = firebase.performance();
const trace = perf.trace('app_bootup');
trace.start();

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
  trace.stop()
});