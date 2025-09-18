import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

interface Technology {
  name: string;
  color: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'HermesBanking',
      description:
        'Sistema bancario empresarial completo con ASP.NET Core MVC que incluye gestión de usuarios, cuentas de ahorro, tarjetas de crédito, préstamos, transacciones y panel administrativo integral. Implementa Onion Architecture con CQRS, MediatR y JWT. *No desplegado por requerir infraestructura bancaria especializada y servicios de pago certificados.*',
      technologies: [
        { name: 'C#', color: 'text-purple-600' },
        { name: 'ASP.NET Core', color: 'text-purple-500' },
        { name: 'Entity Framework', color: 'text-blue-500' },
        { name: 'MediatR', color: 'text-green-500' },
        { name: 'Bootstrap', color: 'text-purple-400' },
        { name: 'JWT', color: 'text-orange-500' },
        { name: 'CQRS', color: 'text-cyan-500' },
      ],
      githubUrl: 'https://github.com/odimsom/HermesBanking',
      category: 'Full-Stack',
      featured: true,
    },
    {
      title: 'Country App',
      description:
        'Aplicación web para encontrar países y sus informaciones por regiones, países y capitales. Lista cada país respectivamente y permite ver más información como bandera, idiomas, moneda, etc.',
      technologies: [
        { name: 'Angular', color: 'text-red-500' },
        { name: 'TypeScript', color: 'text-blue-500' },
        { name: 'Tailwind CSS', color: 'text-cyan-500' },
        { name: 'DaisyUI', color: 'text-green-400' },
        { name: 'HTML5', color: 'text-orange-500' },
      ],
      githubUrl: 'https://github.com/odimsom/Country-App',
      liveUrl: 'https://countryappfdcb.netlify.app/',
      category: 'Frontend',
      featured: true,
    },
    {
      title: 'Portfolio Personal',
      description:
        'Portafolio personal desarrollado con Angular 19, featuring partículas interactivas, diseño responsive, sección de skills con rating system y navegación SPA fluida.',
      technologies: [
        { name: 'Angular', color: 'text-red-500' },
        { name: 'TypeScript', color: 'text-blue-500' },
        { name: 'Tailwind CSS', color: 'text-cyan-500' },
        { name: 'Particles.js', color: 'text-blue-400' },
        { name: 'SPA', color: 'text-purple-500' },
      ],
      githubUrl: '#', // Se actualizará cuando se despliegue
      category: 'Frontend',
      featured: true,
    },
    {
      title: 'ITLANetworking',
      description:
        'Red social completa con ASP.NET Core MVC: autenticación, gestión de amistades, publicaciones multimedia y juego Battleship integrado. Implementa Onion Architecture y Repository Pattern.',
      technologies: [
        { name: 'C#', color: 'text-purple-600' },
        { name: 'ASP.NET Core', color: 'text-purple-500' },
        { name: 'Entity Framework', color: 'text-blue-500' },
        { name: 'Tailwind CSS', color: 'text-cyan-500' },
        { name: 'JavaScript', color: 'text-yellow-500' },
        { name: 'YouTube API', color: 'text-red-600' },
      ],
      githubUrl: 'https://github.com/odimsom/ITLANetworking',
      category: 'Full-Stack',
      featured: false,
    },
    {
      title: 'AppCenar',
      description:
        'Aplicación web completa para gestión de pedidos de delivery que conecta clientes, comercios y repartidores en una plataforma integrada. Arquitectura MVC con Node.js y Express.',
      technologies: [
        { name: 'Node.js', color: 'text-green-500' },
        { name: 'Express.js', color: 'text-gray-600' },
        { name: 'Sequelize', color: 'text-blue-400' },
        { name: 'MySQL', color: 'text-blue-500' },
        { name: 'Bootstrap', color: 'text-purple-400' },
        { name: 'JavaScript', color: 'text-yellow-500' },
        { name: 'jQuery', color: 'text-blue-600' },
      ],
      githubUrl: 'https://github.com/odimsom/AppCenar',
      category: 'Full-Stack',
      featured: false,
    },
  ];

  getFeaturedProjects(): Project[] {
    return this.projects.filter((project) => project.featured);
  }

  getOtherProjects(): Project[] {
    return this.projects.filter((project) => !project.featured);
  }
}
