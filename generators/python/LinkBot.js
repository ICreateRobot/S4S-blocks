'use strict';

goog.provide('Blockly.Python.LinkBot');
goog.require('Blockly.Python');


//#############################################舵机###########################################
//控制舵机
Blockly.Python['LinkBotActuators_ICM_S4S_servo'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `servo.set_angle(${pinChoice},${pinText})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};
Blockly.Python['LinkBotActuators_ICM_S4S_servoRelease'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    
    const pythonCode = `servo.release(${pinChoice})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

Blockly.Python['LinkBotActuators_LinkBot_continuous_servo'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `servo.set_speed(${pinChoice},${pinText})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};
Blockly.Python['LinkBotActuators_LinkBot_continuous_servoStop'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    
    const pythonCode = `servo.stop(${pinChoice})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

//#############################################电机###########################################
//电机 端口 转向 NUM 类型
Blockly.Python['LinkBotActuators_ICM_S4S_motorRunType'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const DIVERSION = block.getFieldValue('DIVERSION');
    const TYPE = block.getFieldValue('TYPE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `motors.run_for(${CHOICE},${DIVERSION},${NUM},${TYPE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 电机 端口 转向
Blockly.Python['LinkBotActuators_ICM_S4S_motorRunDiv'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const DIVERSION = block.getFieldValue('DIVERSION');
    
    const pythonCode = `motors.start(${CHOICE},${DIVERSION})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 电机停止 端口
Blockly.Python['LinkBotActuators_ICM_S4S_motorStop'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `motors.stop(${CHOICE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 电机设置 端口 速度
Blockly.Python['LinkBotActuators_ICM_S4S_motorSetSpeed'] = function(block) {
  const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `motors.set_speed(${CHOICE},${NUM})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 电机获取 位置
Blockly.Python['LinkBotActuators_ICM_S4S_motorGetPos'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `motors.position(${CHOICE})`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE]
    }
    return "";
};

// 电机获取 速度
Blockly.Python['LinkBotActuators_ICM_S4S_motorGetSpeed'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `motors.speed(${CHOICE})`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE]
    }
    return "";
};

// 电机设置 端口 相对位置为 0
Blockly.Python['LinkBotActuators_ICM_S4S_motorSetPos'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `motors.reset_position(${CHOICE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};
// 电机 端口 RPM
Blockly.Python['LinkBotActuators_ICM_S4S_motorRunRPM'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `motors.start_rpm(${CHOICE},${NUM})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};
// 电机获取 端口 RPM
Blockly.Python['LinkBotActuators_ICM_S4S_motorGetRPM'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    
    const pythonCode = `motors.rpm(${CHOICE})`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE]
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
function isCurrentBlockHat(currentBlock){
    let parent = currentBlock;
    let hatBlock='event_when'
    while (parent.getParent()) {
        parent = parent.getParent();
    }
    if (parent.type === hatBlock || parent.type === 'procedures_definition') {
        return true;
    }else{
        return false
    }
}
//#############################################运动###########################################
// 设置双电机端口
Blockly.Python['LinkBot_ICM_S4S_MovSetPin'] = function(block) {
    const P1 = block.getFieldValue('P1');
    const P2 = block.getFieldValue('P2');
    
    const pythonCode = `movement.set_motors(${P1},${P2})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 双电机开始移动
Blockly.Python['LinkBot_ICM_S4S_MovRun'] = function(block) {
    const TYPE = block.getFieldValue('TYPE');
    
    const pythonCode = `movement.start(${TYPE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 双电机移动指定秒数
Blockly.Python['LinkBot_ICM_S4S_MovRunSec'] = function(block) {
    const TYPE = block.getFieldValue('TYPE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    const MODE = block.getFieldValue('MODE');
    
    const pythonCode = `movement.move(${TYPE},${NUM},${MODE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 双电机停止
Blockly.Python['LinkBot_ICM_S4S_MovStop'] = function(block) {
    const pythonCode = `movement.stop()\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 双电机统一设置动力
Blockly.Python['LinkBot_ICM_S4S_MovSetPowAll'] = function(block) {
    const NUM =Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `movement.set_speed(${NUM})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

// 双电机分别设置动力
Blockly.Python['LinkBot_ICM_S4S_MovSetPow'] = function(block) {
    const P1 = Blockly.Python.valueToCode(block, 'P1', Blockly.Python.ORDER_NONE);
    const P2 = Blockly.Python.valueToCode(block, 'P2', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `movement.drive(${P1},${P2})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};

Blockly.Python['LinkBot_ICM_S4S_MovSetPowMode'] = function(block) {
    const P1 = Blockly.Python.valueToCode(block, 'P1', Blockly.Python.ORDER_NONE);
    const P2 = Blockly.Python.valueToCode(block, 'P2', Blockly.Python.ORDER_NONE);
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    const MODE = block.getFieldValue('MODE');
    
    const pythonCode = `movement.drive_for(${P1},${P2},${NUM},${MODE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return "";
};


//#############################################氛围灯###########################################
//氛围灯
Blockly.Python['LinkBotActuators_ICM_S4S_ambient'] = function(block) {
    let color= Blockly.Python.valueToCode(block, 'COL',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COL');
    const [r, g, b] = color.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
   
    const pythonCode = `light.set_color(${r},${g},${b})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
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

//#############################################电池###########################################
Blockly.Python['LinkBotPower_Linkbot_power'] = function(block) {
    
    const pythonCode = `device.battery()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE]
    }
    return "";
};
Blockly.Python['LinkBotPower_Linkbot_power_external'] = function(block) {
    
    const pythonCode = `device.voltage()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE]
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
Blockly.Python['LinkBotSensors_ICM_S4S_voice'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pythonCode = `voice.recognized('${pinChoice}')`;
    
    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//#############################################超声波###########################################
//超声波
Blockly.Python['LinkBotSensors_ICM_S4S_ultrGet'] = function(block) {
    const TYPE = block.getFieldValue('TYPE');
    const pythonCode = `ultrasonic.get_distance(${TYPE})`;
    
    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

// 超声波判断
Blockly.Python['LinkBotSensors_ICM_S4S_ultrGetLog'] = function(block) {
    const TYPE = block.getFieldValue('TYPE');
    const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ultrasonic.get_distance(${TYPE}) ${CHOICE} ${NUM}`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//超声波灯
Blockly.Python['LinkBotActuators_ICM_S4S_ultrSet'] = function(block) {
    let color= Blockly.Python.valueToCode(block, 'COL',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COL');
    const [r, g, b] = color.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
   
    const pythonCode = `ultrasonic.set_color(${r},${g},${b})\n`;
    
    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//#############################################巡线###########################################
//灰度学习
Blockly.Python['LinkBotSensors_ICM_S4S_setMode'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const pythonCode = `line_sensor.learn(${CHOICE})\n`;
    
    if(isCurrentBlockHat(block)){
        return pythonCode
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
Blockly.Python['LinkBotSensors_ICM_S4S_grayGet'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');

    const pythonCode = `line_sensor.gray(${pinChoice})`;
    
    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//巡线获取颜色
Blockly.Python['LinkBotSensors_ICM_S4S_colorGet'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinChoice1 = block.getFieldValue('CHOICE1');
    //const code = DICT_studyColor[pinChoice1];

    const pythonCode = `line_sensor.color(${pinChoice},${pinChoice1})`;
    
    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//巡线获取黑线
Blockly.Python['LinkBotSensors_ICM_S4S_blackGet'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');

    const pythonCode = `line_sensor.detect_line(${pinChoice})`;
    
    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//#############################################RTC###########################################
//时钟设置日期
Blockly.Python['LinkBotSensors_ICM_S4S_rtcSetData'] = function(block) {
    const text1 = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    const text2 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const text3 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);

    const pythonCode = `rtc.set_date(${text1},${text2},${text3})\n`;
    
    if(isCurrentBlockHat(block)){
        return pythonCode;
    }
    return '';
};

//时钟设置时间
Blockly.Python['LinkBotSensors_ICM_S4S_rtcSetTime'] = function(block) {
    const text1 = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    const text2 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const text3 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);

    const pythonCode = `rtc.set_time(${text1},${text2},${text3})\n`;
    
    if(isCurrentBlockHat(block)){
        return pythonCode;
    }
    return '';
};

//获取日期
Blockly.Python['LinkBotSensors_ICM_S4S_rtcGetData'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    //const code = DICT_rtcData[pinChoice];

    const pythonCode = `rtc.get(${pinChoice})`;
    
    if(isCurrentBlockHat(block)){
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



