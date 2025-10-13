import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAComponent } from './comp-a.component';

describe('CompAComponent', () => {
  let component: CompAComponent;
  let fixture: ComponentFixture<CompAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompAComponent]
    });
    fixture = TestBed.createComponent(CompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
