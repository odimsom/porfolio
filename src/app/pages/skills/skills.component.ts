import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
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
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'frontend',
      skills: [
        { name: 'Angular', level: 4, color: 'text-red-500' },
        { name: 'TypeScript', level: 4, color: 'text-blue-500' },
        { name: 'JavaScript', level: 5, color: 'text-yellow-500' },
        { name: 'HTML5', level: 5, color: 'text-orange-500' },
        { name: 'CSS3', level: 4, color: 'text-blue-400' },
        { name: 'Tailwind CSS', level: 4, color: 'text-cyan-500' },
        { name: 'Bootstrap', level: 4, color: 'text-purple-500' },
        { name: 'Dart/Flutter', level: 3, color: 'text-blue-600' },
      ],
    },
    {
      title: 'Backend',
      icon: 'backend',
      skills: [
        { name: 'C#', level: 5, color: 'text-purple-600' },
        { name: '.NET Core', level: 5, color: 'text-purple-500' },
        { name: 'ASP.NET Core MVC', level: 5, color: 'text-blue-600' },
        { name: 'Node.js', level: 4, color: 'text-green-500' },
        { name: 'Express.js', level: 4, color: 'text-gray-600' },
        { name: 'Entity Framework', level: 5, color: 'text-blue-500' },
        { name: 'Sequelize', level: 4, color: 'text-blue-400' },
        { name: 'Go', level: 3, color: 'text-cyan-600' },
        { name: 'Quarkus', level: 3, color: 'text-red-600' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: 'cloud',
      skills: [
        { name: 'AWS', level: 3, color: 'text-orange-600' },
        { name: 'Azure', level: 3, color: 'text-blue-600' },
        { name: 'CI/CD', level: 4, color: 'text-green-600' },
        { name: 'Azure DevOps', level: 3, color: 'text-blue-500' },
        { name: 'Git', level: 5, color: 'text-orange-500' },
        { name: 'GitHub', level: 5, color: 'text-gray-600' },
      ],
    },
    {
      title: 'Database',
      icon: 'database',
      skills: [
        { name: 'SQL Server', level: 4, color: 'text-red-600' },
        { name: 'MySQL', level: 4, color: 'text-blue-500' },
        { name: 'SQLite', level: 4, color: 'text-blue-400' },
        { name: 'Oracle', level: 3, color: 'text-red-500' },
        { name: 'SQL', level: 5, color: 'text-gray-600' },
      ],
    },
    {
      title: 'Arquitectura & Patrones',
      icon: 'architecture',
      skills: [
        { name: 'Onion Architecture', level: 4, color: 'text-purple-500' },
        { name: 'CQRS + MediatR', level: 4, color: 'text-blue-500' },
        { name: 'Repository Pattern', level: 4, color: 'text-green-500' },
        { name: 'SOLID Principles', level: 4, color: 'text-yellow-600' },
        { name: 'MVC Pattern', level: 5, color: 'text-red-500' },
        { name: 'Scrum/Agile', level: 4, color: 'text-blue-600' },
      ],
    },
  ];

  getStarArray(level: number): boolean[] {
    return Array(5)
      .fill(false)
      .map((_, i) => i < level);
  }
}
