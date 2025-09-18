import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImageComponent {
  downloadCV() {
    console.log('Downloading CV...');
    // Aquí iría la lógica para descargar el CV
  }
}
