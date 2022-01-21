import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiclepart } from './models/vehiclepart';
//import { VehiclePartsComponent } from './vehicle-part/vehicle-part.component';

@Injectable({
  providedIn: 'root',
})
export class VehiclePartService {
  //inject into constructor what is  use
  constructor(private http: HttpClient) {}

  getVehicleParts() {
    return this.http.get<any[]>('http://localhost:3000/api/vehicleparts');
  }

  postVehicleParts(vp: Vehiclepart) {
    return this.http.post<any>('http://localhost:3000/api/vehiclepart', vp);
  }
}
