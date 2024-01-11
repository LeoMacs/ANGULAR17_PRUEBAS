import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCanalesComponent } from './list-canales.component';

describe('ListCanalesComponent', () => {
  let component: ListCanalesComponent;
  let fixture: ComponentFixture<ListCanalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCanalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
