import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  usuario: string = "";
  nombre: string = "";
  apellido: string = "";
  educacion: string = "";
  fechaNacimiento: string = "";

  @ViewChild('nombreInput', { read: ElementRef }) nombreInput!: ElementRef;
  @ViewChild('apellidoInput', { read: ElementRef }) apellidoInput!: ElementRef;
  @ViewChild('tituloHome', { read: ElementRef }) tituloHome!: ElementRef;
  @ViewChild('cardPerfil', { read: ElementRef }) cardPerfil!: ElementRef;

  constructor(
    private router: Router,
    private animationCtrl: AnimationController
  ) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state && state['usuario']) {
      this.usuario = state['usuario'];
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.animarTitulo();
      this.animarCard();
    }, 500);
  }

  // ANIMACIÓN 
  animarTitulo() {
    if (this.tituloHome) {
      const animation = this.animationCtrl.create()
      .addElement(this.tituloHome.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0', '1');

      animation.play();
    }
  }

  // ANIMACIÓN 
  animarCard() {
    if (this.cardPerfil) {
      const animation = this.animationCtrl.create()
      .addElement(this.cardPerfil.nativeElement)
      .duration(800)
      .fromTo('transform', 'scale(0.8)', 'scale(1)')
      .fromTo('opacity', '0', '1');

      animation.play();
    }
  }

  //  LIMPIAR FORMULARIO
  limpiar() {
    this.nombre = "";
    this.apellido = "";
    this.educacion = "";
    this.fechaNacimiento = "";
  }

  // MOSTRAR DATOS
  mostrar() {
    if (this.nombre && this.apellido) {
      const mensaje = `Datos ingresados:\nNombre: ${this.nombre}\nApellido: ${this.apellido}\nEducación: ${this.educacion}\nFecha Nacimiento: ${this.fechaNacimiento}`;
      alert(mensaje);
    } else {
      alert('Por favor complete al menos nombre y apellido');
    }
  }
}