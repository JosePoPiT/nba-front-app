import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  linkedn: string = 'https://www.linkedin.com/in/jose-garcia-mata-638447124/';
  github: string = 'https://github.com/JosePoPiT?tab=repositories';
}
