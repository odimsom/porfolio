import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

interface SkillCategory {
  titleKey: string;
  icon: string;
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
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  skillCategories: SkillCategory[] = [
    {
      titleKey: 'skills.frontend',
      icon: 'frontend',
      skills: [
        { name: 'Angular', color: 'text-red-500' },
        { name: 'TypeScript', color: 'text-blue-500' },
        { name: 'JavaScript', color: 'text-yellow-500' },
        { name: 'HTML5', color: 'text-orange-500' },
        { name: 'CSS3', color: 'text-blue-400' },
        { name: 'Tailwind CSS', color: 'text-cyan-500' },
        { name: 'Bootstrap', color: 'text-purple-500' },
        { name: 'Dart/Flutter', color: 'text-blue-600' },
      ],
    },
    {
      titleKey: 'skills.backend',
      icon: 'backend',
      skills: [
        { name: 'C#', color: 'text-purple-600' },
        { name: '.NET Core', color: 'text-purple-500' },
        { name: 'ASP.NET Core MVC', color: 'text-blue-600' },
        { name: 'Node.js', color: 'text-green-500' },
        { name: 'Express.js', color: 'text-gray-600' },
        { name: 'Entity Framework', color: 'text-blue-500' },
        { name: 'Sequelize', color: 'text-blue-400' },
        { name: 'Go', color: 'text-cyan-600' },
        { name: 'Quarkus', color: 'text-red-600' },
      ],
    },
    {
      titleKey: 'skills.cloud',
      icon: 'cloud',
      skills: [
        { name: 'AWS', color: 'text-orange-600' },
        { name: 'Azure', color: 'text-blue-600' },
        { name: 'CI/CD', color: 'text-green-600' },
        { name: 'Azure DevOps', color: 'text-blue-500' },
        { name: 'Git', color: 'text-orange-500' },
        { name: 'GitHub', color: 'text-gray-600' },
      ],
    },
    {
      titleKey: 'skills.database',
      icon: 'database',
      skills: [
        { name: 'SQL Server', color: 'text-red-600' },
        { name: 'MySQL', color: 'text-blue-500' },
        { name: 'SQLite', color: 'text-blue-400' },
        { name: 'Oracle', color: 'text-red-500' },
        { name: 'SQL', color: 'text-gray-600' },
      ],
    },
    {
      titleKey: 'skills.architecture',
      icon: 'architecture',
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
  getSkillColor(originalColor: string): string {
    if (this.themeService.isDark()) {
      return originalColor;
    }

    // En tema claro, cambiar colores azules por #8a0808
    if (originalColor.includes('text-blue')) {
      return 'text-[#8a0808]';
    }

    return originalColor;
  }

  getIconColor(iconType: string): string {
    const baseClasses = 'transition-colors duration-300';

    if (this.themeService.isDark()) {
      // Colores originales para tema oscuro
      switch (iconType) {
        case 'frontend':
          return `w-8 h-8 text-blue-400 group-hover:text-blue-300 ${baseClasses}`;
        case 'backend':
          return `w-8 h-8 text-green-400 group-hover:text-green-300 ${baseClasses}`;
        case 'devops':
          return `w-8 h-8 text-purple-400 group-hover:text-purple-300 ${baseClasses}`;
        case 'database':
          return `w-8 h-8 text-yellow-400 group-hover:text-yellow-300 ${baseClasses}`;
        case 'architecture':
          return `w-8 h-8 text-pink-400 group-hover:text-pink-300 ${baseClasses}`;
        default:
          return `w-8 h-8 text-blue-400 group-hover:text-blue-300 ${baseClasses}`;
      }
    } else {
      // Colores personalizados para tema claro
      switch (iconType) {
        case 'frontend':
          return `w-8 h-8 ${baseClasses}`;
        case 'backend':
          return `w-8 h-8 text-green-400 group-hover:text-green-300 ${baseClasses}`;
        case 'devops':
          return `w-8 h-8 text-purple-400 group-hover:text-purple-300 ${baseClasses}`;
        case 'database':
          return `w-8 h-8 text-yellow-400 group-hover:text-yellow-300 ${baseClasses}`;
        case 'architecture':
          return `w-8 h-8 text-pink-400 group-hover:text-pink-300 ${baseClasses}`;
        default:
          return `w-8 h-8 ${baseClasses}`;
      }
    }
  }

  getIconStyles(iconType: string): any {
    if (this.themeService.isDark()) {
      return null;
    }

    // En tema claro, usar #8a0808 para iconos que originalmente eran azules
    if (iconType === 'frontend' || iconType === 'default') {
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
}
