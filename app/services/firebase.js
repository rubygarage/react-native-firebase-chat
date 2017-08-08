import * as firebase from 'firebase';
import { firebaseConfig } from '../configs/firebase';

let instance = null;

export default class FirebaseService {

  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(firebaseConfig);
      instance = this;
    }
    return instance;
  }
}
