import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocialLink } from '../../interfaces';
import { LucideAngularModule, Linkedin, Github } from 'lucide-angular';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {
  readonly Linkedin = Linkedin;
  readonly Github = Github;

  socialLinks: SocialLink[] = [
    {
      platform: 'linkedin',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/francisco-daniel-castro-borrome-1235a9276',
      name: 'LinkedIn',
    },
    {
      platform: 'github',
      icon: Github,
      url: 'https://github.com/odimsom',
      name: 'GitHub',
    },
  ];
}
