import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, map, mergeMap, first } from 'rxjs/operators';
import { User } from '../modules/user-profile/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  authenticated(): Observable<boolean> {
    return this.afAuth.authState
      .pipe(
        map((user: firebase.User) => {
          return user !== null;
        }),
        mergeMap(is => (is) ? of(is) : of(is))
      ).pipe(first());
  }

  async googleSignin(): Promise<void> {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user): Promise<void> {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const { uid, email, displayName, photoURL } = user;
    const data = { 
      uid: uid, 
      email: email, 
      displayName: displayName, 
      photoURL: photoURL
    } 
    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.signOut().then(() => this.router.navigate([environment.defaultLoginRoute]));
  }

}
