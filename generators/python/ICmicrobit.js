'use strict';

goog.provide('Blockly.Python.MicrobiteIcreateP');
goog.require('Blockly.Python');

//绿旗
Blockly.Python['event_whenflagclicked'] = function(block) {
    return '';
}


//#############################################外设###########################################
//远距离光电
Blockly.Python['MicrobiteIcreateP_ICM_LongRangePhotoelectric'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_digital()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//电位器
Blockly.Python['MicrobiteIcreateP_ICM_Potentiometer'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//灰度传感器
Blockly.Python['MicrobiteIcreateP_ICM_GrayLevel'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//光敏传感器
Blockly.Python['MicrobiteIcreateP_ICM_LightIntensity'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//火焰传感器
Blockly.Python['MicrobiteIcreateP_ICM_Flame'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//水位传感器
Blockly.Python['MicrobiteIcreateP_ICM_WaterLevel'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//可燃气体传感器
Blockly.Python['MicrobiteIcreateP_ICM_GasConcentration'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition' ) {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//土壤湿度传感器
Blockly.Python['MicrobiteIcreateP_ICM_SoilHumidity'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//防水温度传感器
Blockly.Python['MicrobiteIcreateP_ICM_WaterTemp'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//霍尔传感器
Blockly.Python['MicrobiteIcreateP_ICM_hState'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_digital()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//按钮传感器
Blockly.Python['MicrobiteIcreateP_ICM_Button'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_digital()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//超声波传感器
Blockly.Python['MicrobiteIcreateP_ICM_UltrasonicWave'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE1').substring(1);

    const pythonCode = `ICM_ult${DICT_UltrasonicWavePin[pinChoice]}.get()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//检测到摇杆动作
Blockly.Python['MicrobiteIcreateP_ICM_RockerType'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `ICM_joy.${pinChoice}()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//摇杆
Blockly.Python['MicrobiteIcreateP_ICM_Rocker'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `ICM_joy.get_${pinChoice}()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};


//舵机
Blockly.Python['MicrobiteIcreateP_ICM_server'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_ser${pinChoice}.write_angle(${pinText})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      //Blockly.Python.definitions_['import_servos'] = 'import servos';
      return pythonCode;
    }
    return "";
};

//电机
Blockly.Python['MicrobiteIcreateP_ICM_DCmotor'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_dcm${pinChoice}.run(${pinText})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//风扇 1开
Blockly.Python['MicrobiteIcreateP_ICM_Fan'] = function(block) {
    const pinChoice1 = block.getFieldValue('CHOICE1');
    const pinChoice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `pin${pinChoice1.substring(1)}.write_angle(${DICT_LaserOff[pinChoice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      //Blockly.Python.definitions_['import_servos'] = 'import servos';
      return pythonCode;
    }
    return "";
};
//电磁铁 1开
Blockly.Python['MicrobiteIcreateP_ICM_Elecmagnet'] = function(block) {
    const pinChoice1 = block.getFieldValue('CHOICE1');
    const pinChoice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `pin${pinChoice1.substring(1)}.write_angle(${DICT_LaserOff[pinChoice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//读取位置
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_readPos'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.get_absolute_position()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//设置双电机地址
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_setDoubleMotor'] = function(block) {
    const pinChoice1 = block.getFieldValue('CHOICE1');
    const pinChoice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `ICM_smp = servo_motor.motor_pair(addr1=servo_motor.${DICT_MotorPin[pinChoice1]}, addr2=servo_motor.${DICT_MotorPin[pinChoice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//双电机转秒
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_DoubleRunSecond'] = function(block) {
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_smp.move_for_time(${Text1}, ${Text2},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//双电机转度
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_DoubleRunDegree'] = function(block) {
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_smp.move_to_relative_position(${Text1}, ${Text2},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//双电机转
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_DoubleRun'] = function(block) {
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_smp.move(${Text1}, ${Text2})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//单电机转度
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_RunDegree'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.run_to_relative_position(${Text1},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//单电机转秒
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_RunSecond'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.run_for_time(${Text1},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//单电机转到指定位置
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_RunPos'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.run_to_absolute_position(${Text1},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//单电机转
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_Run'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.run(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};


//LED
Blockly.Python['MicrobiteIcreateP_ICM_yellowLED'] = function(block) {
    const Choice1 = block.getFieldValue('CHOICE1');
    const Choice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `pin${Choice1.substring(1)}.write_digital(${DICT_LEDOff[Choice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//设置灯环亮度
Blockly.Python['MicrobiteIcreateP_ICM_setLRLight'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_light${DICT_LightRingPin[Choice]}.light(${Text2})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//红：绿：蓝
Blockly.Python['MicrobiteIcreateP_ICM_createColor'] = function(block) {
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `(${Text1},${Text2},${Text3})`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];;
    }
    return "";
};

Blockly.Python['LRColorD'] = function(block) {
    console.log(1111)
    return [222, Blockly.Python.ORDER_ATOMIC];
};

//灯环显示颜色
Blockly.Python['MicrobiteIcreateP_ICM_LRColor'] = function(block) {
    const Choice1 = block.getFieldValue('CHOICE1');
    let Choice2 = block.getFieldValue('LRColorD');
    
    // 处理颜色元组或映射
    const isColorTuple = /^$\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*$$/.test(Choice2);
  
    if (!isColorTuple && DICT_LightRingColor[Choice2]) {
      Choice2 = DICT_LightRingColor[Choice2];
    }

    const pythonCode = `ICM_light${DICT_LightRingPin[Choice1]}.color(${Choice2})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//初始化OLED
Blockly.Python['MicrobiteIcreateP_ICM_OLEDini'] = function(block) {
    const pythonCode = `oled_display = oled.oled()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//显示文本在
Blockly.Python['MicrobiteIcreateP_ICM_OLEDshow'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X',Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y',Blockly.Python.ORDER_NONE);
    const text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    const color = block.getFieldValue('COLOR');
    
    const pythonCode = `oled_display.set_text(${x}, ${y}, ${text}, ${DICT_OLEDColor[color]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//清除OLED
Blockly.Python['MicrobiteIcreateP_ICM_OLEDclear'] = function(block) {
    const pythonCode = `oled_display.clear_screen()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//激光模块
Blockly.Python['MicrobiteIcreateP_ICM_Laser'] = function(block) {
    const Choice1 = block.getFieldValue('CHOICE1');
    const Choice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `pin${Choice1.substring(1)}.write_digital(${DICT_LaserOff[Choice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//录音模块
Blockly.Python['MicrobiteIcreateP_ICM_Recording'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    
    const pythonCode = `ICMBP_rec.voice(recording.${DICT_Recording[Choice]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//########################################################################################



let DICT_LEDOff = {'打开':"0",'关闭':"1", 'On':"0", 'Off':"1"}
let DICT_LaserOff = {'打开':"1",'关闭':"0", 'On':"1", 'Off':"0"}
let DICT_LightRingPin = {'P0':'P13P0','P1':'P14P1','P2':'P15P2','P8':'P7P8','P12':'P9P12','P16':'P10P16'} // 无需修改
let DICT_LightRingColor=  {
    '红色':'(255, 0, 0)', 'Red':'(255, 0, 0)',
    '橙色':'(255, 165, 0)', 'Orange':'(255, 165, 0)',
    '黄色':'(255, 255, 0)', 'Yellow':'(255, 255, 0)',
    '绿色':'(0, 255, 0)', 'Green':'(0, 255, 0)',
    '青色':'(0, 255, 255)', 'Cyan':'(0, 255, 255)',
    '蓝色':'(0, 0, 255)', 'Blue':'(0, 0, 255)',
    '紫色':'(128, 0, 128)', 'Purple':'(128, 0, 128)',
    '白色':'(255, 255, 255)', 'White':'(255, 255, 255)',
    '黑色':'(0, 0, 0)', 'Black':'(0, 0, 0)'
}
let DICT_Recording = {
    '机枪扫射':'GUNSHOT', 'Machine Gun Fire':'GUNSHOT',
    '激光发射':'LASER', 'Laser Shoot':'LASER',
    '赛车加速':'MOTORCYCLE', 'Racing Car Acceleration':'MOTORCYCLE',
    '战争开始':'WARBEGIN', 'War Begins':'WARBEGIN',
    '倒计时':'COUNTDOWN', 'Countdown':'COUNTDOWN',
    '录音':'PLAYRECORDING', 'Recording':'PLAYRECORDING'
}
let DICT_RockerType = {
    '上':'is_up', 'Up':'is_up',
    '下':'is_down', 'Down':'is_down',
    '左':'is_left', 'Left':'is_left',
    '右':'is_right', 'Right':'is_right'
}
let DICT_MotorPin = {
    '红':'LIGHT_RED', 'Red':'LIGHT_RED',
    '绿':'LIGHT_GREEN', 'Green':'LIGHT_GREEN',
    '蓝':'LIGHT_BLUE', 'Blue':'LIGHT_BLUE',
    '黄':'LIGHT_YELLOW', 'Yellow':'LIGHT_YELLOW'
}
let DICT_UltrasonicWavePin = {'(P13,P0)':'0','(P14,P1)':'1','(P9,P12)':'4','(P15,P2)':'2'} // 无需修改
let DICT_OLEDColor = {
    '白底黑字':'0', 'White Background with Black Text':'0',
    '黑底白字':'1', 'Black Background with White Text':'1'
}







//#############################################主板###########################################
//显示数字
Blockly.Python['MicrobitIcreate_ICM_showNumber'] = function(block) {
  const num =  Blockly.Python.valueToCode(block, 'NUM',Blockly.Python.ORDER_NONE);
  
  const pythonCode = `display.show(${num})\n`;

  let parent = block;
  while (parent.getParent()) {
    parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
    return pythonCode;
  }
  return "";
};

//显示自定义图像
Blockly.Python['MicrobitIcreate_ICM_showSelfImage'] = function(block) {
    //let matrix = block.getFieldValue('MATRIX').replace(/1/g, '9');// 1替换成9
    let matrix = Blockly.Python.valueToCode(block, 'MATRIX',Blockly.Python.ORDER_NONE).replace(/1/g, '9');
    let result = matrix.match(/.{1,5}/g).join(':');//每5个字符分割一次
    
    return `display.show(Image("${result}"))\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//显示图像
Blockly.Python['MicrobitIcreate_ICM_showImage'] = function(block) {
  const img = block.getFieldValue('IMAGE');
  
  const pythonCode = `display.show(Image.${img})\n`;

  let parent = block;
  while (parent.getParent()) {
    parent = parent.getParent();
  }
  if (parent.type=='event_when' || parent.type=='procedures_definition') {
    return pythonCode;
  }
  return "";
};

//显示字符串
Blockly.Python['MicrobitIcreate_ICM_showString'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `display.show(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//显示图像
Blockly.Python['MicrobitIcreate_ICM_showArrow'] = function(block) {
    const img = block.getFieldValue('IMAGE');
    
    const pythonCode = `display.show(${img})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//绘图 x y
Blockly.Python['MicrobitIcreate_ICM_showPlot'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X',Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `display.set_pixel(${x},${y},9)\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//切换 x y
Blockly.Python['MicrobitIcreate_ICM_showToggle'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X',Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `toggle(${x},${y})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//取消绘图 x y
Blockly.Python['MicrobitIcreate_ICM_showUnplot'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X',Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `display.set_pixel(${x},${y},0)\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//点亮 x y
Blockly.Python['MicrobitIcreate_ICM_showPoint'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X',Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `display.get_pixel(${x},${y})`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};



//滚动显示字符串
Blockly.Python['MicrobitIcreate_ICM_scrollShowString'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `display.scroll(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//设置像素
Blockly.Python['MicrobitIcreate_ICM_setPixel'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X',Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y',Blockly.Python.ORDER_NONE)
    const l = Blockly.Python.valueToCode(block, 'L',Blockly.Python.ORDER_NONE)
    
    const pythonCode = `display.set_pixel(${x},${y},${l})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//清除显示
Blockly.Python['MicrobitIcreate_ICM_showClear'] = function(block) {
    const pythonCode = `display.clear()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};


//按钮
Blockly.Python['MicrobitIcreate_ICM_buttonPressed'] = function(block) {
    const choice =  block.getFieldValue('CHOICE');
    let code='button_a.is_pressed() and button_b.is_pressed()';

    if( choice == 'A'){
        code = `button_a.is_pressed()`
    }else if(choice == 'B'){
      code = `button_a.is_pressed()`
    }
    
    const pythonCode = `${code}`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

//引脚按下
Blockly.Python['MicrobitIcreate_ICM_pinPressed'] = function(block) {
    const choice =  block.getFieldValue('CHOICE');
    
    const pythonCode = `pin${choice[choice.length - 1]}.is_touched()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

//手势
Blockly.Python['MicrobitIcreate_ICM_accelerometerGesture'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    const pythonCode = `accelerometer.was_gesture("${Choice}")`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

//徽标
Blockly.Python['MicrobitIcreate_ICM_logoPressed'] = function(block) {
    const pythonCode = `pin_logo.is_touched()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

//亮度
Blockly.Python['MicrobitIcreate_ICM_light'] = function(block) {
    const pythonCode = `display.read_light_level()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

//声音
Blockly.Python['MicrobitIcreate_ICM_soundLevel'] = function(block) {
    const pythonCode = `microphone.sound_level()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

//指南针朝向
Blockly.Python['MicrobitIcreate_ICM_compassHeading'] = function(block) {
  const pythonCode = `compass.heading()`;

  let parent = block;
  while (parent.getParent()) {
    parent = parent.getParent();
  }
  if ( parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return "";
};


//温度
Blockly.Python['MicrobitIcreate_ICM_temperature'] = function(block) {
    const pythonCode = `temperature()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};


//指南针校准
Blockly.Python['MicrobitIcreate_ICM_compassCalibrate'] = function(block) {
    const pythonCode = `compass.calibrate()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return pythonCode;
    }
    return "";
};

//磁力
Blockly.Python['MicrobitIcreate_ICM_magnetStrength'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    const pythonCode = `compass.${DICT_magnetStrengthPlay[Choice]}()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};

//加速度
Blockly.Python['MicrobitIcreate_ICM_accelerometer'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    let code='';
    if(Choice == 'X'){
        code = "get_x"
    }else if(Choice == 'Y'){
        code = "get_y"
    }else if(Choice == 'Z'){
        code = "get_z"
    }
    const pythonCode = `accelerometer.${code}()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};


//播放音乐
Blockly.Python['MicrobitIcreate_ICM_musicPlay'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    
    const pythonCode = `music.play(music.${DICT_musicPlay[Choice]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//设置播放速度
Blockly.Python['MicrobitIcreate_ICM_setTempo'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `music.set_tempo(bpm=${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//音调 频率持续播放
Blockly.Python['MicrobitIcreate_ICM_musicPitch'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `music.pitch(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//语音 说
Blockly.Python['MicrobitIcreate_ICM_speechSay'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `speech.say(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//停止持续播放
Blockly.Python['MicrobitIcreate_ICM_musicStop'] = function(block) {
    const pythonCode = `music.stop()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//播放富有表现力的声音
Blockly.Python['MicrobitIcreate_ICM_audioPlay'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    
    const pythonCode = `audio.play(Sound.${DICT_audioPlay[Choice]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//音量
Blockly.Python['MicrobitIcreate_ICM_setVolume'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `set_volume(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//关闭、启用扬声器
Blockly.Python['MicrobitIcreate_ICM_speakerOff'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    const pythonCode = `speaker.${DICT_speakerPlay[Choice]}()\n`;
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};


//串口打印
Blockly.Python['MicrobitIcreate_ICM_uartWrite'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);

    const pythonCode = `print(${Text})\n`;
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//串口读取
Blockly.Python['MicrobitIcreate_ICM_uartRead'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    const pythonCode = `uartReadLine() == b${Text}`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if ( parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};



//数字写入
Blockly.Python['MicrobitIcreate_ICM_digitalWrite'] = function(block) {
  const choice = block.getFieldValue('CHOICE');
  const Text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);
  const pythonCode = `pin${choice}.write_digital(${Text})\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
      return pythonCode;
  }
  return "";
};

//数字读取
Blockly.Python['MicrobitIcreate_ICM_digitalRead'] = function(block) {
  const choice = block.getFieldValue('CHOICE');

  const pythonCode = `pin${choice}.read_digital()`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return "";
};

//模拟写入
Blockly.Python['MicrobitIcreate_ICM_analogWrite'] = function(block) {
  const choice = block.getFieldValue('CHOICE');
  const Text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);

  const pythonCode = `pin${choice}.write_analog(${Text})\n`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
      return pythonCode;
  }
  return "";
};

//模拟读取
Blockly.Python['MicrobitIcreate_ICM_analogRead'] = function(block) {
  const choice = block.getFieldValue('CHOICE');
  
  const pythonCode = `pin${choice}.read_analog()`;
  
  let parent = block;
  while (parent.getParent()) {
      parent = parent.getParent();
  }
  if (parent.type === 'event_when' || parent.type === 'procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
  }
  return "";
};



//########################################################################################


let DICT_musicPlay = {
    '鼓点叭叮': "BA_DING",
    'Drum Beat': "BA_DING",
    '反面角色': "BADDY",
    'Villain': "BADDY",
    '生日快乐': "BIRTHDAY",
    'Happy Birthday': "BIRTHDAY",
    '布鲁斯': "BLUES",
    'Blues': "BLUES",
    '追逐': "CHASE",
    'Chase': "CHASE",
    '哒哒哒噔': "DADADADUM",
    'Da Da Da Dum': "DADADADUM",
    '演艺人': "ENTERTAINER",
    'Entertainer': "ENTERTAINER",
    '葬礼': "FUNERAL",
    'Funeral': "FUNERAL",
    '放克音乐': "FUNK",
    'Funk': "FUNK",
    '向下跳': "JUMP_DOWN",
    'Jump Down': "JUMP_DOWN",
    '向上跳': "JUMP_UP",
    'Jump Up': "JUMP_UP",
    '彩虹猫': "NYAN",
    'Nyan Cat': "NYAN",
    '欢乐颂': "ODE",
    'Ode to Joy': "ODE",
    '能力减弱': "POWER_DOWN",
    'Power Down': "POWER_DOWN",
    '能力增强': "POWER_UP",
    'Power Up': "POWER_UP",
    '前奏': "PRELUDE",
    'Prelude': "PRELUDE",
    '笑点': "PUNCHLINE",
    'Punchline': "PUNCHLINE",
    'PYTHON': "PYTHON",
    'Python': "PYTHON",
    '铃声': "RINGTONE",
    'Ringtone': "RINGTONE",
    '哇哇哇哇': "WAWAWAWAA",
    'Wah Wah Sound': "WAWAWAWAA",
    '婚礼': "WEDDING",
    'Wedding': "WEDDING"
}

let DICT_audioPlay = {
    '咯咯笑': "GIGGLE",
    'Giggle': "GIGGLE",
    '快乐': "HAPPY",
    'Happy': "HAPPY",
    '你好': "HELLO",
    'Hello': "HELLO",
    '神秘的': "MYSTERIOUS",
    'Mysterious': "MYSTERIOUS",
    '难过': "SAD",
    'Sad': "SAD",
    '滑': "SLIDE",
    'Slide': "SLIDE",
    '飙升': "SOARING",
    'Soaring': "SOARING",
    '弹簧': "SPRING",
    'Spring': "SPRING",
    '闪烁': "TWINKLE",
    'Twinkle': "TWINKLE",
    '打哈欠': "YAWN",
    'Yawn': "YAWN"
}

let DICT_magnetStrengthPlay = {
    'X': "get_x",
    'Y': "get_y",
    'Z': "get_z",
    '强度': "get_field_strength",
    'Intensity': "get_field_strength" // 添加英文键
}

let DICT_speakerPlay = {
    '关闭': "off",
    'Off': "off",
    '打开': "on",
    'On': "on"
}




