import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.FormComponent } from './home.form.component';

describe('Home.FormComponent', () => {
  let component: Home.FormComponent;
  let fixture: ComponentFixture<Home.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
