import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  inject,
  effect,
} from '@angular/core';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { Container } from '@tsparticles/engine';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'particle-background',
  templateUrl: 'ccs-pure-particle.component.html',
  imports: [CommonModule, NgxParticlesModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticleComponent implements OnInit, OnDestroy {
  id = 'tsparticles';
  private container?: Container;
  private themeService = inject(ThemeService);

  get particlesOptions() {
    const isDark = this.themeService.isDark();
    const particleColor = isDark ? '#3b82f6' : '#1f2937';

    return {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          enable: true,
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 500,
          },
          value: 150,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }

  constructor(private readonly ngParticlesService: NgParticlesService) {
    // Escuchar cambios de tema
    effect(() => {
      const isDark = this.themeService.isDark();
      console.log(
        'Theme changed, recreating particles:',
        isDark ? 'dark' : 'light'
      );
      this.recreateParticles();
    });
  }

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log('tsParticles engine loaded:', engine);
      await loadSlim(engine);
    });
  }

  ngOnDestroy(): void {
    // Los effects se limpian automáticamente
  }

  particlesLoaded(container: Container): void {
    console.log('Particles container loaded:', container);
    this.container = container;
  }

  private recreateParticles(): void {
    if (!this.container) return;

    try {
      // Limpiar las partículas actuales
      this.container.particles.clear();

      // Aplicar las nuevas opciones
      this.container.options.load(this.particlesOptions);

      // Refrescar para aplicar los cambios
      this.container.refresh();

      console.log('Particles recreated successfully');
    } catch (error) {
      console.error('Error recreating particles:', error);
      // Como fallback, intentar restart
      try {
        this.container.stop();
        setTimeout(() => {
          if (this.container) {
            this.container.start();
          }
        }, 100);
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
      }
    }
  }
}
