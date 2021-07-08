import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictWhiteLabelApiComponent } from './predict-white-label-api.component';

describe('PredictWhiteLabelApiComponent', () => {
  let component: PredictWhiteLabelApiComponent;
  let fixture: ComponentFixture<PredictWhiteLabelApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictWhiteLabelApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictWhiteLabelApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
