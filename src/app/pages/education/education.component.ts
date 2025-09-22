import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

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
  icon: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  translationService = inject(TranslationService);

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
      icon: 'csharp',
    },
    {
      titleKey: 'certificates.csharpIntermediate.title',
      issuerKey: 'certificates.itla.issuer',
      dateKey: 'certificates.csharpIntermediate.date',
      skills: ['C#', 'Entity Framework', 'APIs', 'Bases de Datos'],
      icon: 'csharp',
    },
    {
      titleKey: 'certificates.csharpAdvanced.title',
      issuerKey: 'certificates.itla.issuer',
      dateKey: 'certificates.csharpAdvanced.date',
      skills: ['C#', 'Arquitectura', 'Patrones', 'Clean Code'],
      icon: 'csharp',
    },
    {
      titleKey: 'certificates.angular.title',
      issuerKey: 'certificates.udemy.issuer',
      dateKey: 'certificates.angular.date',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Componentes'],
      icon: 'angular',
    },
    {
      titleKey: 'certificates.python.title',
      issuerKey: 'certificates.udemy.issuer',
      dateKey: 'certificates.python.date',
      skills: ['Python', 'Programación', 'Sintaxis', 'Fundamentos'],
      icon: 'python',
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
}
