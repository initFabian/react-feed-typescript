# Demos

## Demo: Adding TypeScript to project

### Demo 1: rename a `.jsx` file

Rename `src/App.jsx` to `src/App.tsx` and address any ts errors. This demonstrates that `.js` and `.jsx` files can import TypeScript files.

### Demo 2: `any` and `@ts-ignore` are not your friends!

Rename `src/index.jsx` to `src/index.tsx`, update `webpack.config.js`, and finally address any ts errors by using `any` and `@ts-ignore`. If you see the type `any` in a TypeScript project, you should have a **"Yuck!"** reaction. And an even worse reaction if you see `@ts-ignore`.

### Demo 3: Convert an entire subdirectory(Error) to TypeScript

I would start with files like `action.js` since you know its pure JavaScript(no JSX/React/Redux). Use this example to reference `noUnusedParameters` in [TypeScript compiler-options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) Here's where we'll start declaring types within their individual files, but in the next section we'll move these types to a declaration file.

### Demo 4: Declaration files

Any types that you want to be accessable at the global level, meaning, you don't have to import interfaces into files. You can places these in a declaration file with the following format `<filename>.d.ts`. I've placed these declaration files in a directory called `typings/`. Be sure to read [TypeScript's documentation over Declaration Files.](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

### Demo 5: Convert entire project to TypeScript

### Demo 6: Replace post type(`'All' | 'Text' | 'Video' | 'Image'`) with [`enum`](http://www.typescriptlang.org/docs/handbook/enums.html)
