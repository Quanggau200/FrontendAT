import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricWebComponent } from './electric-web.component';

describe('ElectricWebComponent', () => {
  let component: ElectricWebComponent;
  let fixture: ComponentFixture<ElectricWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
