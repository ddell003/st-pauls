import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSermonsComponent } from './facebook-sermons.component';

describe('FacebookSermonsComponent', () => {
  let component: FacebookSermonsComponent;
  let fixture: ComponentFixture<FacebookSermonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookSermonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookSermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
