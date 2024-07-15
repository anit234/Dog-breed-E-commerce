import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  selectedFilteredRadioButton = 'all';
  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() outOfStock: number = 0;
  @Output() selectedFilterRadioButtonChange = new EventEmitter<string>()


  onSelectedRadioButtonChange() {
    this.selectedFilterRadioButtonChange.emit(this.selectedFilteredRadioButton)
  }

}
