import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => IputFieldDirective),
	multi: true
  };


@Directive({
	selector: 'app-iput-field1',
	host: {'(blur)': 'onTouched($event)'},
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class IputFieldDirective  implements ControlValueAccessor {

	// The internal data model
	private _value: any = '';

	public onChange: any = (_) => { /*Empty*/ }
	public onTouched: any = () => { /*Empty*/ }

	get value(): any { return this._value; };

	set value(v: any) {
	  if (v !== this._value) {
		this._value = v;
		this.onChange(v);
	  }
	}

	writeValue(value: any) {
	  this._value = value;
	}

	registerOnChange(fn: any) {
	  this.onChange = fn;
	}

	registerOnTouched(fn: any) {
		console.log ("dsdf");
	  this.onTouched = fn;
	}
  }
