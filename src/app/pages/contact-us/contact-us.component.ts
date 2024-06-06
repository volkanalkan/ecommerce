import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data: ', form.value);
      alert('Your message has been sent successfully!');
      form.reset();
    }
  }
}
