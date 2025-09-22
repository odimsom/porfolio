import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { TranslationService } from '../../services/translation.service';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  translationService = inject(TranslationService);

  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  submitted = false;
  submitError = false;

  // EmailJS configuration
  private readonly EMAIL_SERVICE_ID = 'default_service'; // You may need to update this with your actual service ID
  private readonly EMAIL_TEMPLATE_ID = 'template_2jbiode';
  private readonly EMAIL_PUBLIC_KEY = '5tJrOMFew8EGjAcv6';

  contactInfo = {
    phone: '8296932458',
    email: 'borrome941@gmail.com',
    location: 'República Dominicana',
  };

  constructor(private cdr: ChangeDetectorRef) {
    // Initialize EmailJS
    emailjs.init(this.EMAIL_PUBLIC_KEY);
  }

  async onSubmit(): Promise<void> {
    if (this.isSubmitting || !this.isFormValid()) {
      return;
    }

    console.log('Iniciando envío de mensaje...');
    this.isSubmitting = true;
    this.submitError = false;
    this.submitted = false; // Reset success state
    this.cdr.detectChanges(); // Force update to show loading state

    try {
      const templateParams = {
        from_name: this.contactForm.name,
        from_email: this.contactForm.email,
        subject: this.contactForm.subject,
        message: this.contactForm.message,
        to_name: 'Angel Díaz',
      };

      console.log('Enviando email con EmailJS...');
      const response: EmailJSResponseStatus = await emailjs.send(
        this.EMAIL_SERVICE_ID,
        this.EMAIL_TEMPLATE_ID,
        templateParams
      );

      console.log('Respuesta de EmailJS:', response);

      if (response.status === 200) {
        console.log('¡Email enviado exitosamente!');
        this.submitted = true;
        this.resetForm();

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          this.submitted = false;
          this.cdr.detectChanges();
        }, 5000);
      } else {
        console.error('Error en respuesta de EmailJS:', response);
        this.submitError = true;
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
      console.log(
        'Finalizando proceso de envío. isSubmitting:',
        this.isSubmitting
      );
      this.cdr.detectChanges(); // Force update to show final state
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.subject.trim() &&
      this.contactForm.message.trim() &&
      this.isValidEmail(this.contactForm.email)
    );
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  resetSubmissionState(): void {
    this.submitted = false;
    this.submitError = false;
    this.cdr.detectChanges(); // Force update when resetting state
  }
}
