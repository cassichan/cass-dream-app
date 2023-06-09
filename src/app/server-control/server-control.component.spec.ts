import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerControlComponent } from './server-control.component';

describe('ServerControlComponent', () => {
  let component: ServerControlComponent;
  let fixture: ComponentFixture<ServerControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerControlComponent]
    });
    fixture = TestBed.createComponent(ServerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
