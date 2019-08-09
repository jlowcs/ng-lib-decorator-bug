import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomDecorator } from './custom-decorator';
let TestComponent = class TestComponent {
};
tslib_1.__decorate([
    Input(), CustomDecorator(),
    tslib_1.__metadata("design:type", Object)
], TestComponent.prototype, "value", void 0);
TestComponent = tslib_1.__decorate([
    Component({
        selector: `my-test`,
        template: '{{ value }}',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TestComponent);
export { TestComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1saWItZGVjb3JhdG9yLWJ1Zy8iLCJzb3VyY2VzIjpbInNyYy9saWIvdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9yRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0NBRXpCLENBQUE7QUFENEI7SUFBM0IsS0FBSyxFQUFFLEVBQUUsZUFBZSxFQUFFOzs0Q0FBWTtBQUQzQixhQUFhO0lBTHpCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQy9DLENBQUM7R0FDVyxhQUFhLENBRXpCO1NBRlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1c3RvbURlY29yYXRvciB9IGZyb20gJy4vY3VzdG9tLWRlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogYG15LXRlc3RgLFxuXHR0ZW1wbGF0ZTogJ3t7IHZhbHVlIH19Jyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RDb21wb25lbnQge1xuXHRASW5wdXQoKSBAQ3VzdG9tRGVjb3JhdG9yKCkgdmFsdWU6IGFueTtcbn1cbiJdfQ==