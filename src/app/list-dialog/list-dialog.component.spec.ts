import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDialogComponent } from './list-dialog.component';

describe('ListDialogComponent', () => {
  let component: ListDialogComponent;
  let fixture: ComponentFixture<ListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
