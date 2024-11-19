import { Component, OnInit } from '@angular/core';
import { BurguersService, BurguerItem } from '../../services/burguers.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-cardapio-completo',
  standalone: true,
  templateUrl: './cardapio-completo.component.html',
  styleUrls: ['./cardapio-completo.component.css'],
  imports: [CommonModule, HeaderComponent, NavbarComponent, CardComponent]
})
export class CardapioCompletoComponent implements OnInit {
  burgers: BurguerItem[] = [];

  constructor(private burguersService: BurguersService) {}

  ngOnInit(): void {
    this.burgers = this.burguersService.getAllBurgers();
  }
}
