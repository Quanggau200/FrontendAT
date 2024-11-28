import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricContactComponent } from './electric-contact.component';

describe('ElectricContactComponent', () => {
  let component: ElectricContactComponent;
  let fixture: ComponentFixture<ElectricContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
