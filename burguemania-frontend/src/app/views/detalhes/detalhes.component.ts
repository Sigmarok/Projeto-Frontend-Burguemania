import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurguersService, BurguerItem } from '../../services/burguers.service';
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";
import { DescricaoComponent } from "../../components/descricao/descricao.component";

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, CardComponent, CommonModule, ButtonComponent, DescricaoComponent],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
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
