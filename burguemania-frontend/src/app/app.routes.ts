import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { DetalhesComponent } from './views/detalhes/detalhes.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { CardapioCompletoComponent } from './views/cardapio-completo/cardapio-completo.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'detalhes/:title', component: DetalhesComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: 'categoria/:category', component: CategoriaComponent},
  {path: 'cardapio-completo', component: CardapioCompletoComponent}
];
