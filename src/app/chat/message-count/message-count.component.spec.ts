import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCountComponent } from './message-count.component';

describe('MessageCountComponent', () => {
  let component: MessageCountComponent;
  let fixture: ComponentFixture<MessageCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
