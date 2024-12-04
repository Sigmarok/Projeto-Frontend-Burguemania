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

  itemid: string = '';
  burger: BurguerItem | undefined;

  constructor(private route: ActivatedRoute, private burguersService: BurguersService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemid = params.get('title') || '';
      console.log('itemName in detalhes:', this.itemid); // Log para depuração
      this.loadContent();
    });
  }

  async loadContent(): Promise<void> {
    console.log('Loading content for item:', this.itemid); // Log para depuração
    this.burger = await this.burguersService.getBurgerByID(this.itemid);
    console.log('Burger in detalhes:', this.burger); // Log para depuração
  }
}
