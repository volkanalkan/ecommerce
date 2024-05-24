import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router) {
    this.auth = getAuth();
  }

  onRegister() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        console.log('Registration successful', userCredential);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Registration error', error);
        this.errorMessage = 'Kayıt işlemi başarısız, lütfen tekrar deneyin.';
      });
  }
}
