import { Component } from '@angular/core';
import { LoaderService } from '../../loader-service/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  loading$ = this.loaderService.loading$;
  error$ = this.loaderService.error$;

  constructor(private loaderService: LoaderService){console.log('se ejecuto el loader');
  
  console.log(this.error$);
  
  }

}
