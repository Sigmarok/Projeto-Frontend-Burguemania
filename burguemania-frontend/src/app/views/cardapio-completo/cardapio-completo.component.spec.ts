import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioCompletoComponent } from './cardapio-completo.component';

describe('CardapioCompletoComponent', () => {
  let component: CardapioCompletoComponent;
  let fixture: ComponentFixture<CardapioCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioCompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
