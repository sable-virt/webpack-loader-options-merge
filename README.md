# webpack-loader-options-merge

Multiple LoaderOptionsPlugin merge to SingleOptions.

for webpack2

## Usage

```
var loaderOptionsMerge = require('webpack-loader-options-merge');
loaderOptionsMerge(webpackConfigObject);
webpack(webpackConfigObject);
```

from
```
{
    plugins: [
        new webpack.LoaderOptionsPlugin({
           options: {
            a: 'a value'
           }
        }),
        ...
        new webpack.LoaderOptionsPlugin({
           options: {
            b: 'b value'
           }
        })
    ]
}
```

to

```
{
    plugins: [
        new webpack.LoaderOptionsPlugin({
           options: {
            a: 'a value',
            b: 'b value'
           }
        })
    ]
}
```
