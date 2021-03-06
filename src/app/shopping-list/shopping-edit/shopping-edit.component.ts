import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.ingredient.emit(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    ));
  }

  onDelete() {

  }

  onClear() {

  }
}
