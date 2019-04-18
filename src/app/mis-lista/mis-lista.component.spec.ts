import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisListaComponent } from './mis-lista.component';

describe('MisListaComponent', () => {
  let component: MisListaComponent;
  let fixture: ComponentFixture<MisListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
