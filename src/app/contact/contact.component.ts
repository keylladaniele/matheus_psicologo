import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  userName: string = '';
  userMessage: string = '';

  redirectToWhatsApp(event: Event): void {
    event.preventDefault();

    const baseUrl = 'https://wa.me/5586981863902';

    let message = '';

    if (!this.userName && !this.userMessage) {
      message = 'Olá, gostaria de agendar uma sessão!';
    } else if (this.userName && !this.userMessage) {
      message = `Olá, me chamo ${this.userName}, gostaria de agendar uma sessão`;
    } else if (!this.userName && this.userMessage) {
      message = this.userMessage;
    } else {
      message = `Olá, me chamo ${this.userName}, gostaria de agendar uma sessão. Mensagem: ${this.userMessage}`;
    }

    const url = `${baseUrl}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }
}
