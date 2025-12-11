import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImageComponent {
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  downloadCV() {
    console.log('Downloading CV...');
    // Aquí iría la lógica para descargar el CV
  }

  getDownloadClasses(): string {
    return this.themeService.isDark()
      ? 'text-blue-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110 hover:underline underline-offset-4 font-medium'
      : 'transition-transform duration-300 hover:scale-110 hover:underline underline-offset-4 font-medium';
  }

  getDownloadStyles(): any {
    return this.themeService.isDark() ? null : { color: '#8a0808' };
  }
}
