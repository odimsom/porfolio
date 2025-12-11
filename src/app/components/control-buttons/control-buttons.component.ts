import { Component, computed, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { TranslationService } from '../../services/translation.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';

@Component({
  selector: 'app-control-buttons',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, LucideAngularModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="control-buttons" appAnimate="animate-fade-in-left">
      <!-- Botón de tema -->
      <button
        (click)="toggleTheme()"
        [title]="themeButtonTitle()"
        [ngStyle]="getThemeButtonStyles()"
        class="hover-lift"
      >
        <!-- Sol (tema claro activo) -->
        <lucide-icon
          *ngIf="themeService.isLight()"
          [img]="Sun"
          class="control-icon"
          [style.color]="getIconColor()"
        ></lucide-icon>

        <!-- Luna (tema oscuro activo) -->
        <lucide-icon
          *ngIf="themeService.isDark()"
          [img]="Moon"
          class="control-icon"
          [style.color]="getIconColor()"
        ></lucide-icon>
      </button>

      <!-- Botón de idioma -->
      <button
        (click)="toggleLanguage()"
        [title]="languageButtonTitle()"
        class="control-btn language-btn hover-lift"
        [class.active]="true"
        [ngStyle]="getLanguageButtonStyles()"
      >
        <!-- Bandera España (español activo) -->
        <div *ngIf="translationService.isSpanish()" class="flag-icon es-flag">
          <div class="flag-stripe red"></div>
          <div class="flag-stripe yellow"></div>
          <div class="flag-stripe red"></div>
        </div>

        <!-- Bandera UK (inglés activo) -->
        <div *ngIf="translationService.isEnglish()" class="flag-icon uk-flag">
          <div class="union-jack"></div>
        </div>
      </button>
    </div>
  `,
  styleUrls: ['./control-buttons.component.css'],
})
export class ControlButtonsComponent {
  readonly Sun = Sun;
  readonly Moon = Moon;

  constructor(
    public themeService: ThemeService,
    public translationService: TranslationService
  ) {}

  themeButtonTitle = computed(() => {
    return this.themeService.isDark()
      ? this.translationService.translate('controls.theme.light')
      : this.translationService.translate('controls.theme.dark');
  });

  languageButtonTitle = computed(() => {
    return this.translationService.isSpanish()
      ? this.translationService.translate('controls.language.en')
      : this.translationService.translate('controls.language.es');
  });

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  // Métodos para estilos dinámicos
  getThemeButtonStyles(): any {
    const baseStyles = {
      width: '2.5rem',
      height: '2.5rem',
      'border-radius': '0.75rem',
      border: '1px solid',
      'backdrop-filter': 'blur(10px)',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    };

    if (this.themeService.isLight()) {
      // En tema claro, el botón de sol está activo y debe ser #8a0808
      return {
        ...baseStyles,
        background: 'rgba(138, 8, 8, 0.2) !important',
        'border-color': 'rgba(138, 8, 8, 0.4) !important',
        color: '#8a0808 !important',
      };
    } else {
      // En tema oscuro, el botón de luna está activo y debe ser azul
      return {
        ...baseStyles,
        background: 'rgba(59, 130, 246, 0.2) !important',
        'border-color': 'rgba(59, 130, 246, 0.4) !important',
        color: '#3b82f6 !important',
      };
    }
  }

  getLanguageButtonStyles(): any {
    const baseStyles = {
      width: '2.5rem',
      height: '2.5rem',
      'border-radius': '0.75rem',
      border: '1px solid',
      'backdrop-filter': 'blur(10px)',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    };

    // El botón de idioma siempre debe mostrar color activo según el tema actual
    return this.themeService.isDark()
      ? {
          ...baseStyles,
          background: 'rgba(59, 130, 246, 0.2) !important',
          'border-color': 'rgba(59, 130, 246, 0.4) !important',
          color: '#3b82f6 !important',
        }
      : {
          ...baseStyles,
          background: 'rgba(138, 8, 8, 0.2) !important',
          'border-color': 'rgba(138, 8, 8, 0.4) !important',
          color: '#8a0808 !important',
        };
  }

  // Método específico para obtener el color del icono
  getIconColor(): string {
    return this.themeService.isDark() ? '#3b82f6' : '#8a0808';
  }
}
