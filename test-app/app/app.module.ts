import { TestModule } from 'ng-lib-decorator-bug';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		TestModule,
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule { }
