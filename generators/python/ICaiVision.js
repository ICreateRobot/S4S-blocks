'use strict';

goog.provide('Blockly.Python.ICreateK210');
goog.require('Blockly.Python');



//#############################################视觉模块###########################################



//设置模式
Blockly.Python['ICreateK210_settings'] = function(block) {
  const Text = block.getFieldValue('TWO');
  
  const pythonCode = `aiVision.set_sys_mode(${Text})\n`;

  let parent = block;
  while (parent.getParent()) {
    parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
    return pythonCode;
  }
  return "";
};

//获取模式
Blockly.Python['ICreateK210_currentMode'] = function(block) {
  const pythonCode = `aiVision.get_sys_mode()`;
  
  let parent = block;
  while (parent.getParent()) {
    parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
    return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################颜色识别模块###########################################
//获取颜色RGB值
Blockly.Python['ICreateK210_colorRecogn'] = function(block) {
  const dropdown_one = block.getFieldValue('ONE');
  
  const pythonCode = `aiVision.get_color_rgb()`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      if (dropdown_one === 'r') {
          return [`${pythonCode}[0]`, Blockly.Python.ORDER_NONE];
      } else if (dropdown_one === 'g') {
          return [`${pythonCode}[1]`, Blockly.Python.ORDER_NONE];
      } else if (dropdown_one === 'b') {
          return [`${pythonCode}[2]`, Blockly.Python.ORDER_NONE];
      }
  }
  return '';
};

//#############################################色块追踪模块###########################################
//设置追踪颜色
Blockly.Python['ICreateK210_colorBlockSet'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  
  const pythonCode = `aiVision.set_find_color(ai_camera.patch_color_tab[${ONE}])\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
  }
  return "";
};

//是否追踪到色块
Blockly.Python['ICreateK210_colorIsTrack'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_PATCH) > 0`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取色块位置信息
Blockly.Python['ICreateK210_colorBlockInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const position_array = `aiVision.get_identify_position(ai_camera.AI_CAMERA_PATCH)`;
  
  let pythonCode = '';
  if (ONE === 0) {
      pythonCode = `${position_array}[0]`;  // x坐标
  } else if (ONE === 1) {
      pythonCode = `${position_array}[1]`;  // y坐标
  } else if (ONE === 2) {
      pythonCode = `${position_array}[2]`;  // 宽度
  } else if (ONE === 3) {
      pythonCode = `${position_array}[3]`;  // 高度
  } else {
      pythonCode = '0';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################标签识别模块###########################################
//获取标签数量
Blockly.Python['ICreateK210_tagNum'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_TAG)`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取标签内容
Blockly.Python['ICreateK210_tagCont'] = function(block) {
  const pythonCode = `aiVision.get_identify_id(ai_camera.AI_CAMERA_TAG)`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取标签旋转角度
Blockly.Python['ICreateK210_tagAngle'] = function(block) {
  const pythonCode = `aiVision.get_identify_rotation(ai_camera.AI_CAMERA_TAG)`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取标签位置信息
Blockly.Python['ICreateK210_tagInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const position_array = `aiVision.get_identify_position(ai_camera.AI_CAMERA_TAG)`;
  
  let pythonCode = '';
  if (ONE === 0) {
      pythonCode = `${position_array}[0]`;  // x坐标
  } else if (ONE === 1) {
      pythonCode = `${position_array}[1]`;  // y坐标
  } else if (ONE === 2) {
      pythonCode = `${position_array}[2]`;  // 宽度
  } else if (ONE === 3) {
      pythonCode = `${position_array}[3]`;  // 高度
  } else {
      pythonCode = '0';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################线条识别模块###########################################
//是否识别到线条
Blockly.Python['ICreateK210_lineIsRecog'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_LINE) > 0`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取线条位置信息
Blockly.Python['ICreateK210_lineInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const position_array = `aiVision.get_identify_position(ai_camera.AI_CAMERA_LINE, ${ONE})`;
  
  let pythonCode = '';
  if (TWO === 0) {
      pythonCode = `${position_array}[0]`;  // x坐标
  } else if (TWO === 1) {
      pythonCode = `${position_array}[1]`;  // y坐标
  } else if (TWO === 2) {
      pythonCode = `${position_array}[2]`;  // 宽度
  } else if (TWO === 3) {
      pythonCode = `${position_array}[3]`;  // 高度
  } else {
      pythonCode = '0';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################20类物体识别模块###########################################
//获取物体数量
Blockly.Python['ICreateK210_objectNum'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_20_CLASS)`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//是否识别到指定物体
Blockly.Python['ICreateK210_objectIsRecogn'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `aiVision.get_identify_id(ai_camera.AI_CAMERA_20_CLASS) == ${ONE}`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取物体位置信息
Blockly.Python['ICreateK210_objInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const position_array = `aiVision.get_identify_position(ai_camera.AI_CAMERA_20_CLASS)`;
  
  let pythonCode = '';
  if (ONE === 0) {
      pythonCode = `${position_array}[0]`;  // x坐标
  } else if (ONE === 1) {
      pythonCode = `${position_array}[1]`;  // y坐标
  } else if (ONE === 2) {
      pythonCode = `${position_array}[2]`;  // 宽度
  } else if (ONE === 3) {
      pythonCode = `${position_array}[3]`;  // 高度
  } else {
      pythonCode = '0';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################二维码识别模块###########################################
//是否识别到二维码
Blockly.Python['ICreateK210_qrIsRecogn'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_QRCODE) > 0`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取二维码内容
Blockly.Python['ICreateK210_qrCont'] = function(block) {
  const pythonCode = `aiVision.get_qrcode_content()`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取二维码位置信息
Blockly.Python['ICreateK210_qrInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const position_array = `aiVision.get_identify_position(ai_camera.AI_CAMERA_QRCODE)`;
  
  let pythonCode = '';
  if (ONE === 0) {
      pythonCode = `${position_array}[0]`;  // x坐标
  } else if (ONE === 1) {
      pythonCode = `${position_array}[1]`;  // y坐标
  } else if (ONE === 2) {
      pythonCode = `${position_array}[2]`;  // 宽度
  } else if (ONE === 3) {
      pythonCode = `${position_array}[3]`;  // 高度
  } else {
      pythonCode = '0';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################人脸属性识别模块###########################################
//获取人脸属性数量
Blockly.Python['ICreateK210_faceAttrNum'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_FACE_ATTRIBUTE, 1)`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取人脸位置信息
Blockly.Python['ICreateK210_faceAttrInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const position_array = `aiVision.get_identify_position(ai_camera.AI_CAMERA_FACE_ATTRIBUTE, ${ONE})`;
  
  let pythonCode = '';
  if (TWO === 0) {
      pythonCode = `${position_array}[0]`;  // x坐标
  } else if (TWO === 1) {
      pythonCode = `${position_array}[1]`;  // y坐标
  } else if (TWO === 2) {
      pythonCode = `${position_array}[2]`;  // 宽度
  } else if (TWO === 3) {
      pythonCode = `${position_array}[3]`;  // 高度
  } else {
      pythonCode = '0';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取人脸属性
Blockly.Python['ICreateK210_faceAttrEmote'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const attribute_array = `aiVision.get_identify_face_attribute(${ONE})`;
  
  let pythonCode = '';
  if (TWO === 1) {
      pythonCode = `${attribute_array}[0] != 0`;  // 嘴巴是否张开
  } else if (TWO === 2) {
      pythonCode = `${attribute_array}[1] != 0`;  // 是否微笑
  } else if (TWO === 3) {
      pythonCode = `${attribute_array}[2] != 0`;  // 是否戴眼镜
  } else {
      pythonCode = 'False';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################人脸识别模块###########################################
//人脸学习
Blockly.Python['ICreateK210_faceLearn'] = function(block) {
  const pythonCode = `aiVision.face_study()\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
  }
  return "";
};

//获取人脸识别数量
Blockly.Python['ICreateK210_faceRecogNum'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_FACE_RE, 1)`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取已学习人脸数量
Blockly.Python['ICreateK210_faceRecogLearnNum'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_FACE_RE, 0)`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取人脸位置信息
Blockly.Python['ICreateK210_faceRecognEmote'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const TWO = block.getFieldValue('TWO');
  const position_array = `aiVision.get_identify_position(ai_camera.AI_CAMERA_FACE_RE, ${ONE})`;
  
  let pythonCode = '';
  if (TWO === 0) {
      pythonCode = `${position_array}[0]`;  // x坐标
  } else if (TWO === 1) {
      pythonCode = `${position_array}[1]`;  // y坐标
  } else if (TWO === 2) {
      pythonCode = `${position_array}[2]`;  // 宽度
  } else if (TWO === 3) {
      pythonCode = `${position_array}[3]`;  // 高度
  } else {
      pythonCode = '0';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################深度学习模块###########################################
//深度学习识别
Blockly.Python['ICreateK210_deepLearning'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `aiVision.get_identify_id(ai_camera.AI_CAMERA_DEEP_LEARN) == ${ONE}`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//#############################################路标识别模块###########################################
//获取路标数量
Blockly.Python['ICreateK210_roadNum'] = function(block) {
  const pythonCode = `aiVision.get_identify_num(ai_camera.AI_CAMERA_CARD)`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//是否识别到指定路标
Blockly.Python['ICreateK210_roadRecog'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const pythonCode = `aiVision.get_identify_id(ai_camera.AI_CAMERA_CARD) == ${ONE}`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};

//获取路标位置信息
Blockly.Python['ICreateK210_roadInfo'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  const position_array = `aiVision.get_identify_position(ai_camera.AI_CAMERA_CARD)`;
  
  let pythonCode = '';
  if (ONE === 0) {
      pythonCode = `${position_array}[0]`;  // x坐标
  } else if (ONE === 1) {
      pythonCode = `${position_array}[1]`;  // y坐标
  } else if (ONE === 2) {
      pythonCode = `${position_array}[2]`;  // 宽度
  } else if (ONE === 3) {
      pythonCode = `${position_array}[3]`;  // 高度
  } else {
      pythonCode = '0';
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
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
      pythonCode = `aiVision.set_light_brightness(5)\n`;  // 开灯
  } else {
      pythonCode = `aiVision.set_light_brightness(0)\n`;  // 关灯
  }
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
  }
  return "";
};

//设置灯光亮度
Blockly.Python['ICreateK210_lightBrightness'] = function(block) {
  const ONE = block.getFieldValue('ONE');
  
  const pythonCode = `aiVision.set_light_brightness(${ONE})\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
  }
  return "";
};

//获取灯光亮度
Blockly.Python['ICreateK210_lightGetBrightness'] = function(block) {
  const pythonCode = `aiVision.get_light_brightness()`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return '';
};