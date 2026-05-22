'use strict';

goog.provide('Blockly.Python.ICreateK210');
goog.require('Blockly.Python');



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
Blockly.Python['ICreateK210_settings'] = function(block) {
  const Text = block.getFieldValue('TWO');
  
  const pythonCode = `vision.set_mode(vision.${Text})\n`;

  if(isCurrentBlockHat(block)){
    return pythonCode
  }
  return "";
};

//获取模式
Blockly.Python['ICreateK210_currentMode'] = function(block) {
  const pythonCode = `vision.get_mode()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################颜色识别模块###########################################
//获取颜色RGB值
Blockly.Python['ICreateK210_colorRecogn'] = function(block) {
  const dropdown_one = block.getFieldValue('ONE');
  
  const pythonCode = `vision.color_value(vision.${dropdown_one})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################色块追踪模块###########################################
//设置追踪颜色
Blockly.Python['ICreateK210_colorBlockSet'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  
  const pythonCode = `vision.set_color(vision.${ONE})\n`;
  
  if(isCurrentBlockHat(block)){
    return pythonCode
  }
  return "";
};

//是否追踪到色块
Blockly.Python['ICreateK210_colorIsTrack'] = function(block) {
  const pythonCode = `vision.color_detected()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取色块位置信息
Blockly.Python['ICreateK210_colorBlockInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `vision.color_position(vision.${ONE})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################标签识别模块###########################################
//获取标签数量
Blockly.Python['ICreateK210_tagNum'] = function(block) {
  const pythonCode = `vision.tag_count()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取标签内容
Blockly.Python['ICreateK210_tagCont'] = function(block) {
  const pythonCode = `vision.tag_id()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取标签旋转角度
Blockly.Python['ICreateK210_tagAngle'] = function(block) {
  const pythonCode = `vision.tag_rotation()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取标签位置信息
Blockly.Python['ICreateK210_tagInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `vision.tag_position(vision.${ONE})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################线条识别模块###########################################
//是否识别到线条
Blockly.Python['ICreateK210_lineIsRecog'] = function(block) {
  const pythonCode = `vision.line_detected()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取线条位置信息
Blockly.Python['ICreateK210_lineInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const pythonCode = `vision.line_position(vision.${ONE},vision.${TWO})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################20类物体识别模块###########################################
//获取物体数量
Blockly.Python['ICreateK210_objectNum'] = function(block) {
  const pythonCode = `vision.object_count()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//是否识别到指定物体
Blockly.Python['ICreateK210_objectIsRecogn'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `vision.object_detected(vision.${ONE})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取物体位置信息
Blockly.Python['ICreateK210_objInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `vision.object_position(vision.${ONE})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################二维码识别模块###########################################
//是否识别到二维码
Blockly.Python['ICreateK210_qrIsRecogn'] = function(block) {
  const pythonCode = `vision.qr_detected()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取二维码内容
Blockly.Python['ICreateK210_qrCont'] = function(block) {
  const TEXT = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT');
  const pythonCode = `vision.qr_data() == ${TEXT}`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取二维码位置信息
Blockly.Python['ICreateK210_qrInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `vision.qr_position(vision.${ONE})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################人脸属性识别模块###########################################
//获取人脸属性数量
Blockly.Python['ICreateK210_faceAttrNum'] = function(block) {
  const pythonCode = `vision.face_count()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取人脸位置信息
Blockly.Python['ICreateK210_faceAttrInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const pythonCode = `vision.face_position(vision.${TWO},${Number(ONE)})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取人脸属性
Blockly.Python['ICreateK210_faceAttrEmote'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const pythonCode = `vision.face_attribute(vision.${TWO},${Number(ONE)})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################人脸识别模块###########################################
//人脸学习
Blockly.Python['ICreateK210_faceLearn'] = function(block) {
  const pythonCode = `vision.face_recognized_learn()\n`;
  
  if(isCurrentBlockHat(block)){
    return pythonCode;
  }
  return "";
};

//获取人脸识别数量
Blockly.Python['ICreateK210_faceRecogNum'] = function(block) {
  const pythonCode = `vision.face_recognized_count()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取已学习人脸数量
Blockly.Python['ICreateK210_faceRecogLearn'] = function(block) {
  const pythonCode = `vision.face_recognized_detected()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取人脸位置信息
Blockly.Python['ICreateK210_faceRecognEmote'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const pythonCode = `vision.face_recognized_position(vision.${TWO},${ONE})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################深度学习模块###########################################
//深度学习识别
Blockly.Python['ICreateK210_deepLearning'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `vision.class_recognized(${Number(ONE)})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################路标识别模块###########################################
//获取路标数量
Blockly.Python['ICreateK210_roadNum'] = function(block) {
  const pythonCode = `vision.card_count()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//是否识别到指定路标
Blockly.Python['ICreateK210_roadRecog'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  let pythonCode
  if(ONE=='RED' || ONE=='GREEN'){
    pythonCode=`vision.card_detected(vision.${ONE},1)`
  }else{
    pythonCode=`vision.card_detected(vision.${ONE},2)`
  }
  
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取路标位置信息
Blockly.Python['ICreateK210_roadInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `vision.card_position(vision.${ONE})`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################无线图传模块###########################################
//设置无线网络
Blockly.Python['ICreateK210_wirelessSet'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  
  const pythonCode = `aiVision.set_wifi_server_ssid_passward(${ONE}, ${TWO})\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
  }
  return "";
};

//连接无线图传
Blockly.Python['ICreateK210_wirelessConnect'] = function(block) {
  const pythonCode = `aiVision.set_wifi_server_is_scan_qrcode(True)\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
  }
  return "";
};

//#############################################设置模块###########################################
//灯光开关控制
Blockly.Python['ICreateK210_lightSwitch'] = function(block) {
  const dropdown_one = block.getFieldValue('ONE');
  
  let pythonCode = '';
  if (dropdown_one === '1') {
      pythonCode = `aiVision.set_light_brightness(1)\n`;  // 开灯
  } else {
      pythonCode = `aiVision.set_light_brightness(0)\n`;  // 关灯
  }
  
  if(isCurrentBlockHat(block)){
    return pythonCode;
  }
  return "";
};

//设置灯光亮度
Blockly.Python['ICreateK210_lightBrightness'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  
  const pythonCode = `vision.set_fill_light_brightness(${Number(ONE)})\n`;
  
  if(isCurrentBlockHat(block)){
    return pythonCode;
  }
  return "";
};

//获取灯光亮度
Blockly.Python['ICreateK210_lightGetBrightness'] = function(block) {
  const pythonCode = `vision.get_fill_light_brightness()`;
  
  if(isCurrentBlockHat(block)){
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};