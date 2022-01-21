import { Component, OnInit } from '@angular/core';
import { Vehiclepart } from '../models/vehiclepart';
import { VehiclePartService } from '../vehicle-part.service';

@Component({
  selector: 'app-vehicle-part',
  templateUrl: './vehicle-part.component.html',
  styleUrls: ['./vehicle-part.component.css'],
})
export class VehiclePartsComponent {
  vp: Vehiclepart = new Vehiclepart();

  constructor(private vehicle_part: VehiclePartService) {}

  save(): void {
    console.log(this.vp);
    this.vehicle_part.postVehicleParts(this.vp).subscribe((resp) => {
      console.log('success');
    });
  }
}
