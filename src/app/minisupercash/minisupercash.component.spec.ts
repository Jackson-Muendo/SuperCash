import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisupercashComponent } from './minisupercash.component';

describe('MinisupercashComponent', () => {
  let component: MinisupercashComponent;
  let fixture: ComponentFixture<MinisupercashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisupercashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinisupercashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
