import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricAssignComponent } from './electric-assign.component';

describe('ElectricAssignComponent', () => {
  let component: ElectricAssignComponent;
  let fixture: ComponentFixture<ElectricAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricAssignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
