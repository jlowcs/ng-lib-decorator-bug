export function CustomDecorator() {
	console.log('Calling CustomDecorator')

	return function (target: any, key: string) {
		Object.defineProperty(target, key, {
			get() { return 'success'; },
			set(_value) { },
			enumerable: true,
			configurable: true,
		});
	};
}
