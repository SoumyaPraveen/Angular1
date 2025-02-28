import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FirstComponent} from './first/first.component'
 import {FooterComponent} from './components/footer/footer.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p2';


}
