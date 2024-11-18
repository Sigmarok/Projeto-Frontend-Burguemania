import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Default Text';
  @Input() route: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
