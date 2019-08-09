export function CustomDecorator() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxpYi1kZWNvcmF0b3ItYnVnLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jdXN0b20tZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxlQUFlO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUV0QyxPQUFPLFVBQVUsTUFBVyxFQUFFLEdBQVc7UUFDeEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2xDLEdBQUcsS0FBSyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ2YsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBDdXN0b21EZWNvcmF0b3IoKSB7XG5cdGNvbnNvbGUubG9nKCdDYWxsaW5nIEN1c3RvbURlY29yYXRvcicpXG5cblx0cmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcblx0XHRcdGdldCgpIHsgcmV0dXJuICdzdWNjZXNzJzsgfSxcblx0XHRcdHNldChfdmFsdWUpIHsgfSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fSk7XG5cdH07XG59XG4iXX0=