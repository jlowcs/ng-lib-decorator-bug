import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';

@NgModule({
	declarations: [
		TestComponent,
	],
	providers: [],
	exports: [
		TestComponent,
	],
})
export class TestModule { }
