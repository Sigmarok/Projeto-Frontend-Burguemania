import { Component, input, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() imageSrc: string = '';
  @Input() burguerid: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() category: string = '';
  @Input() clickable: boolean = true;

  currentRoute: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.url.subscribe((url) => {
      this.currentRoute = url.join('/');
      console.log('Current route:', this.currentRoute); // Log para depuração
    });
  }

  navigate(): void {
    if (
      this.currentRoute === 'categoria/fitness' ||
      this.currentRoute === 'categoria/vegan' ||
      this.currentRoute === 'categoria/infarto' ||
      this.currentRoute === 'cardapio-completo'
    ) {
      this.router.navigate(['detalhes', this.burguerid]);
    } else {
      console.log('Navigating to category:', this.category); // Log para depuração
      this.router.navigate(['/categoria', this.category]);
    }
  }
}
