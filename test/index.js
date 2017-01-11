'use strict';
const assert = require('power-assert');
const webpack = require('webpack');
const loaderOptionsMerge = require('../index');

describe('install', function () {
  let options = {};
  beforeEach(() => {
    options = {
      plugins: [
        new webpack.LoaderOptionsPlugin({
          options: {
            a: 'a value'
          }
        }),
        new webpack.LoaderOptionsPlugin({
          options: {
            b: 'b value',
            ab: {
              name: 'name',
              test: [1,{name: 'a'}]
            }
          }
        })
      ]
    }
  });
  it('init', () => {
    loaderOptionsMerge(options);
    assert.deepEqual(options.plugins[0].options.options,{
      a: 'a value',
      b: 'b value',
      ab: {
        name: 'name',
        test: [1,{name: 'a'}]
      }
    });

    assert.deepEqual(options.plugins[0].options.options,{
      a: 'a value',
      b: 'b value',
      ab: {
        name: 'name',
        test: [1,{name: 'a'}]
      }
    });
  });
  it('length', () => {
    loaderOptionsMerge(options);
    assert(options.plugins.length === 1);
  });
  it('test', () => {
    loaderOptionsMerge(options);
    assert(options.plugins[0].options.test.test());
  });
});