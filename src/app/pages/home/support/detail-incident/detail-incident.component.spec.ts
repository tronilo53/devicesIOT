import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIncidentComponent } from './detail-incident.component';

describe('DetailIncidentComponent', () => {
  let component: DetailIncidentComponent;
  let fixture: ComponentFixture<DetailIncidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailIncidentComponent]
    });
    fixture = TestBed.createComponent(DetailIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
