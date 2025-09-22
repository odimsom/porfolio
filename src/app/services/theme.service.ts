import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';

  // Signal para reactive state management
  currentTheme = signal<Theme>('dark');

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      this.currentTheme.set(savedTheme);
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    const newTheme: Theme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme();
  }

  private applyTheme(): void {
    const root = document.documentElement;
    const theme = this.currentTheme();

    // Remover clases de tema anteriores
    root.classList.remove('theme-dark', 'theme-light');

    // Agregar nueva clase de tema
    root.classList.add(`theme-${theme}`);

    // Actualizar el atributo data-theme para mayor flexibilidad
    root.setAttribute('data-theme', theme);
  }

  isDark(): boolean {
    return this.currentTheme() === 'dark';
  }

  isLight(): boolean {
    return this.currentTheme() === 'light';
  }
}
