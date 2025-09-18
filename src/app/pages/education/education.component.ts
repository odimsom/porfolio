import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface EducationItem {
  title: string;
  subtitle: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  type: 'degree' | 'certification' | 'course';
  status: 'completed' | 'current';
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
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
  educationItems: EducationItem[] = [
    {
      title: 'Tecnología en Desarrollo de Software',
      subtitle: 'Carrera Técnica',
      institution: 'Instituto Tecnológico de las Américas (ITLA)',
      period: '2023 - Actualmente Cursando',
      location: 'República Dominicana',
      description:
        'Formación integral en desarrollo de software, programación, bases de datos, arquitectura de sistemas y metodologías ágiles.',
      type: 'degree',
      status: 'current',
    },
  ];

  certificates: Certificate[] = [
    {
      title: 'Curso C# Básico',
      issuer: 'ITLA - Educación Continua',
      date: 'Enero - Marzo 2025',
      skills: ['C#', 'Programación', 'OOP', 'Fundamentos'],
      icon: 'csharp',
    },
    {
      title: 'Curso C# Intermedio',
      issuer: 'ITLA - Educación Continua',
      date: 'Abril - Junio 2025',
      skills: ['C#', 'Entity Framework', 'APIs', 'Bases de Datos'],
      icon: 'csharp',
    },
    {
      title: 'Curso C# Avanzado',
      issuer: 'ITLA - Educación Continua',
      date: 'Julio - Actualmente cursando',
      skills: ['C#', 'Arquitectura', 'Patrones', 'Clean Code'],
      icon: 'csharp',
    },
    {
      title: 'Angular de Cero a Experto (Angular 19+)',
      issuer: 'Udemy',
      date: 'Abril - Actualmente Cursando',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Componentes'],
      icon: 'angular',
    },
    {
      title: 'Python Básico desde 0',
      issuer: 'Udemy',
      date: '4 abril - 10 abril 2025',
      skills: ['Python', 'Programación', 'Sintaxis', 'Fundamentos'],
      icon: 'python',
    },
  ];

  getITLACertificates(): Certificate[] {
    return this.certificates.filter(
      (cert) => cert.issuer === 'ITLA - Educación Continua'
    );
  }

  getUdemyCertificates(): Certificate[] {
    return this.certificates.filter((cert) => cert.issuer === 'Udemy');
  }
}
