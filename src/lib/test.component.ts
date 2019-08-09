import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CustomDecorator } from './custom-decorator';

@Component({
	selector: `my-test`,
	template: '{{ value }}',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
	@Input() @CustomDecorator() value: any;
}
