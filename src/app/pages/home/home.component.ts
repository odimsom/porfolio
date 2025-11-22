import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SocialLinksComponent,
  ProfileInfoComponent,
  ProfileImageComponent,
} from './components';
import { NavigationLayoutComponent } from '../../layouts/navigation-layout/navigation-layout.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    SocialLinksComponent,
    ProfileInfoComponent,
    ProfileImageComponent,
    NavigationLayoutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    AnimateOnScrollDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  getDownloadStyles(): any {
    return this.themeService.isDark()
      ? { color: 'var(--accent-color)' }
      : { color: '#8a0808' };
  }
}
