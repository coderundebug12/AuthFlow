import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAAComponent } from './comp-aa.component';

describe('CompAAComponent', () => {
  let component: CompAAComponent;
  let fixture: ComponentFixture<CompAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
