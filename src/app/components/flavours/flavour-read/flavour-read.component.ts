import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Flavour } from '../../../model/Flavour';
import { FlavourService } from '../../../services/flavour.service';

@Component({
  selector: 'app-flavour-read',
  templateUrl: './flavour-read.component.html',
  styleUrls: ['./flavour-read.component.css']
})
export class FlavourReadComponent implements OnInit {

  flavours: Flavour[] = [];
  deleteMsg!: string;
  searchTerm!: string;
  @Output() onDeleteFlavour: EventEmitter<Flavour> = new EventEmitter();

  constructor(private service: FlavourService) { }

  ngOnInit(): void {
    this.getAllFlavours();
  }

  clearSearch(){
    this.searchTerm = "";
  }

  onDelete(id: any) {
    this.service.deleteFlavour(id).subscribe((res)=>{
      console.log(res,'deleteCrisp');
      this.deleteMsg = "Deletion done!";

      this.getAllFlavours();
    });
  }

  getAllFlavours(){
    this.service.getFlavours().subscribe((flavours) => (this.flavours = flavours));
  }

}
