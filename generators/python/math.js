/**
 * Visual Blocks Language
 *
 * Copyright 2021 openblock.cc.
 * https://github.com/openblockcc/openblock-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

goog.provide('Blockly.Python.math');

goog.require('Blockly.Python');


Blockly.Python['math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  if (isNaN(code)) {
    code = 0;
  }
  // -4.abs() returns -4 in Dart due to strange order of operation choices.
  // -4 is actually an operator and a number.  Reflect this in the order.
  var order = code < 0 ?
    Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Python['math_integer'] = Blockly.Python['math_number'];
Blockly.Python['math_whole_number'] = Blockly.Python['math_number'];
Blockly.Python['math_positive_number'] = Blockly.Python['math_number'];
Blockly.Python['math_angle'] = Blockly.Python['math_number'];

Blockly.Python['math_int8_number'] = Blockly.Python['math_number'];
Blockly.Python['math_uint8_number'] = Blockly.Python['math_number'];
Blockly.Python['math_int9_number'] = Blockly.Python['math_number'];
Blockly.Python['math_uint10_number'] = Blockly.Python['math_number'];
Blockly.Python['math_int11_number'] = Blockly.Python['math_number'];
Blockly.Python['math_0to100_number'] = Blockly.Python['math_number'];
Blockly.Python['math_half_angle'] = Blockly.Python['math_number'];

Blockly.Python['numresD100D100'] = Blockly.Python['math_number'];


Blockly.Python['numres0D4'] = Blockly.Python['math_number'];
Blockly.Python['numres0D9'] = Blockly.Python['math_number'];
Blockly.Python['numres0D10'] = Blockly.Python['math_number'];
Blockly.Python['numres40D500'] = Blockly.Python['math_number'];
Blockly.Python['numres20D10000'] = Blockly.Python['math_number'];
Blockly.Python['numres0D255'] = Blockly.Python['math_number'];
Blockly.Python['numresD255D255'] = Blockly.Python['math_number'];
Blockly.Python['numres0D300'] = Blockly.Python['math_number'];
Blockly.Python['numresD100D100'] = Blockly.Python['math_number'];
Blockly.Python['numres0'] = Blockly.Python['math_number'];
Blockly.Python['numres1'] = Blockly.Python['math_number'];
Blockly.Python['numres0D100'] = Blockly.Python['math_number'];
Blockly.Python['numresD360D360'] = Blockly.Python['math_number'];
Blockly.Python['numresD32400D32400'] = Blockly.Python['math_number'];
Blockly.Python['numres0D65535'] = Blockly.Python['math_number'];

Blockly.Python['numresD1000D1000'] = Blockly.Python['math_number'];
Blockly.Python['numres0D180'] = Blockly.Python['math_number'];
Blockly.Python['numres0D99'] = Blockly.Python['math_number'];
Blockly.Python['numres1D12'] = Blockly.Python['math_number'];
Blockly.Python['numres1D31'] = Blockly.Python['math_number'];
Blockly.Python['numres0D23'] = Blockly.Python['math_number'];
Blockly.Python['numres0D59'] = Blockly.Python['math_number'];
Blockly.Python['numres0D1'] = Blockly.Python['math_number'];
Blockly.Python['numres0D1023'] = Blockly.Python['math_number'];