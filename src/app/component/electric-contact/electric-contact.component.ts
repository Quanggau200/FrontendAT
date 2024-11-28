import { Component } from '@angular/core';
import { FooterEletricComponent } from './footer-eletric/footer-eletric.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-electric-contact',
  standalone: true,
  imports: [FooterEletricComponent,RouterLink],
  templateUrl: './electric-contact.component.html',
  styleUrl: './electric-contact.component.css'
})
export class ElectricContactComponent {

}
