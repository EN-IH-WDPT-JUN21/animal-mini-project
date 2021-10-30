import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from '../animal-service.service';
import { Animal } from '../models/animal.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animalList: Array<Animal>;

  constructor(private service: AnimalServiceService) { 
    this.animalList = [];


    // this.animalList = service.getAllAnimals();
    this.service.searchAnimals(0, 5).subscribe(dataResult => {
      console.log("API Test", dataResult);
      this.animalList = dataResult;
    },
    errors => {
      console.log('Error searchAnimals');
      console.error(errors);
    });

  }

  ngOnInit(): void {
  }

}
