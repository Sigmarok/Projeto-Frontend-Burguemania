import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DescricaoComponent } from '../../components/descricao/descricao.component';
import { BurguersService, BurguerItem } from '../../services/burguers.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, CardComponent, CommonModule, ButtonComponent, DescricaoComponent],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  itemid: string = '';
  burger: BurguerItem | undefined;

  constructor(private route: ActivatedRoute, private burguersService: BurguersService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('Params:', params); // Log para depuração
      this.itemid = params.get('title') || '';
      console.log('itemid in detalhes:', this.itemid); // Log para depuração
      this.loadContent();
    });
  }

  async loadContent(): Promise<void> {
    console.log('Loading content for item:', this.itemid); // Log para depuração
    this.burger = await this.burguersService.getBurgerByID(this.itemid);
    console.log('Burger in detalhes:', this.burger); // Log para depuração
  }
}
