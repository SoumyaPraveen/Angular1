import { Component ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-landing',
  imports: [ HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class LandingComponent {
  test="ok"
  isDisabled=true
  color="red  "
}
