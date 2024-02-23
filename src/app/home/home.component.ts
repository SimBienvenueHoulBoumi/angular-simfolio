import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProfileDescriptionComponent } from '../components/profile-description/profile-description.component';
import { DevServicesComponent } from '../components/dev-services/dev-services.component';
import { WorksNumberComponent } from '../components/works-number/works-number.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    DevServicesComponent,
    FooterComponent,
    ProfileDescriptionComponent,
    WorksNumberComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  implements OnInit{
  isLoading: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }
}
