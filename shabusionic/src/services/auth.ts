
import firebase from 'firebase';
export class Authunication {


signin(email:string,password:string){
return firebase.auth().signInWithEmailAndPassword(email,password);
}
logout(){
firebase.auth().signOut();
}

}