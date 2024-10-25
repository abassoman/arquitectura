import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendacionProductoPage } from './recomendacion-producto.page';

describe('RecomendacionProductoPage', () => {
  let component: RecomendacionProductoPage;
  let fixture: ComponentFixture<RecomendacionProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacionProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
