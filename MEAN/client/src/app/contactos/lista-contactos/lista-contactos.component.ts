import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  contactos: Contacto[];
  selectedContacto: Contacto;

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
    this.contactoService
    .getContactos()
    .then((contactos: Contacto[]) => {
      this.contactos = contactos.map((contacto) => {
        return contacto;
      });
    });
  }

  selectContacto(contacto: Contacto) {
    this.selectedContacto = contacto;
  }

}
