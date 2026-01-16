'use strict';

goog.provide('Blockly.Python.matrixonerow');

goog.require('Blockly.Python');


Blockly.Python['matrixonerow'] = function(block) {
//   console.log(block.getFieldValue('MATRIX_CUSTOM'))
  return block.getFieldValue('MATRIX_ONEROW')
};
