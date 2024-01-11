import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCanalComponent } from './view-canal.component';

describe('ViewCanalComponent', () => {
  let component: ViewCanalComponent;
  let fixture: ComponentFixture<ViewCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCanalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
