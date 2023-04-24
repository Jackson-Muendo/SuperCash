import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrouteComponent } from './mainroute.component';

describe('MainrouteComponent', () => {
  let component: MainrouteComponent;
  let fixture: ComponentFixture<MainrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
