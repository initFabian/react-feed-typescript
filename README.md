# React Houston Meetup - TypeScript Meetup

## Installation

```bash
$ yarn # or npm install
```

## Usage

```bash
$ yarn dev # or npm run dev
```

## Add TypeScript

We first need to install a few new dependencies.

```bash
yarn add awesome-typescript-loader typescript -D
```

```bash
yarn add @types/react @types/react-bootstrap @types/react-dom @types/react-redux @types/redux -D
```

Next let's clean up our `package.json` by removing unneeded packages and files(`.babelrc`).

```bash
yarn remove babel-core babel-loader babel-plugin-add-module-exports babel-plugin-transform-decorators-legacy babel-preset-es2015 babel-preset-react babel-preset-stage-1 react-hot-loader
```

Next we need to add a [tsconfig.json](link/to/documentation) document to configure our TypeScript.

```js
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "./public/",
    "sourceMap": true,
    "module": "es6",
    "lib": ["es6", "dom"],
    "target": "es5",
    "jsx": "react",
    "moduleResolution": "node",
    "allowJs": true,
    "strict": true,
    "noImplicitThis": false
  },
  "include": ["./src/**/*"]
}
```

Lastly we need to update our `webpack.config.js` to handle TypeScript.

```js
module.exports = {

  ...

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // add '.ts', and 'tsx'
  },

  ...

  rules: [{
      enforce: 'pre',
      test: /\.(tsx?|jsx?)$/, // [ .jsx$ ] =>  (tsx?|jsx?)
      exclude: /node_modules/,
      use: ['awesome-typescript-loader'] // 'react-hot-loader', 'babel-loader' => 'awesome-typescript-loader'
    },
    {
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]'
    }
  ]
}
```
