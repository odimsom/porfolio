import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImageComponent {
  translationService = inject(TranslationService);

  downloadCV() {
    console.log('Downloading CV...');
    // Aquí iría la lógica para descargar el CV
  }
}
