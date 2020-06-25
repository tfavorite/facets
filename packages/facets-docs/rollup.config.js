/*
 *  Copyright (c) 2020 Uncharted Software Inc.
 *  http://www.uncharted.software/
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy of
 *  this software and associated documentation files (the "Software"), to deal in
 *  the Software without restriction, including without limitation the rights to
 *  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 *  of the Software, and to permit persons to whom the Software is furnished to do
 *  so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */

'use strict';

const generator = require('../../rollup.config.generator');
const pkg = require('./package.json');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const config = generator(pkg, __dirname);

// config.push({
//     input: [
//         'monaco-editor/esm/vs/editor/editor.worker.js',
//         'monaco-editor/esm/vs/language/json/json.worker',
//         'monaco-editor/esm/vs/language/css/css.worker',
//         'monaco-editor/esm/vs/language/html/html.worker',
//         'monaco-editor/esm/vs/language/typescript/ts.worker',
//     ],
//     output: {
//         format: 'esm',
//         dir: 'dist/workers',
//     },
//     plugins: [
//         resolve(),
//         commonjs(),
//     ],
// });

module.exports = config;
