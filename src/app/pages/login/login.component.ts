import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router) {
    this.auth = getAuth();
  }

  onLogin() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        console.log('Login successful', userCredential);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Login error', error);
        this.errorMessage = 'Hatalı giriş, lütfen tekrar deneyin.';
      });
  }
}
