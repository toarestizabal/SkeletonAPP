import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) {}

  ingresar() {
    // Validaciones simples
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^\w+$/.test(this.usuario)) {
      if (/^\d{4}$/.test(this.clave)) {
        const extras: NavigationExtras = {
          state: { usuario: this.usuario }
        };
        this.router.navigate(['/home'], extras);
      } else {
        alert('La clave debe tener 4 dígitos numéricos');
      }
    } else {
      alert('El usuario debe tener entre 3 y 8 caracteres alfanuméricos');
    }
  }
}

