/**
 * Visual Blocks Language
 *
 * Copyright 2020 openblock.cc.
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

goog.provide('Blockly.Arduino.math');

goog.require('Blockly.Arduino');


Blockly.Arduino['math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  if (isNaN(code)) {
    code = 0;
  }
  // -4.abs() returns -4 in Dart due to strange order of operation choices.
  // -4 is actually an operator and a number.  Reflect this in the order.
  var order = code < 0 ?
    Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Arduino['math_integer'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_whole_number'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_positive_number'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_angle'] = Blockly.Arduino['math_number'];

Blockly.Arduino['math_int8_number'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_uint8_number'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_int9_number'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_uint10_number'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_int11_number'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_0to100_number'] = Blockly.Arduino['math_number'];
Blockly.Arduino['math_half_angle'] = Blockly.Arduino['math_number'];

Blockly.Arduino['numresD100D100'] = Blockly.Arduino['math_number'];


Blockly.Arduino['numres0D4'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D9'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D10'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres40D500'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres20D10000'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D255'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numresD255D255'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D300'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numresD100D100'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres1'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D100'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numresD360D360'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numresD32400D32400'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D65535'] = Blockly.Arduino['math_number'];

Blockly.Arduino['numresD1000D1000'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D180'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D99'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres1D12'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres1D31'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D23'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D59'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D1'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D1023'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres0D1000'] = Blockly.Arduino['math_number'];
Blockly.Arduino['numres1D60'] = Blockly.Arduino['math_number'];

