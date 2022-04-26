import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { TicketReservation } from './ticketReservation';

@Injectable({
  providedIn: 'root'
})
export class TicketReservationDetailsService {
  [x: string]: any;
  user:any;
  baseUrl='http://localhost:8480'
  constructor(private http:HttpClient) { }

  getTicketDetails() : Observable<TicketReservation[]>{
    return this.http.get<TicketReservation[]>(`${this.baseUrl}/reserve/getAllTicketsDetails`)
  }

  bookTicket(user: User): Observable<Object>
  {
      return this.http.post(`http://localhost:8480/reserve/addTicket`,user);

  }

  deleteTicket(id:String): Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/reserve/del/${id}`,{responseType:'text'});
  }

  
  
}
