import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEletricComponent } from './footer-eletric.component';

describe('FooterEletricComponent', () => {
  let component: FooterEletricComponent;
  let fixture: ComponentFixture<FooterEletricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterEletricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEletricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
