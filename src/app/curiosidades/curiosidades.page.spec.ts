import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosidadesPage } from './curiosidades.page';

describe('CuriosidadesPage', () => {
  let component: CuriosidadesPage;
  let fixture: ComponentFixture<CuriosidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
