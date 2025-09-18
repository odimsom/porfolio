import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { Container } from '@tsparticles/engine';

@Component({
  selector: 'particle-background',
  templateUrl: 'ccs-pure-particle.component.html',
  imports: [CommonModule, NgxParticlesModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticleComponent implements OnInit {
  id = 'tsparticles';

  particlesOptions = {
    background: {
      color: {
        value: '#000000',
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
        value: '#3b82f6',
      },
      links: {
        color: '#3b82f6',
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 2,
      },
      move: {
        enable: true,
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 4 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log('tsParticles engine loaded:', engine);
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log('Particles container loaded:', container);
  }
}
