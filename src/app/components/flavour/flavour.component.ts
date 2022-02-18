import { Component, OnInit } from '@angular/core';
import { Flavour } from '../../model/Flavour';
import { FlavourService } from '../../services/flavour.service';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.css']
})

export class FlavourComponent implements OnInit {

  flavours: Flavour[] = [];

  constructor(private flavourService: FlavourService) { 
  }

  ngOnInit(): void {
    this.flavourService.getFlavours().subscribe((flavours) => (this.flavours = flavours));
  }

  addFlavour(flavour: Flavour) {
    this.flavourService.addFlavour(flavour).subscribe((flavour) => this.flavours.push(flavour));
  }

}
