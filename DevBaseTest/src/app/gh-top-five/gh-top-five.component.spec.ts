import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhTopFiveComponent } from './gh-top-five.component';

describe('GhTopFiveComponent', () => {
  let component: GhTopFiveComponent;
  let fixture: ComponentFixture<GhTopFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhTopFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhTopFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
