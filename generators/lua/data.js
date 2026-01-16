'use strict';

goog.provide('Blockly.Lua.data');

goog.require('Blockly.Lua');


Blockly.Lua['data_variable'] = function(block) {
  var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);

  let parent=block
  while (parent.getParent()) {
      parent = parent.getParent();
  }
	if(parent.type=='event_when'){
    return [varName, Blockly.Lua.ORDER_ATOMIC];
  }else{
      return ''
  }
  // return [varName, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Lua['data_setvariableto'] = function(block) {
    var arg0 = Blockly.Lua.valueToCode(block, 'VALUE',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('VARIABLE'),
        Blockly.Variables.NAME_TYPE);
  
    // Arg is a number
    if (parseFloat(arg0.slice(1, -1)) == arg0.slice(1, -1)) {
      arg0 = parseFloat(arg0.slice(1, -1)).toString();
    }
    // return varName + ' = ' + arg0 + '\n';
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return varName + ' = ' + arg0 + '\n';
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_changevariableby'] = function(block) {
    var arg0 = Blockly.Lua.valueToCode(block, 'VALUE',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('VARIABLE'),
        Blockly.Variables.NAME_TYPE);
  
    // return varName + ' += ' + arg0 + '\n';
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return varName + ' += ' + arg0 + '\n';
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_showvariable'] = function() {
    return '';
  };
  
  Blockly.Lua['data_hidevariable'] = function() {
    return '';
  };
  
  Blockly.Lua['data_listcontents'] = function(block) {
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
    // return [varName, Blockly.Python.ORDER_ATOMIC];
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return [varName, Blockly.Lua.ORDER_ATOMIC];
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_addtolist'] = function(block) {
    var item = Blockly.Lua.valueToCode(block, 'ITEM',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
  
    // return varName + '.append(' + item + ')\n';
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return varName + '.append(' + item + ')\n';
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_deleteoflist'] = function(block) {
    var index = Blockly.Lua.valueToCode(block, 'INDEX',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
  
    // return 'del ' + varName + '[' + index + ' - 1]\n';
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return 'del ' + varName + '[' + index + ' - 1]\n';
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_deletealloflist'] = function(block) {
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
  
    // return 'del ' + varName + '[0:]\n';
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return 'del ' + varName + '[0:]\n';
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_insertatlist'] = function(block) {
    var item = Blockly.Lua.valueToCode(block, 'ITEM',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var index = Blockly.Lua.valueToCode(block, 'INDEX',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
  
    // return varName + '.insert(' + index + ' - 1, ' + item + ')\n';
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return varName + '.insert(' + index + ' - 1, ' + item + ')\n';
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_replaceitemoflist'] = function(block) {
    var item = Blockly.Lua.valueToCode(block, 'ITEM',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var index = Blockly.Lua.valueToCode(block, 'INDEX',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
  
    // return varName + '[' + index + ' - 1] = ' + item + '\n';
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return varName + '[' + index + ' - 1] = ' + item + '\n';
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_itemoflist'] = function(block) {
    var index = Blockly.Lua.valueToCode(block, 'INDEX',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
    // return [varName + '[' + index + ' - 1]', Blockly.Python.ORDER_ATOMIC];
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return [varName + '[' + index + ' - 1]', Blockly.Lua.ORDER_ATOMIC];
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_itemnumoflist'] = function(block) {
    var item = Blockly.Lua.valueToCode(block, 'ITEM',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
    // return [varName + '.index(' + item + ') + 1', Blockly.Python.ORDER_UNARY_SIGN];
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return [varName + '.index(' + item + ') + 1', Blockly.Lua.ORDER_UNARY_SIGN];
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_lengthoflist'] = function(block) {
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
    // return ['len(' + varName + ')', Blockly.Python.ORDER_ATOMIC];
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return ['len(' + varName + ')', Blockly.Lua.ORDER_ATOMIC];
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_listcontainsitem'] = function(block) {
    var item = Blockly.Lua.valueToCode(block, 'ITEM',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    var varName = Blockly.Lua.variableDB_.getName(block.getFieldValue('LIST'),
        Blockly.Variables.NAME_TYPE);
    // return ['' + item + ' in ' + varName, Blockly.Python.ORDER_RELATIONAL];
  
    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
      if(parent.type=='event_when'){
      return ['' + item + ' in ' + varName, Blockly.Lua.ORDER_RELATIONAL];
    }else{
        return ''
    }
  };
  
  Blockly.Lua['data_showlist'] = function() {
    return '';
  };
  
  Blockly.Lua['data_hidelist'] = function() {
    return '';
  };
  
  