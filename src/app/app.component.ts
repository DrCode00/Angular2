import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeComponent } from './+Introduction/me/me.component';
import { FamilyComponent } from './+Familiy/family/family.component';
import { JobComponent } from './Job/job/job.component';
import { ComputerComponent } from './+Computer/computer/computer.component';

@Component({
  selector: 'app-root',
  imports: [
    
    MeComponent,
    FamilyComponent,
    JobComponent,
    ComputerComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'game';
}
