import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomDecorator } from './custom-decorator';
var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    tslib_1.__decorate([
        Input(), CustomDecorator(),
        tslib_1.__metadata("design:type", Object)
    ], TestComponent.prototype, "value", void 0);
    TestComponent = tslib_1.__decorate([
        Component({
            selector: "my-test",
            template: '{{ value }}',
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TestComponent);
    return TestComponent;
}());
export { TestComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1saWItZGVjb3JhdG9yLWJ1Zy8iLCJzb3VyY2VzIjpbInNyYy9saWIvdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9yRDtJQUFBO0lBRUEsQ0FBQztJQUQ0QjtRQUEzQixLQUFLLEVBQUUsRUFBRSxlQUFlLEVBQUU7O2dEQUFZO0lBRDNCLGFBQWE7UUFMekIsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDL0MsQ0FBQztPQUNXLGFBQWEsQ0FFekI7SUFBRCxvQkFBQztDQUFBLEFBRkQsSUFFQztTQUZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDdXN0b21EZWNvcmF0b3IgfSBmcm9tICcuL2N1c3RvbS1kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IGBteS10ZXN0YCxcblx0dGVtcGxhdGU6ICd7eyB2YWx1ZSB9fScsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50IHtcblx0QElucHV0KCkgQEN1c3RvbURlY29yYXRvcigpIHZhbHVlOiBhbnk7XG59XG4iXX0=