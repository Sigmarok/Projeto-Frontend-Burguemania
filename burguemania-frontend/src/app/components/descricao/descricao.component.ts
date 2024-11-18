import { Component } from '@angular/core';
import { BurguerItem } from '../../services/burguers.service';
import { BurguersService } from '../../services/burguers.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-descricao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.css'
})
export class DescricaoComponent {

  itemName: string = '';
  burger: BurguerItem | undefined;

  constructor(private route: ActivatedRoute, private burguersService: BurguersService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemName = params.get('title') || '';
      console.log('itemName in detalhes:', this.itemName); // Log para depuração
      this.loadContent();
    });
  }

  loadContent(): void {
    console.log('Loading content for item:', this.itemName); // Log para depuração
    this.burger = this.burguersService.getBurgerByName(this.itemName);
    console.log('Burger in detalhes:', this.burger); // Log para depuração
  }
}
