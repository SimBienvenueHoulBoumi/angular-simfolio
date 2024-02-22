import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProfileDescriptionComponent } from '../components/profile-description/profile-description.component';
import { DevServicesComponent } from '../components/dev-services/dev-services.component';
import { WorksNumberComponent } from '../components/works-number/works-number.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    DevServicesComponent,
    FooterComponent,
    ProfileDescriptionComponent,
    WorksNumberComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
