/**
 * @sources:
 * - https://www.aleksandrhovhannisyan.com/blog/perfect-font-fallbacks/
 * - https://seek-oss.github.io/capsize/
 */

import { createFontStack } from '@capsizecss/core';
import nunito from '@capsizecss/metrics/nunito';
import arial from '@capsizecss/metrics/arial';
import helveticaNeue from '@capsizecss/metrics/helveticaNeue';
import helvetica from '@capsizecss/metrics/helvetica';

// Add your font here: 1st font is core, next font should be system fonts
const stack = createFontStack(
    [
        nunito,
        arial,
        helveticaNeue,
        helvetica
    ])

console.log(stack.fontFaces);