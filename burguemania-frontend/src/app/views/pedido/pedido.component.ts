import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurguersService, Order } from '../../services/burguers.service';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [InputComponent, CommonModule, FormsModule, HeaderComponent, NavbarComponent, ButtonComponent],
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  inputs: { productName: string, quantity: number }[] = [
    { productName: '', quantity: 0 }
  ];

  constructor(private burguersService: BurguersService, public dialog: MatDialog) {}

  addInput() {
    this.inputs.push(
      { productName: '', quantity: 0 }
    );
  }

  deleteInput() {
    if (this.inputs.length > 1) {
      this.inputs.pop(); // Remove o último input
    }
  }

  async submitOrder() {
    let totalValue = 0;
    let allProductsFound = true;

    for (const input of this.inputs) {
      const burger = await this.burguersService.getBurgerByName(input.productName);
      if (burger) {
        totalValue += burger.price * input.quantity;
      } else {
        allProductsFound = false;
        this.dialog.open(ErrorModalComponent);
        break;
      }
    }

    if (allProductsFound) {
      const order: Order = {
        statusId: 1, // Status padrão para novos pedidos
        value: totalValue
      };

      try {
        await this.burguersService.createOrder(order);
        console.log('Order submitted:', order); // Log para depuração
      } catch (error) {
        console.error('Error submitting order:', error);
      }
    }
  }
}
