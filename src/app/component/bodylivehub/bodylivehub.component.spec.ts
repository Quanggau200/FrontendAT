import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodylivehubComponent } from './bodylivehub.component';

describe('BodylivehubComponent', () => {
  let component: BodylivehubComponent;
  let fixture: ComponentFixture<BodylivehubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodylivehubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodylivehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
