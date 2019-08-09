import { __decorate, __metadata } from 'tslib';
import { Input, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';

function CustomDecorator() {
    console.log('Calling CustomDecorator');
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: function () { return 'success'; },
            set: function (_value) { },
            enumerable: true,
            configurable: true,
        });
    };
}

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    __decorate([
        Input(), CustomDecorator(),
        __metadata("design:type", Object)
    ], TestComponent.prototype, "value", void 0);
    TestComponent = __decorate([
        Component({
            selector: "my-test",
            template: '{{ value }}',
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TestComponent);
    return TestComponent;
}());

var TestModule = /** @class */ (function () {
    function TestModule() {
    }
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
    return TestModule;
}());

export { TestModule, TestComponent as ɵa, CustomDecorator as ɵb };
//# sourceMappingURL=ng-lib-decorator-bug.js.map
