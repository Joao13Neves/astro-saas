import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EsqueceuSenhaComponent } from './esqueceu-senha.component';

describe('EsqueceuSenhaComponent', () => {
  let component: EsqueceuSenhaComponent;
  let fixture: ComponentFixture<EsqueceuSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsqueceuSenhaComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EsqueceuSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
