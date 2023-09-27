import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyClothingComponent } from './buy-clothing.component';

describe('BuyClothingComponent', () => {
  let component: BuyClothingComponent;
  let fixture: ComponentFixture<BuyClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyClothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
