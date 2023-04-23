import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteslinkComponent } from './routeslink.component';

describe('RouteslinkComponent', () => {
  let component: RouteslinkComponent;
  let fixture: ComponentFixture<RouteslinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteslinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
