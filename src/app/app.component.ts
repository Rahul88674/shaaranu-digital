// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'UI';
// }
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'UI';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // handleSubmit() {
  //   const name = (document.getElementById('f-name') as HTMLInputElement).value.trim();
  //   const phone = (document.getElementById('f-phone') as HTMLInputElement).value.trim();
  //   const biz = (document.getElementById('f-biz') as HTMLInputElement).value.trim();
  //   const pkg = (document.getElementById('f-pkg') as HTMLSelectElement).value;

  //   if (!name || !phone || !biz || !pkg) {
  //     alert('Please fill in all required fields.');
  //     return;
  //   }

  //   const toast = document.getElementById('toast');
  //   if (toast) {
  //     toast.classList.add('show');
  //     setTimeout(() => toast.classList.remove('show'), 3500);
  //   }
  // }
  handleSubmit() {
    const name = (document.getElementById('f-name') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('f-phone') as HTMLInputElement).value.trim();
    const biz = (document.getElementById('f-biz') as HTMLInputElement).value.trim();
    const pkg = (document.getElementById('f-pkg') as HTMLSelectElement).value;
    const msg = (document.getElementById('f-msg') as HTMLTextAreaElement).value.trim();

    if (!name || !phone || !biz || !pkg) {
      alert('Please fill in all required fields.');
      return;
    }

    const templateParams = {
      from_name: name,
      phone: phone,
      business: biz,
      package: pkg,
      message: msg || 'No message provided',
      reply_to: 'sharanudigitals@gmail.com'
    };

    (window as any).emailjs.send('service_79hwouk', 'template_hxrdjtz', templateParams)
      .then(() => {
        const toast = document.getElementById('toast');
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3500);
        }
        // clear form
        (document.getElementById('f-name') as HTMLInputElement).value = '';
        (document.getElementById('f-phone') as HTMLInputElement).value = '';
        (document.getElementById('f-biz') as HTMLInputElement).value = '';
        (document.getElementById('f-pkg') as HTMLSelectElement).value = '';
        (document.getElementById('f-msg') as HTMLTextAreaElement).value = '';
      })
      .catch((error: any) => {
        alert('Something went wrong. Please try again!\n' + JSON.stringify(error));
      });
  }
}