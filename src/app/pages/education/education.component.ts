import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faPython, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCertificate, faGraduationCap, faBook, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface EducationItem {
  titleKey: string;
  subtitleKey: string;
  institutionKey: string;
  periodKey: string;
  locationKey: string;
  descriptionKey: string;
  type: 'degree' | 'certification' | 'course';
  status: 'completed' | 'current';
}

interface Certificate {
  titleKey: string;
  issuerKey: string;
  dateKey: string;
  skills: string[];
  credentialUrl?: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  readonly faAngular = faAngular;
  readonly faPython = faPython;
  readonly faCode = faCode;
  readonly faMicrosoft = faMicrosoft;
  readonly faLaptopCode = faLaptopCode;
  
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  educationItems: EducationItem[] = [
    {
      titleKey: 'education.degree.title',
      subtitleKey: 'education.degree.subtitle',
      institutionKey: 'education.degree.institution',
      periodKey: 'education.degree.period',
      locationKey: 'education.degree.location',
      descriptionKey: 'education.degree.description',
      type: 'degree',
      status: 'current',
    },
  ];

  certificates: Certificate[] = [
    {
      titleKey: 'certificates.csharpBasic.title',
      issuerKey: 'certificates.itla.issuer',
      dateKey: 'certificates.csharpBasic.date',
      skills: ['C#', 'Programación', 'OOP', 'Fundamentos'],
      icon: faMicrosoft,
    },
    {
      titleKey: 'certificates.csharpIntermediate.title',
      issuerKey: 'certificates.itla.issuer',
      dateKey: 'certificates.csharpIntermediate.date',
      skills: ['C#', 'Entity Framework', 'APIs', 'Bases de Datos'],
      icon: faMicrosoft,
    },
    {
      titleKey: 'certificates.csharpAdvanced.title',
      issuerKey: 'certificates.itla.issuer',
      dateKey: 'certificates.csharpAdvanced.date',
      skills: ['C#', 'Arquitectura', 'Patrones', 'Clean Code'],
      icon: faMicrosoft,
    },
    {
      titleKey: 'certificates.angular.title',
      issuerKey: 'certificates.udemy.issuer',
      dateKey: 'certificates.angular.date',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Componentes'],
      icon: faAngular,
    },
    {
      titleKey: 'certificates.python.title',
      issuerKey: 'certificates.udemy.issuer',
      dateKey: 'certificates.python.date',
      skills: ['Python', 'Programación', 'Sintaxis', 'Fundamentos'],
      icon: faPython,
    },
  ];

  getITLACertificates(): Certificate[] {
    return this.certificates.filter(
      (cert) => cert.issuerKey === 'certificates.itla.issuer'
    );
  }

  getUdemyCertificates(): Certificate[] {
    return this.certificates.filter(
      (cert) => cert.issuerKey === 'certificates.udemy.issuer'
    );
  }

  // Métodos para colores dinámicos basados en tema
  getStatusClasses(status: string): string {
    const baseClasses = 'w-4 h-4 rounded-full';

    if (this.themeService.isDark()) {
      return status === 'current'
        ? `${baseClasses} bg-blue-500 border-blue-400`
        : `${baseClasses} bg-green-500 border-green-400`;
    } else {
      return status === 'current'
        ? `${baseClasses} border`
        : `${baseClasses} bg-green-500 border-green-400`;
    }
  }

  getStatusStyles(status: string): any {
    if (this.themeService.isDark() || status !== 'current') {
      return null;
    }

    return {
      backgroundColor: '#8a0808',
      borderColor: '#6d0606',
    };
  }

  getSkillBadgeClasses(): string {
    return 'px-2 py-1 text-xs rounded-full border';
  }

  getSkillBadgeStyles(): any {
    return this.themeService.isDark()
      ? {
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          color: '#60a5fa',
          borderColor: 'rgba(59, 130, 246, 0.3)',
        }
      : {
          backgroundColor: 'rgba(138, 8, 8, 0.2)',
          color: '#8a0808',
          borderColor: 'rgba(138, 8, 8, 0.3)',
        };
  }

  getCertificateIconClass(icon: IconDefinition): string {
    if (icon === this.faAngular) return 'text-red-400';
    if (icon === this.faPython) return 'text-yellow-400';
    if (icon === this.faMicrosoft) return 'text-blue-400';
    return 'text-purple-400';
  }

  getCertificateContainerClass(icon: IconDefinition): string {
    if (icon === this.faAngular) return 'bg-red-500/20 border-red-500/30';
    if (icon === this.faPython) return 'bg-yellow-500/20 border-yellow-500/30';
    if (icon === this.faMicrosoft) return 'bg-blue-500/20 border-blue-500/30';
    return 'bg-purple-500/20 border-purple-500/30';
  }

  getCertificateBadgeClass(icon: IconDefinition): string {
    if (icon === this.faAngular) return 'bg-red-500/20 text-red-400 border-red-500/30';
    if (icon === this.faPython) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    if (icon === this.faMicrosoft) return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
  }
}
