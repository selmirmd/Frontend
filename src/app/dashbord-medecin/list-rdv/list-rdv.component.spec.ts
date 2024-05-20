import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRDVComponent } from './list-rdv.component';

describe('ListRDVComponent', () => {
  let component: ListRDVComponent;
  let fixture: ComponentFixture<ListRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRDVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
