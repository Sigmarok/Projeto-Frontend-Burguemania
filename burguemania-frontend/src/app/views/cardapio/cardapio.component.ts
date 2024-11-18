import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, ButtonComponent, CardComponent],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {

}
