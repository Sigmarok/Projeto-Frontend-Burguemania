import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurguersService } from '../../services/burguers.service';
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  imports: [HeaderComponent, NavbarComponent, CardComponent, CommonModule]
})
export class CategoriaComponent implements OnInit {
  category: string = '';
  burguers: any;

  constructor(private route: ActivatedRoute, private BurguersService: BurguersService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      console.log('Category in component:', this.category); // Log para depuração
    });
    this.burguers = this.BurguersService.burguers[this.category]?.items || [];
    console.log(this.burguers);
  }


}
