import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListingsComponent } from './admin-listings.component';

describe('AdminListingsComponent', () => {
  let component: AdminListingsComponent;
  let fixture: ComponentFixture<AdminListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
