import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCanalComponent } from './edit-canal.component';

describe('EditCanalComponent', () => {
  let component: EditCanalComponent;
  let fixture: ComponentFixture<EditCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCanalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
