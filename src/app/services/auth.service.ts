import { Injectable } from '@angular/core';
import { Auth, authState, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;
  private currentUser: User | null = null;

  constructor(private auth: Auth, private router: Router) {
    this.user$ = authState(this.auth);
    this.user$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/home']);
    });
  }
}
