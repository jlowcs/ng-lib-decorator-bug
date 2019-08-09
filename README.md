# Angular 8.2 custom decorator bug ([related github issue](https://github.com/angular/angular/issues/32074))

When running in prod mode, with a ES2015 target, any custom decorator that is used on an input in a library used by the app will simply be ignored.

This repository contains:
- a library (`src` folder) that provides a `my-test` component that used a `CustomDecorator` decorator on its `value` input, and displays the `value`
- a test app (`test-app` folder) that uses `my-test` by passing it a `value`

`CustomDecorator` simply overrides the input by making sure it always has the value `success`. It also console.log `Calling CustomDecorator` when called.

This code should then always display `success`
```html
<my-test [value]="16"></my-test>
```

In dev mode, with a ES2015 target, `success` is displayed, and `Calling CustomDecorator` is displayed in the console.

In prod mode, with a ES5 target, `success` is displayed, and `Calling CustomDecorator` is displayed in the console.

But, in prod mode, with a ES2015 target, `16` is currently displayed, and `Calling CustomDecorator` is **not** displayed in the console.

Using `ng serve` or `ng build` doesn't seem to matter.

The bug is not present in Angular 8.0.x or 8.1.x.

## rebuild the library

```bash
npm run build-lib # or npm run watch
```

## reproduce the bug in prod mode (ES2015)

```bash
npm start -- --prod
```

Then open http://localhost:3000

## no bug in dev mode (ES2015)

```bash
npm start
```

Then open http://localhost:3000

## no bug in prod mode (ES5)

```bash
npm run start-es5 -- --prod
```

Then open http://localhost:3000
