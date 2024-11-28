import { Component } from '@angular/core';
import { BodylivehubComponent } from "./component/bodylivehub/bodylivehub.component";
import { HeaderComponent } from "./component/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./component/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd_AT';
}
