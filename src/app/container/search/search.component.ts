import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchedText: string = ''
  @Output() handleSearchedText = new EventEmitter<string>()

  // handleChange() {
  //   this.handleSearchedText.emit(this.searchedText)
  // }

  updateSearchText(inputEl: HTMLInputElement) {
    this.searchedText = inputEl.value;
    this.handleSearchedText.emit(this.searchedText)
  }


}
