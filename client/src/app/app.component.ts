import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclePartService } from './vehicle-part.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  parts: any[] = [];

  //1st run
  constructor(
    private router: ActivatedRoute,
    private vpService: VehiclePartService
  ) {}

  //2nd run
  ngOnInit(): void {
    this.vpService.getVehicleParts().subscribe((resp) => {
      this.parts = resp;
    });
  }
}
