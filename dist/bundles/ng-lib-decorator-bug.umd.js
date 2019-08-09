(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-lib-decorator-bug', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ng-lib-decorator-bug'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

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
            core.Input(), CustomDecorator(),
            __metadata("design:type", Object)
        ], TestComponent.prototype, "value", void 0);
        TestComponent = __decorate([
            core.Component({
                selector: "my-test",
                template: '{{ value }}',
                changeDetection: core.ChangeDetectionStrategy.OnPush
            })
        ], TestComponent);
        return TestComponent;
    }());

    var TestModule = /** @class */ (function () {
        function TestModule() {
        }
        TestModule = __decorate([
            core.NgModule({
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

    exports.TestModule = TestModule;
    exports.ɵa = TestComponent;
    exports.ɵb = CustomDecorator;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-lib-decorator-bug.umd.js.map
