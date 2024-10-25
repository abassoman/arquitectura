import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVentaPage } from './listar-venta.page';

describe('ListarVentaPage', () => {
  let component: ListarVentaPage;
  let fixture: ComponentFixture<ListarVentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
