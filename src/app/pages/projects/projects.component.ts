import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface Project {
  titleKey: string;
  descriptionKey: string;
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
  translationService = inject(TranslationService);

  projects: Project[] = [
    {
      titleKey: 'HermesBanking',
      descriptionKey: 'projects.hermesBanking.description',
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
      category: 'Completo',
      featured: true,
    },
    {
      titleKey: 'Country App',
      descriptionKey: 'projects.countryApp.description',
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
      featured: false,
    },
    {
      titleKey: 'Portfolio Personal',
      descriptionKey: 'projects.portfolio.description',
      technologies: [
        { name: 'Angular', color: 'text-red-500' },
        { name: 'TypeScript', color: 'text-blue-500' },
        { name: 'Tailwind CSS', color: 'text-cyan-500' },
        { name: 'Particles.js', color: 'text-blue-400' },
        { name: 'SPA', color: 'text-purple-500' },
      ],
      githubUrl: '#', // Se actualizará cuando se despliegue
      category: 'Frontend',
      liveUrl: 'http://francastroporfolio.netlify.app',
      featured: false,
    },
    {
      titleKey: 'ITLANetworking',
      descriptionKey: 'projects.itlaNetworking.description',
      technologies: [
        { name: 'C#', color: 'text-purple-600' },
        { name: 'ASP.NET Core', color: 'text-purple-500' },
        { name: 'Entity Framework', color: 'text-blue-500' },
        { name: 'Tailwind CSS', color: 'text-cyan-500' },
        { name: 'JavaScript', color: 'text-yellow-500' },
        { name: 'YouTube API', color: 'text-red-600' },
      ],
      githubUrl: 'https://github.com/odimsom/ITLANetworking',
      category: 'Completo',
      featured: true,
    },
    {
      titleKey: 'AppCenar',
      descriptionKey: 'projects.appCenar.description',
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
      category: 'Completo',
      liveUrl: 'https://appcenar.onrender.com',
      featured: true,
    },
  ];

  getFeaturedProjects(): Project[] {
    return this.projects.filter((project) => project.featured);
  }

  getOtherProjects(): Project[] {
    return this.projects.filter((project) => !project.featured);
  }
}
