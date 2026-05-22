'use strict';

goog.provide('Blockly.Arduino.LinkBot');
goog.require('Blockly.Arduino');


//#############################################舵机###########################################
//控制舵机
Blockly.Arduino['LinkBotActuators_ICM_S4S_servo'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT');
    
    const ArduinoCode = `hw_main_board.servo_set_angle(${pinChoice},${pinText});\n`;

    return ArduinoCode
    
};
Blockly.Arduino['LinkBotActuators_ICM_S4S_servoRelease'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `hw_main_board.servo_release(${pinChoice});\n`;

    return ArduinoCode
    
};

Blockly.Arduino['LinkBotActuators_LinkBot_continuous_servo'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT');
    
    const ArduinoCode = `hw_main_board.servo_set_speed(${pinChoice},${pinText});\n`;

    return ArduinoCode
    
};
Blockly.Arduino['LinkBotActuators_LinkBot_continuous_servoStop'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `hw_main_board.servo_stop(${pinChoice});\n`;

    return ArduinoCode
    
};

//#############################################电机###########################################
//电机 端口 转向 NUM 类型
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorRunType'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    let DIVERSION = block.getFieldValue('DIVERSION');
    let TYPE = block.getFieldValue('TYPE');
    const NUM = Blockly.Arduino.valueToCode(block, 'NUM',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    
    DIVERSION='MOTORS_'+getAfterDot(DIVERSION)
    TYPE='MOTORS_'+getAfterDot(TYPE)
    const ArduinoCode = `hw_main_board.motors_run_for(${CHOICE},hw_main_board.${DIVERSION},${NUM},hw_main_board.${TYPE});\n`;

    return ArduinoCode
    
};

// 电机 端口 转向
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorRunDiv'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    let DIVERSION = block.getFieldValue('DIVERSION');

    DIVERSION='MOTORS_'+getAfterDot(DIVERSION)
    
    const ArduinoCode = `hw_main_board.motors_start(${CHOICE},hw_main_board.${DIVERSION});\n`;

    return ArduinoCode
    
};

// 电机停止 端口
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorStop'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `hw_main_board.motors_stop(${CHOICE});\n`;

    return ArduinoCode
    
};

// 电机设置 端口 速度
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorSetSpeed'] = function(block) {
  const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    
    const ArduinoCode = `hw_main_board.motors_set_speed(${CHOICE},${NUM});\n`;

    return ArduinoCode
    
};

// 电机获取 位置
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorGetPos'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `hw_main_board.motors_position(${CHOICE})`;

    return [ArduinoCode, Blockly.Arduino.ORDER_NONE]
    
};

// 电机获取 速度
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorGetSpeed'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `hw_main_board.motors_speed(${CHOICE})`;

    return [ArduinoCode, Blockly.Arduino.ORDER_NONE]
    
};

// 电机设置 端口 相对位置为 0
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorSetPos'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `hw_main_board.motors_reset_position(${CHOICE});\n`;

    return ArduinoCode
    
};
// 电机 端口 RPM
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorRunRPM'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    
    const ArduinoCode = `hw_main_board.motors_start_rpm(${CHOICE},${NUM});\n`;

    return ArduinoCode
    
};
// 电机获取 端口 RPM
Blockly.Arduino['LinkBotActuators_ICM_S4S_motorGetRPM'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `hw_main_board.motors_rpm(${CHOICE})`;

    return [ArduinoCode, Blockly.Arduino.ORDER_NONE]
    
};


// 电机 端口 动力
Blockly.Arduino['LinkBot_ICM_S4S_motorRunPower'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    
    const ArduinoCode = `encoder_motor_set_power(${CHOICE},${NUM});\n`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return ArduinoCode;
    }
    
};

// 电机获取 端口 动力
Blockly.Arduino['LinkBot_ICM_S4S_motorGetPower'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `encoder_motor_get_power(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    
};
function isCurrentBlockHat(currentBlock){
    let parent = currentBlock;
    let hatBlock='event_when'
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === hatBlock || parent.type === "UIEditor_whenButtonClicked" || parent.type === "UIEditor_whenSliderChanged"|| parent.type === "UIEditor_whenSwitchChanged" || parent.type === 'procedures_definition') {
        return true;
    }else{
        return false
    }
}
//#############################################运动###########################################
// 设置双电机端口
Blockly.Arduino['LinkBot_ICM_S4S_MovSetPin'] = function(block) {
    const P1 = block.getFieldValue('P1');
    const P2 = block.getFieldValue('P2');
    
    const ArduinoCode = `hw_main_board.movement_set_motors(${P1},${P2});\n`;

    return ArduinoCode
    
};

function getAfterDot(str) {
    const index = str.indexOf('.');
    if (index === -1) return ''; // 没有点
    return str.slice(index + 1);
  }
// 双电机开始移动
Blockly.Arduino['LinkBot_ICM_S4S_MovRun'] = function(block) {
    let TYPE = block.getFieldValue('TYPE');
    TYPE='MOVEMENT_'+getAfterDot(TYPE)
    
    const ArduinoCode = `hw_main_board.movement_start(hw_main_board.${TYPE});\n`;

    return ArduinoCode
    
};

// 双电机移动指定秒数
Blockly.Arduino['LinkBot_ICM_S4S_MovRunSec'] = function(block) {
    let TYPE = block.getFieldValue('TYPE');
    const NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    let MODE = block.getFieldValue('MODE');
    TYPE='MOVEMENT_'+getAfterDot(TYPE)
    MODE='MOVEMENT_'+getAfterDot(MODE)
    
    const ArduinoCode = `hw_main_board.movement_move(hw_main_board.${TYPE},${NUM},hw_main_board.${MODE});\n`;

    return ArduinoCode
    
};

// 双电机停止
Blockly.Arduino['LinkBot_ICM_S4S_MovStop'] = function(block) {
    const ArduinoCode = `hw_main_board.movement_stop();\n`;

    return ArduinoCode
    
};

// 双电机统一设置动力
Blockly.Arduino['LinkBot_ICM_S4S_MovSetPowAll'] = function(block) {
    const NUM =Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    
    const ArduinoCode = `hw_main_board.movement_set_speed(${NUM});\n`;

    return ArduinoCode
    
};

// 双电机分别设置动力
Blockly.Arduino['LinkBot_ICM_S4S_MovSetPow'] = function(block) {
    const P1 = Blockly.Arduino.valueToCode(block, 'P1', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'P1');
    const P2 = Blockly.Arduino.valueToCode(block, 'P2', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'P2');
    
    const ArduinoCode = `hw_main_board.movement_drive(${P1},${P2});\n`;

    return ArduinoCode
    
};

Blockly.Arduino['LinkBot_ICM_S4S_MovSetPowMode'] = function(block) {
    const P1 = Blockly.Arduino.valueToCode(block, 'P1', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'P1');
    const P2 = Blockly.Arduino.valueToCode(block, 'P2', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'P2');
    const NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    let MODE = block.getFieldValue('MODE');
    MODE='MOVEMENT_'+getAfterDot(MODE)
    
    const ArduinoCode = `hw_main_board.movement_drive_for(${P1},${P2},${NUM},hw_main_board.${MODE});\n`;

    return ArduinoCode
    
};


//#############################################氛围灯###########################################
//氛围灯
Blockly.Arduino['LinkBotActuators_ICM_S4S_ambient'] = function(block) {
    let color= Blockly.Arduino.valueToCode(block, 'COL',Blockly.Arduino.ORDER_NONE) || Blockly.Arduino.statementToCode(block,'COL');
    const [r, g, b] = color.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
   
    const ArduinoCode = `hw_main_board.light_set_color(${r},${g},${b});\n`;

    return ArduinoCode
    
};


//氛围灯关闭
Blockly.Arduino['LinkBot_ICM_S4S_ambientOFF'] = function(block) {

  const ArduinoCode = `mainBoard.ambient_light_set_state(0,(0,0,0));\n`;

  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return ArduinoCode;
  }
  
};

//#############################################电池###########################################
Blockly.Arduino['LinkBotPower_Linkbot_power'] = function(block) {
    
    const ArduinoCode = `hw_main_board.device_battery()`;

    return [ArduinoCode, Blockly.Arduino.ORDER_NONE]
    
};
Blockly.Arduino['LinkBotPower_Linkbot_power_external'] = function(block) {
    
    const ArduinoCode = `hw_main_board.device_voltage()`;

    return [ArduinoCode, Blockly.Arduino.ORDER_NONE]
    
};
//#############################################陀螺仪###########################################
// 向#倾斜
Blockly.Arduino['LinkBot_ICM_S4S_isTitled'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `mainBoard.gyro_get_tilted() == ${CHOICE}`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    
};

// 面朝上
Blockly.Arduino['LinkBot_ICM_S4S_isUp'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `mainBoard.gyro_get_orientation() == ${CHOICE}`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    
};

// 陀螺仪 翻滚角俯仰角
Blockly.Arduino['LinkBot_ICM_S4S_gyroXY'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `mainBoard.gyro_get_angle(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    
};

// 陀螺仪 加速度
Blockly.Arduino['MicrobiteIcreateS4S_ICM_S4S_acc'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `mainBoard.gyro_get_acc(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    
};

// 陀螺仪 角速度
Blockly.Arduino['MicrobiteIcreateS4S_ICM_S4S_gyro'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const ArduinoCode = `mainBoard.gyro_get_gyro(${CHOICE})`;

    let parent = block;
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    
};


//#############################################语音###########################################
//语音模块
Blockly.Arduino['LinkBotSensors_ICM_S4S_voice'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const ArduinoCode = ` hw_main_board.voice_recognized(hw_main_board.VOICE_${pinChoice})==1`;
    
    if(isCurrentBlockHat(block)){
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    return '';
};

//#############################################超声波###########################################
//超声波
Blockly.Arduino['LinkBotSensors_ICM_S4S_ultrGet'] = function(block) {
    let TYPE = block.getFieldValue('TYPE');
    TYPE='ULTRASONIC_'+getAfterDot(TYPE)
    const ArduinoCode = `hw_cultr.ultrasonic_get_distance(hw_cultr.${TYPE})`;
    
    if(isCurrentBlockHat(block)){
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    return '';
};

// 超声波判断
Blockly.Arduino['LinkBotSensors_ICM_S4S_ultrGetLog'] = function(block) {
    let TYPE = block.getFieldValue('TYPE');
    const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    TYPE='ULTRASONIC_'+getAfterDot(TYPE)
    const ArduinoCode = `hw_cultr.ultrasonic_get_distance(hw_cultr.${TYPE}) ${CHOICE} ${NUM}`;

    if(isCurrentBlockHat(block)){
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    return '';
    
};
//超声波灯
Blockly.Arduino['LinkBotActuators_ICM_S4S_ultrSet'] = function(block) {
    let color= Blockly.Arduino.valueToCode(block, 'COL',Blockly.Arduino.ORDER_NONE) || Blockly.Arduino.statementToCode(block,'COL');
    const [r, g, b] = color.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
   
    const ArduinoCode = `hw_cultr.ultrasonic_set_color(${r},${g},${b});\n`;
    
    return ArduinoCode
    return '';
};

//#############################################巡线###########################################
//灰度学习
Blockly.Arduino['LinkBotSensors_ICM_S4S_setMode'] = function(block) {
    let CHOICE = block.getFieldValue('CHOICE');
    CHOICE='LINE_SENSOR_'+getAfterDot(CHOICE)
    const ArduinoCode = `hw_gray.line_sensor_learn(hw_gray.${CHOICE});\n`;
    
    return ArduinoCode
    return '';
};

//二值学习
Blockly.Arduino['LinkBot_ICM_S4S_binaryStudy'] = function(block) {
    const ArduinoCode = `gray.binary_study();\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return ArduinoCode;
    }
    return '';
};

//颜色学习
Blockly.Arduino['LinkBot_ICM_S4S_colorStudy'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    //const code = DICT_studyColor[pinChoice];

    const ArduinoCode = `gray.color_study(${pinChoice});\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return ArduinoCode;
    }
    return '';
};

//清空颜色学习
Blockly.Arduino['LinkBot_ICM_S4S_colorClear'] = function(block) {
    const ArduinoCode = `gray.clear_color();\n`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return ArduinoCode;
    }
    return '';
};

//巡线获取灰度值
Blockly.Arduino['LinkBotSensors_ICM_S4S_grayGet'] = function(block) {
    let pinChoice = block.getFieldValue('CHOICE');

    pinChoice='LINE_SENSOR_'+getAfterDot(pinChoice)
    const ArduinoCode = `hw_gray.line_sensor_gray(hw_gray.${pinChoice})`;
    
    if(isCurrentBlockHat(block)){
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    return '';
};

//巡线获取颜色
Blockly.Arduino['LinkBotSensors_ICM_S4S_colorGet'] = function(block) {
    let pinChoice = block.getFieldValue('CHOICE');
    let pinChoice1 = block.getFieldValue('CHOICE1');
    //const code = DICT_studyColor[pinChoice1];
    pinChoice1='LINE_SENSOR_'+getAfterDot(pinChoice1)
    pinChoice ='LINE_SENSOR_'+getAfterDot(pinChoice)

    const ArduinoCode = `hw_gray.line_sensor_color(hw_gray.${pinChoice},hw_gray.${pinChoice1})==1`;
    
    if(isCurrentBlockHat(block)){
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    return '';
};

//巡线获取黑线
Blockly.Arduino['LinkBotSensors_ICM_S4S_blackGet'] = function(block) {
    let pinChoice = block.getFieldValue('CHOICE');
    pinChoice='LINE_SENSOR_'+getAfterDot(pinChoice)
    const ArduinoCode = `hw_gray.line_sensor_detect_line(hw_gray.${pinChoice})==1`;
    
    if(isCurrentBlockHat(block)){
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    return '';
};

//#############################################RTC###########################################
//时钟设置日期
Blockly.Arduino['LinkBotSensors_ICM_S4S_rtcSetData'] = function(block) {
    const text1 = Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT');
    const text2 = Blockly.Arduino.valueToCode(block, 'TEXT1',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT1');
    const text3 = Blockly.Arduino.valueToCode(block, 'TEXT2',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT2');

    const ArduinoCode = `hw_main_board.rtc_set_date(${text1},${text2},${text3});\n`;
    
    if(isCurrentBlockHat(block)){
        return ArduinoCode;
    }
    return '';
};

//时钟设置时间
Blockly.Arduino['LinkBotSensors_ICM_S4S_rtcSetTime'] = function(block) {
    const text1 = Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT');
    const text2 = Blockly.Arduino.valueToCode(block, 'TEXT1',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT1');
    const text3 = Blockly.Arduino.valueToCode(block, 'TEXT2',Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT2');

    const ArduinoCode = `hw_main_board.rtc_set_time(${text1},${text2},${text3});\n`;
    
    if(isCurrentBlockHat(block)){
        return ArduinoCode;
    }
    return '';
};

//获取日期
Blockly.Arduino['LinkBotSensors_ICM_S4S_rtcGetData'] = function(block) {
    let pinChoice = block.getFieldValue('CHOICE');
    //const code = DICT_rtcData[pinChoice];
    pinChoice='RTC_'+getAfterDot(pinChoice)
    const ArduinoCode = `hw_main_board.rtc_get(hw_main_board.${pinChoice})`;
    
    if(isCurrentBlockHat(block)){
        return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    return '';
};

//获取时间
Blockly.Arduino['LinkBot_ICM_S4S_rtcGetTime'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    //const code = DICT_rtcTime[pinChoice];

    const ArduinoCode = `mainBoard.rtc_get_time(${pinChoice})`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return [ArduinoCode, Blockly.Arduino.ORDER_NONE];
    }
    return '';
};



