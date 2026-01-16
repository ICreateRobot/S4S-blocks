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

goog.provide('Blockly.Arduino.control');

goog.require('Blockly.Arduino');

//等待*秒
Blockly.Arduino['control_wait'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'DURATION',
      Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var arg1 = block.getFieldValue('SECOND') || 'False';

  var code=''
  if(arg1=='s'){
      code = "delay(" + arg0 + " * 1000" + ");\n";
  }else{
      code = "delay(" + arg0 + ");\n";
  }
  return code;
};

Blockly.Arduino['control_repeat'] = function(block) {
  var repeats = Blockly.Arduino.valueToCode(block, 'TIMES',
      Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);

  var code = "for (int index = 0; index < " + repeats + "; index++) {\n";
  code += branch;
  code += "}\n";
  return code;
};


Blockly.Arduino['control_forever'] = function(block) {
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  
  if (Blockly.Arduino.firstLoop && !block.getSurroundParent()
    && block.getRootBlock().type === 'event_when') {
    
    Blockly.Arduino.firstLoop = false;
    // 这是主循环，将其内容添加到 loops_ 中
    Blockly.Arduino.loops_['forever'] = branch;
    return ''; 
    
  } else {
    return "";
  }
};

Blockly.Arduino['control_if'] = function(block) {
  var argument = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);

  var code = "if (" + argument + ") {\n";
  code += branch;
  code += "}\n";
  return code;
};

Blockly.Arduino['control_if_else'] = function(block) {
  var argument = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var branch2 = Blockly.Arduino.statementToCode(block, 'SUBSTACK2');
  branch2 = Blockly.Arduino.addLoopTrap(branch2, block.id);

  var code = "if (" + argument + ") {\n";
  code += branch;
  code += "}\nelse{\n";
  code += branch2;
  code += "}\n";
  return code;
};

Blockly.Arduino['control_wait_until'] = function(block) {
  var argument = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || 'false';
  var code = "while (!" + argument + ") {\n";
  code += Blockly.Arduino.INDENT + "delay(10);\n}\n";
  return code;
};

Blockly.Arduino['control_repeat_until'] = function(block) {
  var argument = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || 'false';

  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);

  var code = "do {\n";
  code += branch;
  code += "} while (!" + argument + ");\n";
  return code;
};
