import { Component } from '@angular/core';
import { InputComponent } from "../../components/input/input.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [InputComponent, CommonModule, HeaderComponent, NavbarComponent, ButtonComponent],
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  inputs: { label: string, placeholder: string, size: string }[] = [
    { label: 'Produto *', placeholder: 'Digite o produto', size: 'medium' },
    { label: 'Quantidade *', placeholder: 'Digite a quantidade', size: 'medium'}
  ];

  addInput() {
    this.inputs.push(
      { label: 'Produto *', placeholder: 'Digite o produto', size: 'small' },
      { label: 'Quantidade *', placeholder: 'Digite a quantidade', size: 'small' }
    );
  }

  deleteInput() {
    if (this.inputs.length > 2) {
      this.inputs.splice(-2, 2); // Remove os últimos dois inputs
    }
  }
}
