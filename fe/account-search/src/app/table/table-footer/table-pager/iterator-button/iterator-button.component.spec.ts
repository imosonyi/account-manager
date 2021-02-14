import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratorButtonComponent } from './iterator-button.component';

describe('IteratorButtonComponent', () => {
  let component: IteratorButtonComponent;
  let fixture: ComponentFixture<IteratorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteratorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteratorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
