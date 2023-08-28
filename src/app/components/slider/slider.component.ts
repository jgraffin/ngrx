import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  increaseSize,
  decreaseSize,
  sliderSize,
} from 'src/app/dialogs/store/dialogs.actions';
import { SizeState } from 'src/app/dialogs/store/dialogs.state';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @ViewChild('result') result: any;
  @ViewChild('valueSize') valueSize: any;

  constructor(private store: Store<{ sizeReducer: SizeState }>) {}

  size$ = this.store.select('sizeReducer').pipe(map((e) => e.fontSize));

  inputSize(event: any) {
    let size = {
      fontSize: Number(event.target.value),
    };

    this.store.dispatch(sliderSize(size));
  }

  sliderSize() {
    let size = {
      fontSize: Number(this.result.nativeElement.innerText),
    };

    this.store.dispatch(sliderSize(size));
  }

  increaseSize() {
    if (Number(this.valueSize.nativeElement.innerText) > 99) {
      return;
    }

    this.store.dispatch(increaseSize());
  }

  decreaseSize() {
    this.store.dispatch(decreaseSize());
  }
}
