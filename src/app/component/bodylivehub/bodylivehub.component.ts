import { Component, inject } from '@angular/core';
import { RouterLink} from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-bodylivehub',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './bodylivehub.component.html',
  styleUrl: './bodylivehub.component.css'
})
export class BodylivehubComponent {
 

}
