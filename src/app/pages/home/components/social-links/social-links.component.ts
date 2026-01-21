import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from '../../interfaces';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
  imports: [CommonModule, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {
  readonly faGithub = faGithub;
  readonly faLinkedin = faLinkedin;

  socialLinks: SocialLink[] = [
    {
      platform: 'linkedin',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/francisco-daniel-castro-borrome-1235a9276',
      name: 'LinkedIn',
    },
    {
      platform: 'github',
      icon: faGithub,
      url: 'https://github.com/odimsom',
      name: 'GitHub',
    },
  ];
}
