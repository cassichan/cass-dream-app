import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerContainmentComponent } from './server-containment.component';

describe('ServerContainmentComponent', () => {
  let component: ServerContainmentComponent;
  let fixture: ComponentFixture<ServerContainmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerContainmentComponent]
    });
    fixture = TestBed.createComponent(ServerContainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
