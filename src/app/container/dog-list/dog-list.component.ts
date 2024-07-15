import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
  dogBreeds = [{
    "breed": "Labrador Retriever",
    "breedType": "Purebred",
    "origin": "Canada,USA",
    "popularity": "1",
    "temperament": ["Cheerful", "Gentle", "Friendly", "Intelligent"],
    "hypoallergenic": "No",
    "intelligence": 7,
    "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    "is_available": false,
    "number": 2
  }, {
    "breed": "German Shepard",
    "breedType": "Purebred",
    "origin": "Germany",
    "popularity": "2",
    "temperament": ["Corageous", "Intelligent", "Loyal", "Watchful"],
    "hypoallergenic": "No",
    "intelligence": 3,
    "photo": "https://images.unsplash.com/photo-1558929996-da64ba858215?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": true,
    "number": 4
  }, {
    "breed": "Golden Retriever",
    "breedType": "Purebred",
    "origin": "United Kingdom",
    "popularity": "3",
    "temperament": ["Intelligent", "Kind", "Friendly", "Confident"],
    "hypoallergenic": "No",
    "intelligence": 4,
    "photo": "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": true,
    "number": 3
  }, {
    "breed": "French Bulldog",
    "breedType": "Purebred",
    "origin": "France, UK",
    "popularity": "4",
    "temperament": ["Playful", "Sociable", "Friendly", "Lively", "Patient"],
    "hypoallergenic": "No",
    "intelligence": 58,
    "photo": "https://media.istockphoto.com/id/1675345470/photo/an-adorable-beagle-dog-scratching-body-outdoor-on-the-grass-field.jpg?s=1024x1024&w=is&k=20&c=Po44Gx-3tyQvguHPw1JHTuds6vFs8tr262MmTXIbG9I=",
    "is_available": true,
    "number": 6
  }, {
    "breed": "Bulldog",
    "breedType": "Purebred",
    "origin": "United Kingdom",
    "popularity": "5",
    "temperament": ["Friendly", "Docile", "Willful", "Gregarious"],
    "hypoallergenic": "No",
    "intelligence": 77,
    "photo": "https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": false,
    "number": 0
  }, {
    "breed": "Beagle",
    "breedType": "Purebred",
    "origin": "United Kingdom",
    "popularity": "6",
    "temperament": ["Gentle", "Intelligent", "Even Tempered", "Determined"],
    "hypoallergenic": "No",
    "intelligence": 72,
    "photo": "https://images.unsplash.com/photo-1557146119-0ed814ed8367?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": false,
    "number": 3
  }, {
    "breed": "Poodle",
    "breedType": "Purebred",
    "origin": "Germany, France",
    "popularity": "7",
    "temperament": ["Intelligent", "Faithful", "Trainable", "Instinctual"],
    "hypoallergenic": "Yes",
    "intelligence": 2,
    "photo": "https://images.unsplash.com/photo-1601275209291-bbf8b058bb2b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": true,
    "number": 7
  }, {
    "breed": "Rottweiler",
    "breedType": "Purebred",
    "origin": "Germany",
    "popularity": "8",
    "temperament": ["Intelligent", "Corageous", "Fearless", "Confident"],
    "hypoallergenic": "No",
    "intelligence": 9,
    "photo": "https://images.unsplash.com/photo-1634154810931-b38d33b32b9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": true,
    "number": 1
  }, {
    "breed": "German Shorthaired Pointer",
    "breedType": "Purebred",
    "origin": "Germany",
    "popularity": "9",
    "temperament": ["Intelligent", "Trainable", "Boisterous", "Cooperative"],
    "hypoallergenic": "No",
    "intelligence": 9,
    "photo": "https://images.unsplash.com/photo-1601275209203-b5c87a572f5b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": true,
    "number": 4
  }, {
    "breed": "Yorkshire Terrier",
    "breedType": "Purebred",
    "origin": "United Kingdom",
    "popularity": "10",
    "temperament": ["Independent", "Intelligent", "Corageous", "Confident"],
    "hypoallergenic": "Yes",
    "intelligence": 27,
    "photo": "https://images.unsplash.com/photo-1619999311576-76fc4e1089c6?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": true,
    "number": 0
  }, {
    "breed": "Boxer",
    "breedType": "Purebred",
    "origin": "Germany",
    "popularity": "11",
    "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
    "hypoallergenic": "No",
    "intelligence": 48,
    "photo": "https://images.unsplash.com/photo-1619999882198-6e88694f1e3a?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": true,
    "number": 0
  },
  {
    "breed": "Boxer",
    "breedType": "Purebred",
    "origin": "Germany",
    "popularity": "11",
    "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
    "hypoallergenic": "No",
    "intelligence": 48,
    "photo": "https://images.unsplash.com/photo-1619999882198-6e88694f1e3a?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "is_available": true,
    "number": 0
  }
  ]

  filteredDogBreeds = this.dogBreeds;
  totalDogCount = this.dogBreeds.length;
  availableDogCount = this.dogBreeds.filter((x) => x.is_available).length
  notAvailable = this.dogBreeds.filter((x) => !x.is_available).length;
  selectedFilteredRadioButton = 'all'

  @Input() searchedTextFromParent: string = ''

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchedTextFromParent']) {
      this.filterDogs();
    }
  }

  onFilterchange(e: any) {
    this.selectedFilteredRadioButton = e;
    this.filterDogs()
  }


  filterDogs() {
    let tempDogs = this.dogBreeds
    // for radio button
    if (this.selectedFilteredRadioButton === 'all') {
      tempDogs = this.dogBreeds;
    } else if (this.selectedFilteredRadioButton === 'true') {
      tempDogs = this.filteredDogBreeds = this.dogBreeds.filter((dog) => dog.is_available);
    } else if (this.selectedFilteredRadioButton === 'false') {
      tempDogs = this.filteredDogBreeds = this.dogBreeds.filter((dog) => !dog.is_available);
    }
    // for search functionality
    if (this.searchedTextFromParent) {
      this.filteredDogBreeds = tempDogs.filter((dog: any) => dog.breed.toLowerCase().includes(this.searchedTextFromParent.toLowerCase()));
    } else {
      this.filteredDogBreeds = tempDogs;
    }
  }



}
