import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoComponent {}
