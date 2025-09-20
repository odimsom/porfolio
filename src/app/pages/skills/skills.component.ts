import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface SkillCategory {
  title: string;
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
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
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
      title: 'Backend',
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
      title: 'Nube y DevOps',
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
      title: 'Base de Datos',
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
      title: 'Arquitectura y Patrones',
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
}
