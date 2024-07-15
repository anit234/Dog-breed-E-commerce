import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-dogs',
  templateUrl: './all-dogs.component.html',
  styleUrls: ['./all-dogs.component.scss']
})
export class AllDogsComponent {
  // @Input() dogData: {
  //   breed: string,
  //   breedType: string,
  //   origin: string,
  //   popularity: string,
  //   temperament: string[],
  //   hypoallergenic: string,
  //   intelligence: number,
  //   photo: string,
  //   is_available: boolean,
  //   number: number
  // } = {
  //     breed: '',
  //     breedType: '',
  //     origin: '',
  //     popularity: '',
  //     temperament: [],
  //     hypoallergenic: '',
  //     intelligence: 0,
  //     photo: '',
  //     is_available: false,
  //     number: 0
  //   };


  @Input() dogData: any = []

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  onIconClick() {
    alert('Hello')
  }

}
