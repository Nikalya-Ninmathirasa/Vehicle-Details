import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Vehiclepart } from '../models/vehiclepart';
import { VehiclePartService } from '../vehicle-part.service';

@Component({
  selector: 'app-vehicle-part',
  templateUrl: './vehicle-part.component.html',
  styleUrls: ['./vehicle-part.component.css'],
})
export class VehiclePartsComponent {
  vp: Vehiclepart = new Vehiclepart();
  public onClose: Subject<boolean>;

  constructor(private vehicle_part: VehiclePartService, public bsModalRef: BsModalRef) {
    this.onClose = new Subject();
  }

  save(): void {
    console.log(this.vp);
    this.vehicle_part.postVehicleParts(this.vp).subscribe((resp) => {
      console.log('success');
      this.bsModalRef.hide();
      this.onClose.next(true);
    });
  }

  close(){
    this.bsModalRef.hide();
  }
}
