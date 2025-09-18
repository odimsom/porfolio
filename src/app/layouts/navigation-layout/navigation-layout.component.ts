import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';

interface NavigationItem {
  icon: string;
  href: string;
  name: string;
}

@Component({
  selector: 'app-navigation-layout',
  templateUrl: './navigation-layout.component.html',
  styleUrls: ['./navigation-layout.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLayoutComponent implements OnInit, OnDestroy {
  navigationItems: NavigationItem[] = [
    { icon: 'home', href: '#home', name: 'Home' },
    { icon: 'cog', href: '#skills', name: 'Skills' },
    { icon: 'code', href: '#projects', name: 'Projects' },
    { icon: 'graduation-cap', href: '#education', name: 'Education' },
    { icon: 'envelope', href: '#contact', name: 'Contact' },
  ];

  activeSection: string = 'home';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Listen for scroll events to update active section
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.updateActiveSection();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['home', 'skills', 'projects', 'education', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Better detection

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition) {
        if (this.activeSection !== section) {
          this.activeSection = section;
          this.cdr.markForCheck();
        }
        break;
      }
    }
  }

  scrollToSection(href: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = href.substring(1); // remove the '#'
      this.cdr.markForCheck();
    }
  }

  isActive(href: string): boolean {
    return this.activeSection === href.substring(1);
  }
}
