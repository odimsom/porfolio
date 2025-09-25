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
import { ThemeService } from '../../services/theme.service';

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
  themeService = inject(ThemeService);

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

  // Métodos para colores dinámicos basados en tema
  getContactIconClasses(): string {
    return 'w-12 h-12 rounded-lg flex items-center justify-center border';
  }

  getContactIconStyles(): any {
    return this.themeService.isDark()
      ? {
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 0.3)',
        }
      : {
          backgroundColor: 'rgba(138, 8, 8, 0.2)',
          borderColor: 'rgba(138, 8, 8, 0.3)',
        };
  }

  getSendButtonClasses(): string {
    return this.themeService.isDark()
      ? 'px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 disabled:hover:scale-100 flex items-center gap-2'
      : 'px-8 py-3 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 disabled:hover:scale-100 flex items-center gap-2';
  }

  getSendButtonStyles(): any {
    return this.themeService.isDark()
      ? null
      : {
          backgroundColor: '#8a0808',
          '&:hover': { backgroundColor: '#6d0606' },
        };
  }

  getCallNowButtonClasses(): string {
    return this.themeService.isDark()
      ? 'px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2'
      : 'px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2';
  }

  getCallNowButtonStyles(): any {
    return this.themeService.isDark()
      ? null
      : {
          backgroundColor: '#8a0808',
          '&:hover': { backgroundColor: '#6d0606' },
        };
  }

  getWhatsAppButtonClasses(): string {
    return 'px-6 py-3 bg-transparent border font-medium rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2';
  }

  getWhatsAppButtonStyles(): any {
    return this.themeService.isDark()
      ? {
          borderColor: '#3b82f6',
          color: '#60a5fa',
        }
      : {
          borderColor: '#8a0808',
          color: '#8a0808',
          '&:hover': { backgroundColor: 'rgba(138, 8, 8, 0.1)' },
        };
  }

  getSocialIconClasses(): string {
    return 'w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110';
  }

  getSocialIconStyles(): any {
    return this.themeService.isDark()
      ? {
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          '&:hover': { backgroundColor: 'rgba(59, 130, 246, 0.3)' },
        }
      : {
          backgroundColor: 'rgba(138, 8, 8, 0.2)',
          '&:hover': { backgroundColor: 'rgba(138, 8, 8, 0.3)' },
        };
  }
}
