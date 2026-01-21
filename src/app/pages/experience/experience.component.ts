import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faMapMarkerAlt, faCalendarAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  readonly faBriefcase = faBriefcase;
  readonly faMapMarkerAlt = faMapMarkerAlt;
  readonly faCalendarAlt = faCalendarAlt;
  readonly faBuilding = faBuilding;

  experiences = [
    {
      roleKey: 'experience.minecon.role',
      companyKey: 'experience.minecon.company',
      periodKey: 'experience.minecon.period',
      locationKey: 'experience.minecon.location',
      locationTypeKey: 'experience.minecon.locationType',
      descriptionKey: 'experience.minecon.description',
      technologies: [
        { name: 'C# .NET', color: 'text-purple-600' },
        { name: 'React', color: 'text-blue-500' },
        { name: 'JavaScript (Node.js)', color: 'text-yellow-500' },
        { name: 'Business Central (AL)', color: 'text-blue-600' },
        { name: 'SQL', color: 'text-blue-400' },
        { name: 'Web Services', color: 'text-green-600' },
        { name: 'Git', color: 'text-orange-600' },
        { name: 'VS Code', color: 'text-blue-500' }
      ]
    }
  ];

  getTechnologyClasses(originalColor: string): string {
    if (this.themeService.isDark()) {
      return originalColor;
    }

    if (originalColor.includes('text-blue')) {
      return originalColor.replace(/text-blue-\d+/, 'text-[#8a0808]');
    }

    return originalColor;
  }

  getVisibleBullets(bullets: string[]): string[] {
    return bullets.slice(0, 3);
  }

  getVisibleTechs(techs: string[]): string[] {
    return techs.slice(0, 5);
  }
}
