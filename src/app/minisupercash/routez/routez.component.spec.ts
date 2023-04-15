import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutezComponent } from './routez.component';

describe('RoutezComponent', () => {
  let component: RoutezComponent;
  let fixture: ComponentFixture<RoutezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
