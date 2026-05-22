'use strict';

goog.provide('Blockly.Arduino.ICreateK210');
goog.require('Blockly.Arduino');



//#############################################视觉模块###########################################

// function isCurrentBlockHat(currentBlock){
//     let parent = currentBlock;
//     let hatBlock='event_when'
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
//     if (parent.type === hatBlock || parent.type === 'procedures_definition') {
//         return true;
//     }else{
//         return false
//     }
// }

//设置模式
Blockly.Arduino['ICreateK210_settings'] = function(block) {
  const Text = block.getFieldValue('TWO');
  
  const ArduinoCode = `hw_ai_camera.set_mode(hw_ai_camera.${Text});\n`;

  return ArduinoCode
  return "";
};

//获取模式
Blockly.Arduino['ICreateK210_currentMode'] = function(block) {
  const ArduinoCode = `hw_ai_camera.get_mode()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################颜色识别模块###########################################
//获取颜色RGB值
Blockly.Arduino['ICreateK210_colorRecogn'] = function(block) {
  const dropdown_one = block.getFieldValue('ONE');
  
  const ArduinoCode = `hw_ai_camera.color_value(hw_ai_camera.${dropdown_one})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################色块追踪模块###########################################
//设置追踪颜色
Blockly.Arduino['ICreateK210_colorBlockSet'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  
  const ArduinoCode = `hw_ai_camera.set_color(hw_ai_camera.${ONE});\n`;
  
  return ArduinoCode
  return "";
};

//是否追踪到色块
Blockly.Arduino['ICreateK210_colorIsTrack'] = function(block) {
  const ArduinoCode = `hw_ai_camera.color_detected()==1`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取色块位置信息
Blockly.Arduino['ICreateK210_colorBlockInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const ArduinoCode = `hw_ai_camera.color_position(hw_ai_camera.${ONE})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################标签识别模块###########################################
//获取标签数量
Blockly.Arduino['ICreateK210_tagNum'] = function(block) {
  const ArduinoCode = `hw_ai_camera.tag_count()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取标签内容
Blockly.Arduino['ICreateK210_tagCont'] = function(block) {
  const ArduinoCode = `hw_ai_camera.tag_id()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取标签旋转角度
Blockly.Arduino['ICreateK210_tagAngle'] = function(block) {
  const ArduinoCode = `hw_ai_camera.tag_rotation()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取标签位置信息
Blockly.Arduino['ICreateK210_tagInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const ArduinoCode = `hw_ai_camera.tag_position(hw_ai_camera.${ONE})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################线条识别模块###########################################
//是否识别到线条
Blockly.Arduino['ICreateK210_lineIsRecog'] = function(block) {
  const ArduinoCode = `hw_ai_camera.line_detected()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取线条位置信息
Blockly.Arduino['ICreateK210_lineInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const ArduinoCode = `hw_ai_camera.line_position(hw_ai_camera.${ONE},hw_ai_camera.${TWO})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################20类物体识别模块###########################################
//获取物体数量
Blockly.Arduino['ICreateK210_objectNum'] = function(block) {
  const ArduinoCode = `hw_ai_camera.object_count()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//是否识别到指定物体
Blockly.Arduino['ICreateK210_objectIsRecogn'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const ArduinoCode = `hw_ai_camera.object_detected(hw_ai_camera.${ONE})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取物体位置信息
Blockly.Arduino['ICreateK210_objInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const ArduinoCode = `hw_ai_camera.object_position(hw_ai_camera.${ONE})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################二维码识别模块###########################################
//是否识别到二维码
Blockly.Arduino['ICreateK210_qrIsRecogn'] = function(block) {
  const ArduinoCode = `hw_ai_camera.qr_detected()==1`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取二维码内容
Blockly.Arduino['ICreateK210_qrCont'] = function(block) {
  const TEXT = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT');
  const ArduinoCode = `hw_ai_camera.qr_data() == ${TEXT}`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取二维码位置信息
Blockly.Arduino['ICreateK210_qrInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const ArduinoCode = `hw_ai_camera.qr_position(hw_ai_camera.${ONE})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################人脸属性识别模块###########################################
//获取人脸属性数量
Blockly.Arduino['ICreateK210_faceAttrNum'] = function(block) {
  const ArduinoCode = `hw_ai_camera.face_count()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取人脸位置信息
Blockly.Arduino['ICreateK210_faceAttrInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const ArduinoCode = `hw_ai_camera.face_position(hw_ai_camera.${TWO},${Number(ONE)})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取人脸属性
Blockly.Arduino['ICreateK210_faceAttrEmote'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const ArduinoCode = `hw_ai_camera.face_attribute(hw_ai_camera.${TWO},${Number(ONE)})==1`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################人脸识别模块###########################################
//人脸学习
Blockly.Arduino['ICreateK210_faceLearn'] = function(block) {
  const ArduinoCode = `hw_ai_camera.face_recognized_learn();\n`;
  
  return ArduinoCode;
  return "";
};

//获取人脸识别数量
Blockly.Arduino['ICreateK210_faceRecogNum'] = function(block) {
  const ArduinoCode = `hw_ai_camera.face_recognized_count()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取已学习人脸数量
Blockly.Arduino['ICreateK210_faceRecogLearn'] = function(block) {
  const ArduinoCode = `hw_ai_camera.face_recognized_detected()==1`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取人脸位置信息
Blockly.Arduino['ICreateK210_faceRecognEmote'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const ArduinoCode = `hw_ai_camera.face_recognized_position(hw_ai_camera.${TWO},${ONE})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################深度学习模块###########################################
//深度学习识别
Blockly.Arduino['ICreateK210_deepLearning'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const ArduinoCode = `hw_ai_camera.class_recognized(${Number(ONE)})==1`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################路标识别模块###########################################
//获取路标数量
Blockly.Arduino['ICreateK210_roadNum'] = function(block) {
  const ArduinoCode = `hw_ai_camera.card_count()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//是否识别到指定路标
Blockly.Arduino['ICreateK210_roadRecog'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  let ArduinoCode
  if(ONE=='RED' || ONE=='GREEN'){
    ArduinoCode=`hw_ai_camera.card_detected(hw_ai_camera.${ONE},1)==1`
  }else{
    ArduinoCode=`hw_ai_camera.card_detected(hw_ai_camera.${ONE},2)==1`
  }
  
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//获取路标位置信息
Blockly.Arduino['ICreateK210_roadInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const ArduinoCode = `hw_ai_camera.card_position(hw_ai_camera.${ONE})`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};

//#############################################无线图传模块###########################################
//设置无线网络
Blockly.Arduino['ICreateK210_wirelessSet'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  
  const ArduinoCode = `aiVision.set_wifi_server_ssid_passward(${ONE}, ${TWO});\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return ArduinoCode;
  }
  return "";
};

//连接无线图传
Blockly.Arduino['ICreateK210_wirelessConnect'] = function(block) {
  const ArduinoCode = `aiVision.set_wifi_server_is_scan_qrcode(True);\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return ArduinoCode;
  }
  return "";
};

//#############################################设置模块###########################################
//灯光开关控制
Blockly.Arduino['ICreateK210_lightSwitch'] = function(block) {
  const dropdown_one = block.getFieldValue('ONE');
  
  let ArduinoCode = '';
  if (dropdown_one === '1') {
      ArduinoCode = `hw_ai_camera.set_fill_light_brightness(1);\n`;  // 开灯
  } else {
      ArduinoCode = `hw_ai_camera.set_fill_light_brightness(0);\n`;  // 关灯
  }
  
  return ArduinoCode;
  return "";
};

//设置灯光亮度
Blockly.Arduino['ICreateK210_lightBrightness'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  
  const ArduinoCode = `hw_ai_camera.set_fill_light_brightness(${Number(ONE)});\n`;
  
  return ArduinoCode;
  return "";
};

//获取灯光亮度
Blockly.Arduino['ICreateK210_lightGetBrightness'] = function(block) {
  const ArduinoCode = `hw_ai_camera.get_fill_light_brightness()`;
  
  return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
  
};