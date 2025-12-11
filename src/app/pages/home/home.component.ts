import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
import { LucideAngularModule, Linkedin, Github } from 'lucide-angular';

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
    LucideAngularModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly Linkedin = Linkedin;
  readonly Github = Github;

  translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  private sectionObserver: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSectionAnimations();
    }
  }

  ngOnDestroy(): void {
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
    }
  }

  private initSectionAnimations(): void {
    const sections = document.querySelectorAll('.section-animate, .section-animate-left, .section-animate-right, .section-animate-scale');

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Opcional: dejar de observar después de animar
          this.sectionObserver?.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      this.sectionObserver?.observe(section);
    });
  }

  getDownloadStyles(): any {
    return this.themeService.isDark()
      ? { color: 'var(--accent-color)' }
      : { color: '#8a0808' };
  }
}
