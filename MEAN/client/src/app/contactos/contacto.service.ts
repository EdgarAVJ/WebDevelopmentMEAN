import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private contactosUrl = 'http://localhost:3000/contactos';

  constructor(private http: Http) { }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  // get("http://localhost:3000/contactos")
  getContactos(): Promise<void | Contacto[]> {
    return this.http.get(this.contactosUrl)
                .toPromise()
                .then(response => response.json() as Contacto[])
                .catch(this.handleError);
  }
}
