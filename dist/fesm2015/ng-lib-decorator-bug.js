import { __decorate, __metadata } from 'tslib';
import { Input, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';

function CustomDecorator() {
    console.log('Calling CustomDecorator');
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() { return 'success'; },
            set(_value) { },
            enumerable: true,
            configurable: true,
        });
    };
}

let TestComponent = class TestComponent {
};
__decorate([
    Input(), CustomDecorator(),
    __metadata("design:type", Object)
], TestComponent.prototype, "value", void 0);
TestComponent = __decorate([
    Component({
        selector: `my-test`,
        template: '{{ value }}',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TestComponent);

let TestModule = class TestModule {
};
TestModule = __decorate([
    NgModule({
        declarations: [
            TestComponent,
        ],
        providers: [],
        exports: [
            TestComponent,
        ],
    })
], TestModule);

export { TestModule, TestComponent as ɵa, CustomDecorator as ɵb };
//# sourceMappingURL=ng-lib-decorator-bug.js.map
