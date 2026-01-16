'use strict';

goog.provide('Blockly.Python.LinkBot');
goog.require('Blockly.Python');


//#############################################舵机###########################################
//控制舵机
Blockly.Python['LinkBot_ICM_S4S_servo'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `mainBoard.servo_set_angle(${pinChoice},${pinText})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
        return pythonCode;
    }
    return "";
};

//#############################################电机###########################################
//电机 端口 转向 NUM 类型
Blockly.Python['LinkBot_ICM_S4S_motorRunType'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const DIVERSION = block.getFieldValue('DIVERSION');
    const TYPE = block.getFieldValue('TYPE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `encoder_motor_run_dir_3state(${CHOICE},${DIVERSION},${TYPE},${NUM})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 电机 端口 转向
Blockly.Python['LinkBot_ICM_S4S_motorRunDiv'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const DIVERSION = block.getFieldValue('DIVERSION');
    
    const pythonCode = `encoder_motor_run(${CHOICE},${DIVERSION})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 电机停止 端口
Blockly.Python['LinkBot_ICM_S4S_motorStop'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `encoder_motor_stop(${CHOICE})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 电机设置 端口 速度
Blockly.Python['LinkBot_ICM_S4S_motorSetSpeed'] = function(block) {
  const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `encoder_motor_set_speed(${CHOICE},${NUM})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 电机获取 位置
Blockly.Python['LinkBot_ICM_S4S_motorGetPos'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `encoder_motor_get_angle(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

// 电机获取 速度
Blockly.Python['LinkBot_ICM_S4S_motorGetSpeed'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `encoder_motor_get_speed(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

// 电机设置 端口 相对位置为 0
Blockly.Python['LinkBot_ICM_S4S_motorSetPos'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `encoder_motor_reset_angle(${CHOICE})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 电机 端口 动力
Blockly.Python['LinkBot_ICM_S4S_motorRunPower'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `encoder_motor_set_power(${CHOICE},${NUM})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 电机获取 端口 动力
Blockly.Python['LinkBot_ICM_S4S_motorGetPower'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `encoder_motor_get_power(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//#############################################运动###########################################
// 设置双电机端口
Blockly.Python['LinkBot_ICM_S4S_MovSetPin'] = function(block) {
    const P1 = block.getFieldValue('P1');
    const P2 = block.getFieldValue('P2');
    
    const pythonCode = `encoder_motor_pair_set_group(${P1},${P2})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 双电机开始移动
Blockly.Python['LinkBot_ICM_S4S_MovRun'] = function(block) {
    const TYPE = block.getFieldValue('TYPE');
    
    const pythonCode = `encoder_motor_pair_run(${TYPE})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 双电机移动指定秒数
Blockly.Python['LinkBot_ICM_S4S_MovRunSec'] = function(block) {
    const TYPE = block.getFieldValue('TYPE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `encoder_motor_pair_run_time(${TYPE},${NUM})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 双电机停止
Blockly.Python['LinkBot_ICM_S4S_MovStop'] = function(block) {
    const pythonCode = `encoder_motor_pair_stop()\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 双电机统一设置动力
Blockly.Python['LinkBot_ICM_S4S_MovSetPowAll'] = function(block) {
    const NUM =Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `encoder_motor_pair_set_speed(${NUM},${NUM})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};

// 双电机分别设置动力
Blockly.Python['LinkBot_ICM_S4S_MovSetPow'] = function(block) {
    const P1 = Blockly.Python.valueToCode(block, 'P1', Blockly.Python.ORDER_NONE);
    const P2 = Blockly.Python.valueToCode(block, 'P2', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `encoder_motor_pair_set_speed(${P1},${P2})\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return pythonCode;
    }
    return "";
};


//#############################################氛围灯###########################################
//氛围灯
Blockly.Python['LinkBot_ICM_S4S_ambient'] = function(block) {
    const pinText = Blockly.Python.valueToCode(block, 'CHOICE',Blockly.Python.ORDER_NONE);
    let color= Blockly.Python.valueToCode(block, 'COL',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COL');
    const [r, g, b] = color.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
   
    const pythonCode = `mainBoard.ambient_light_set_state(${pinText},(${r},${g},${b}))\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
        return pythonCode;
    }
    return "";
};


//氛围灯关闭
Blockly.Python['LinkBot_ICM_S4S_ambientOFF'] = function(block) {

  const pythonCode = `mainBoard.ambient_light_set_state(0,(0,0,0))\n`;

  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
  }
  return "";
};

//#############################################陀螺仪###########################################
// 向#倾斜
Blockly.Python['LinkBot_ICM_S4S_isTitled'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `mainBoard.gyro_get_tilted() == ${CHOICE}`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

// 面朝上
Blockly.Python['LinkBot_ICM_S4S_isUp'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `mainBoard.gyro_get_orientation() == ${CHOICE}`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

// 陀螺仪 翻滚角俯仰角
Blockly.Python['LinkBot_ICM_S4S_gyroXY'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `mainBoard.gyro_get_angle(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

// 陀螺仪 加速度
Blockly.Python['MicrobiteIcreateS4S_ICM_S4S_acc'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `mainBoard.gyro_get_acc(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

// 陀螺仪 角速度
Blockly.Python['MicrobiteIcreateS4S_ICM_S4S_gyro'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `mainBoard.gyro_get_gyro(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};


//#############################################语音###########################################
//语音模块
Blockly.Python['LinkBot_ICM_S4S_voice'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pythonCode = `mainBoard.voice_get_state()==${pinChoice}`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//#############################################超声波###########################################
//超声波
Blockly.Python['LinkBot_ICM_S4S_ultrGet'] = function(block) {
    const pythonCode = `ultr.get_distance()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

// 超声波判断
Blockly.Python['LinkBot_ICM_S4S_ultrGetLog'] = function(block) {
    const TYPE = block.getFieldValue('Type');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ultr.get_distance() ${TYPE} ${NUM}`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//超声波灯
Blockly.Python['LinkBot_ICM_S4S_ultrSet'] = function(block) {
    const pinText = Blockly.Python.valueToCode(block, 'CHOICE',Blockly.Python.ORDER_NONE);
    let color= Blockly.Python.valueToCode(block, 'COL',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COL');
    const [r, g, b] = color.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
   
    const pythonCode = `ultr.set_color(${pinText},${r},${g},${b})\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return '';
};

//#############################################巡线###########################################
//灰度学习
Blockly.Python['LinkBot_ICM_S4S_grayStudy'] = function(block) {
    const pythonCode = `gray.gray_study()\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return '';
};

//二值学习
Blockly.Python['LinkBot_ICM_S4S_binaryStudy'] = function(block) {
    const pythonCode = `gray.binary_study()\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return '';
};

//颜色学习
Blockly.Python['LinkBot_ICM_S4S_colorStudy'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    //const code = DICT_studyColor[pinChoice];

    const pythonCode = `gray.color_study(${pinChoice})\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return '';
};

//清空颜色学习
Blockly.Python['LinkBot_ICM_S4S_colorClear'] = function(block) {
    const pythonCode = `gray.clear_color()\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return '';
};

//巡线获取灰度值
Blockly.Python['LinkBot_ICM_S4S_grayGet'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');

    const pythonCode = `gray.gray(${pinChoice})`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//巡线获取颜色
Blockly.Python['LinkBot_ICM_S4S_colorGet'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinChoice1 = block.getFieldValue('CHOICE1');
    //const code = DICT_studyColor[pinChoice1];

    const pythonCode = `gray.color(${pinChoice}) == ${pinChoice1}`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//巡线获取黑线
Blockly.Python['LinkBot_ICM_S4S_blackGet'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');

    const pythonCode = `gray.black(${pinChoice}) == 1`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//#############################################RTC###########################################
//时钟设置日期
Blockly.Python['LinkBot_ICM_S4S_rtcSetData'] = function(block) {
    const text1 = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    const text2 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const text3 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);

    const pythonCode = `mainBoard.rtc_set_date(${text1},${text2},${text3})\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return '';
};

//时钟设置时间
Blockly.Python['LinkBot_ICM_S4S_rtcSetTime'] = function(block) {
    const text1 = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    const text2 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const text3 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);

    const pythonCode = `mainBoard.rtc_set_time(${text1},${text2},${text3})\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return '';
};

//获取日期
Blockly.Python['LinkBot_ICM_S4S_rtcGetData'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    //const code = DICT_rtcData[pinChoice];

    const pythonCode = `mainBoard.rtc_get_date(${pinChoice})`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//获取时间
Blockly.Python['LinkBot_ICM_S4S_rtcGetTime'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    //const code = DICT_rtcTime[pinChoice];

    const pythonCode = `mainBoard.rtc_get_time(${pinChoice})`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};



