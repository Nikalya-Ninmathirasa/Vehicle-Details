import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { VehiclePartService } from './vehicle-part.service';
import { VehiclePartsComponent } from './vehicle-part/vehicle-part.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  parts: any[] = [];
  bsModalRef?: BsModalRef;
  //1st run
  constructor(
    private router: ActivatedRoute,
    private vpService: VehiclePartService,
    private modalService: BsModalService
  ) { }

  //2nd run
  ngOnInit(): void {
    this.vpService.getVehicleParts().subscribe((resp) => {
      this.parts = resp;
    });
  }


  openCreatePartComponent() {
    
    this.bsModalRef = this.modalService.show(VehiclePartsComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
    
  }
}
