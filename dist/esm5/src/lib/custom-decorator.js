export function CustomDecorator() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxpYi1kZWNvcmF0b3ItYnVnLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jdXN0b20tZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxlQUFlO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUV0QyxPQUFPLFVBQVUsTUFBVyxFQUFFLEdBQVc7UUFDeEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2xDLEdBQUcsZ0JBQUssT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEdBQUcsWUFBQyxNQUFNLElBQUksQ0FBQztZQUNmLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gQ3VzdG9tRGVjb3JhdG9yKCkge1xuXHRjb25zb2xlLmxvZygnQ2FsbGluZyBDdXN0b21EZWNvcmF0b3InKVxuXG5cdHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG5cdFx0XHRnZXQoKSB7IHJldHVybiAnc3VjY2Vzcyc7IH0sXG5cdFx0XHRzZXQoX3ZhbHVlKSB7IH0sXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdH0pO1xuXHR9O1xufVxuIl19