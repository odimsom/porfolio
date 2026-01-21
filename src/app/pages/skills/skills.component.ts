import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDesktop, faServer, faCloud, faDatabase, faLayerGroup, faCode, faTerminal, faCogs, faGlobe, faUsers, faUserTie, faHandshake, faPuzzlePiece, faSync, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faReact, faJs, faHtml5, faCss3Alt, faBootstrap, faNodeJs, faAws, faMicrosoft, faGitAlt, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

interface SkillCategory {
  titleKey: string;
  icon: any;
  skills: Skill[];
}

interface Skill {
  name: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  faUsers = faUsers;
  faUserTie = faUserTie;
  faHandshake = faHandshake;
  faPuzzlePiece = faPuzzlePiece;
  faSync = faSync;
  faLightbulb = faLightbulb;

  skillCategories: SkillCategory[] = [
    {
      titleKey: 'skills.frontend',
      icon: faDesktop,
      skills: [
        { name: 'Angular', color: 'text-red-500' },
        { name: 'React', color: 'text-blue-500' },
        { name: 'TypeScript', color: 'text-blue-500' },
        { name: 'JavaScript', color: 'text-yellow-500' },
        { name: 'HTML5', color: 'text-orange-500' },
        { name: 'CSS3', color: 'text-blue-400' },
        { name: 'Tailwind CSS', color: 'text-cyan-500' },
        { name: 'Bootstrap', color: 'text-purple-500' },
      ],
    },
    {
      titleKey: 'skills.backend',
      icon: faServer,
      skills: [
        { name: 'C#', color: 'text-purple-600' },
        { name: '.NET Core', color: 'text-purple-500' },
        { name: 'ASP.NET Core MVC', color: 'text-blue-600' },
        { name: 'Node.js', color: 'text-green-500' },
        { name: 'Express.js', color: 'text-gray-600' },
        { name: 'Entity Framework', color: 'text-blue-500' },
        { name: 'Sequelize', color: 'text-blue-400' },
        { name: 'Business Central (AL)', color: 'text-blue-600' },
      ],
    },
    {
      titleKey: 'skills.cloud',
      icon: faCloud,
      skills: [
        { name: 'AWS', color: 'text-orange-600' },
        { name: 'Azure', color: 'text-blue-600' },
        { name: 'CI/CD', color: 'text-green-600' },
        { name: 'Git', color: 'text-orange-500' },
        { name: 'GitHub', color: 'text-gray-600' },
      ],
    },
    {
      titleKey: 'skills.database',
      icon: faDatabase,
      skills: [
        { name: 'SQL Server', color: 'text-red-600' },
        { name: 'MySQL', color: 'text-blue-500' },
        { name: 'PostgreSQL', color: 'text-blue-400' },
        { name: 'MongoDB', color: 'text-green-500' },
        { name: 'SQL', color: 'text-gray-600' },
      ],
    },
    {
      titleKey: 'skills.architecture',
      icon: faLayerGroup,
      skills: [
        { name: 'Onion Architecture', color: 'text-purple-500' },
        { name: 'CQRS + MediatR', color: 'text-blue-500' },
        { name: 'Repository Pattern', color: 'text-green-500' },
        { name: 'SOLID Principles', color: 'text-yellow-600' },
        { name: 'MVC Pattern', color: 'text-red-500' },
        { name: 'Scrum/Agile', color: 'text-blue-600' },
      ],
    },
  ];

  // Métodos para colores dinámicos basados en tema
  getTechnologyClasses(originalColor: string): string {
    if (this.themeService.isDark()) {
      return originalColor;
    }

    if (originalColor.includes('text-blue')) {
      return originalColor.replace(/text-blue-\d+/, 'text-[#8a0808]');
    }

    return originalColor;
  }

  // Método para obtener clases de animación alternadas
  getAnimationClass(index: number): string {
    const patterns = [
      'animate-slide-in-left',   // Desde izquierda
      'animate-slide-in-up',     // Desde arriba
      'animate-slide-in-right',  // Desde derecha
    ];
    return patterns[index % 3];
  }

  getIconColor(iconType: any): string {
    const baseClasses = 'transition-colors duration-300';

    if (this.themeService.isDark()) {
      // Colores originales para tema oscuro
      switch (iconType) {
        case faDesktop:
          return `text-blue-400 group-hover:text-blue-300 ${baseClasses}`;
        case faServer:
          return `text-green-400 group-hover:text-green-300 ${baseClasses}`;
        case faCloud:
          return `text-purple-400 group-hover:text-purple-300 ${baseClasses}`;
        case faDatabase:
          return `text-yellow-400 group-hover:text-yellow-300 ${baseClasses}`;
        case faLayerGroup:
          return `text-pink-400 group-hover:text-pink-300 ${baseClasses}`;
        default:
          return `text-blue-400 group-hover:text-blue-300 ${baseClasses}`;
      }
    } else {
      // Colores personalizados para tema claro
      switch (iconType) {
        case faDesktop:
          return `${baseClasses}`;
        case faServer:
          return `text-green-500 group-hover:text-green-600 ${baseClasses}`;
        case faCloud:
          return `text-purple-500 group-hover:text-purple-600 ${baseClasses}`;
        case faDatabase:
          return `text-yellow-500 group-hover:text-yellow-600 ${baseClasses}`;
        case faLayerGroup:
          return `text-pink-500 group-hover:text-pink-600 ${baseClasses}`;
        default:
          return `${baseClasses}`;
      }
    }
  }

  getIconStyles(iconType: any): any {
    if (this.themeService.isDark()) {
      return null;
    }

    // En tema claro, usar #8a0808 para iconos que originalmente eran azules
    if (iconType === faDesktop || iconType === 'default') {
      return { color: '#8a0808' };
    }

    return null;
  }

  getCategoryTitleColor(): string {
    return 'text-white font-medium text-sm group-hover:transition-colors duration-300';
  }

  getCategoryTitleStyles(): any {
    return this.themeService.isDark() ? { color: 'white' } : { color: 'white' };
  }

  getSkillIcon(skillName: string): any {
    switch (skillName) {
      case 'Angular': return faAngular;
      case 'React': return faReact;
      case 'TypeScript': return faCode; // No specific brand icon in free set usually, code is fine
      case 'JavaScript': return faJs;
      case 'HTML5': return faHtml5;
      case 'CSS3': return faCss3Alt;
      case 'Tailwind CSS': return faCss3Alt; // Reuse CSS or use wind icon if available (not in standard free brands often)
      case 'Bootstrap': return faBootstrap;
      case 'C#': return faCode; // C# doesn't have a direct icon in free brands
      case '.NET Core': return faMicrosoft;
      case 'ASP.NET Core MVC': return faMicrosoft;
      case 'Node.js': return faNodeJs;
      case 'Express.js': return faServer;
      case 'Entity Framework': return faDatabase;
      case 'Sequelize': return faDatabase;
      case 'Business Central (AL)': return faMicrosoft;
      case 'AWS': return faAws;
      case 'Azure': return faMicrosoft;
      case 'CI/CD': return faCogs;
      case 'Git': return faGitAlt;
      case 'GitHub': return faGithub;
      case 'SQL Server': return faDatabase;
      case 'MySQL': return faDatabase;
      case 'PostgreSQL': return faDatabase;
      case 'MongoDB': return faDatabase;
      case 'SQL': return faDatabase;
      case 'Onion Architecture': return faLayerGroup;
      case 'CQRS + MediatR': return faCogs;
      case 'Repository Pattern': return faDatabase;
      case 'SOLID Principles': return faCode;
      case 'MVC Pattern': return faLayerGroup;
      case 'Scrum/Agile': return faUsers;
      default: return faCode;
    }
  }

  getSkillIconClass(skillName: string): string {
    return ''; // Classes are handled by the parent container usually, or we can return text colors here if we want to override
  }
}
