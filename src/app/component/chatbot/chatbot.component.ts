import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  private sanitizer=inject(DomSanitizer);
  Urlchatbot:any="";
  constructor()
  {
    this.Urlchatbot =this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://mindmaid.ai/preview-section/pD5TRXXkGxBac5J9qJXjRp'
    );
  }
 
}
