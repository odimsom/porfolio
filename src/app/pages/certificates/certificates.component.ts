import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-certificates',
  template: `
    <div class="min-h-screen flex items-center justify-center p-8">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-white mb-8">Certificates</h2>
        <p class="text-white/80">Contenido de certificados...</p>
      </div>
    </div>
  `,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent {}
