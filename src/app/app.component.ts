import { Component } from '@angular/core';
import { ParticleComponent } from './background/ccs-pure-particle.component';
import { HomeComponent } from './pages/home/home.component';
import { ControlButtonsComponent } from './components/control-buttons/control-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParticleComponent, HomeComponent, ControlButtonsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'porfolio';
}
