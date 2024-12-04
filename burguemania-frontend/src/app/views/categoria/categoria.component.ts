import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurguersService, BurguerItem } from '../../services/burguers.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  imports: [HeaderComponent, NavbarComponent, CardComponent, CommonModule, ButtonComponent]
})
export class CategoriaComponent implements OnInit {
  category: string = '';
  burguers: BurguerItem[] = [];

  constructor(private route: ActivatedRoute, private burguersService: BurguersService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      console.log('Category in component:', this.category); // Log para depuração
      this.loadBurguers();
    });
  }

  async loadBurguers(): Promise<void> {
    try {
      this.burguers = await this.burguersService.getBurguersByCategory(this.category);
      console.log('Burguers loaded:', this.burguers); // Log para depuração
    } catch (error) {
      console.error('Error loading burguers:', error);
    }
  }
}
