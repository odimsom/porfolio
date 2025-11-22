import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocialLink } from '../../interfaces';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
  imports: [CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {
  socialLinks: SocialLink[] = [
    {
      platform: 'linkedin',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/francisco-daniel-castro-borrome-1235a9276',
      name: 'LinkedIn',
    },
    {
      platform: 'github',
      icon: 'github',
      url: 'https://github.com/odimsom',
      name: 'GitHub',
    },
  ];
}
