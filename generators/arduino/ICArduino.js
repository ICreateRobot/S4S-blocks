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

goog.provide('Blockly.Arduino.ICArduino');

goog.require('Blockly.Arduino');


// Blockly.Arduino['arduino_pin_setPinMode'] = function(block) {
//   var arg0 = block.getFieldValue('PIN') || '0';
//   var arg1 = block.getFieldValue('MODE') || 'INPUT';
//   var code = "pinMode(" + arg0 + ", " + arg1 + ");;\n";
//   return code;
// };

// Blockly.Arduino['arduino_pin_setDigitalOutput'] = function(block) {
//   var arg0 = block.getFieldValue('PIN') || '0';
//   var arg1 = Blockly.Arduino.valueToCode(block, 'LEVEL', Blockly.Arduino.ORDER_NONE) || 'LOW';
//   var code = "digitalWrite(" + arg0 + ", " + arg1 + ");;\n";
//   return code;
// };

//初始化oled
Blockly.Arduino['ArduinoS4S_ICA_S4S_oledInit'] = function(block) {
  var code = "hw_esp_oled.init();\n";
  return code;
};
//清空oled
Blockly.Arduino['ArduinoS4S_ICA_S4S_clearOled'] = function(block) {
    var code = "hw_esp_oled.clear_screen();\n";
    return code;
};
//设置文字大小
Blockly.Arduino['ArduinoS4S_ICA_S4S_textSize'] = function(block) {
  var NUM = block.getFieldValue('NUM')
  var code =`hw_esp_oled.set_text_size(${Number(NUM)});\n`;
  return code;
};
//设置文字位置
Blockly.Arduino['ArduinoS4S_ICA_S4S_setTextXY'] = function(block) {
    let X = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'X');
    let Y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'Y');
    let TEXT = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_NONE);
    var code =`hw_esp_oled.print(${X},${Y},${TEXT});\n`;
    return code;
};
//绘制像素点
Blockly.Arduino['ArduinoS4S_ICA_S4S_drawPixel'] = function(block) {
    let X = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'X');
    let Y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'Y');
    var code =`hw_esp_oled.draw_pixel(${X},${Y});\n`;
    return code;
};
//绘制线条
Blockly.Arduino['ArduinoS4S_ICA_S4S_drawLine'] = function(block) {
    let X1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'X1');
    let Y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'Y1');
    let X2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'X2');
    let Y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'Y2');
    var code =`hw_esp_oled.draw_line(${X1},${Y1},${X2},${Y2});\n`;
    return code;
};
//绘制矩形
Blockly.Arduino['ArduinoS4S_ICA_S4S_drawrectAngle'] = function(block) {
    let X = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'X');
    let Y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'X');
    let W = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'W');
    let H = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'H');
    var code =`hw_esp_oled.draw_rect(${X},${Y},${W},${H});\n`;
    return code;
};
//绘制圆形
Blockly.Arduino['ArduinoS4S_ICA_S4S_drawCircle'] = function(block) {
    let X = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'X');
    let Y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'X');
    let R = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'R');
    var code =`hw_esp_oled.draw_circle(${X},${Y},${R});\n`;
    return code;
};
//刷新显示屏
Blockly.Arduino['ArduinoS4S_ICA_S4S_refresh'] = function(block) {
    var code = "hw_esp_oled.refresh();\n";
    return code;
};
//按钮是否被按下
Blockly.Arduino['ArduinoS4S_ICA_S4S_button'] = function(block) {
    var CHOICE = block.getFieldValue('CHOICE')
    var code =`hw_pin.button_pressed() == ${Number(CHOICE)}`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//声音大小
Blockly.Arduino['ArduinoS4S_ICA_S4S_sound'] = function(block) {
    var code =`hw_esp_audio.get_sound_level()`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//开始录音
Blockly.Arduino['ArduinoS4S_ICA_S4S_startRecording'] = function(block) {
    let NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    var code =`hw_esp_audio.start_recording(${NUM});\n`;
    return code;
};
//播放录音
Blockly.Arduino['ArduinoS4S_ICA_S4S_playRecording'] = function(block) {
    var code =`hw_esp_audio.play_recording(1);\n`;
    return code;
};
//停止播放录音
Blockly.Arduino['ArduinoS4S_ICA_S4S_stopPlayRecording'] = function(block) {
    var code =`hw_esp_audio.play_recording(0);\n`;
    return code;
};
//获取音频文件
Blockly.Arduino['ArduinoS4S_ICA_S4S_getAudioFile'] = function(block) {
    let TEXT = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT');
    var code =`hw_esp_audio.set_audio_file(${TEXT});\n`;
    return code;
};
//设置音量大小
Blockly.Arduino['ArduinoS4S_ICA_S4S_setVolume'] = function(block) {
    let NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    var code =`hw_esp_audio.set_volume(${NUM});\n`;
    return code;
};
//播放音频
Blockly.Arduino['ArduinoS4S_ICA_S4S_playAudio'] = function(block) {
    var code =`hw_esp_audio.play_audio(1);\n`;
    return code;
};
//停止播放音频
Blockly.Arduino['ArduinoS4S_ICA_S4S_stopAudio'] = function(block) {
    var code =`hw_esp_audio.play_audio(0);\n`;
    return code;
};
//设置数字引脚
Blockly.Arduino['ArduinoS4S_ICA_S4S_setDigital'] = function(block) {
    var PIN = block.getFieldValue('PIN')
    var CHOICE = block.getFieldValue('CHOICE')
    var code =`hw_pin.digitalWrite("${PIN}",${Number(CHOICE)});\n`;
    return code
};
//设置pwm引脚
Blockly.Arduino['ArduinoS4S_ICA_S4S_setPwm'] = function(block) {
    var PIN = block.getFieldValue('PIN')
    let NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    var code =`hw_pin.analogWrite("${PIN}",${NUM});\n`;
    return code
};
//读取数字引脚
Blockly.Arduino['ArduinoS4S_ICA_S4S_readDigitalPin'] = function(block) {
    var PIN = block.getFieldValue('PIN')
    var code =`hw_pin.digitalRead("${PIN}")==1`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//读取模拟引脚
Blockly.Arduino['ArduinoS4S_ICA_S4S_readAnalogPin'] = function(block) {
    var PIN = block.getFieldValue('PIN')
    var code =`hw_pin.analogRead("${PIN}")`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//设置输入上拉/下拉
Blockly.Arduino['ArduinoS4S_ICA_S4S_setInputPull'] = function(block) {
    var PIN = block.getFieldValue('PIN')
    var CHOICE = block.getFieldValue('CHOICE')
    var code =`hw_pin.pinMode("${PIN}",${Number(CHOICE)});\n`;
    return code
};
//读取脉冲
Blockly.Arduino['ArduinoS4S_ICA_S4S_readPulse'] = function(block) {
    var CHOICE = block.getFieldValue('CHOICE')
    var LEVEL = block.getFieldValue('LEVEL')
    let NUM = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'NUM');
    console.log('ArduinoS4S_ICA_S4S_readPulse:')
    console.log(NUM)
    var code =`hw_pin.pulseIn("${CHOICE}",${Number(LEVEL)},${NUM})`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//获取定时器
Blockly.Arduino['ArduinoS4S_ICA_S4S_getTimer'] = function(block) {
    var code =`hw_sys.tick_get()`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//重置定时器
Blockly.Arduino['ArduinoS4S_ICA_S4S_resetTimer'] = function(block) {
    var code =`hw_sys.tick_reset();\n`;
    return code
};
//串口写入文本
Blockly.Arduino['ArduinoS4S_ICA_S4S_writeText'] = function(block) {
    let TEXT = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_NONE)|| Blockly.Arduino.statementToCode(block,'TEXT');
    var code =`if_uart_comm.send_bytes(${TEXT});\n`;
    return code;
};
//读取字节
Blockly.Arduino['ArduinoS4S_ICA_S4S_readableBytes'] = function(block) {
    var code =`if_uart_comm.available()`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//读取单个字节
Blockly.Arduino['ArduinoS4S_ICA_S4S_readByte'] = function(block) {
    var code =`if_uart_comm.read()`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//串口读取字符串
Blockly.Arduino['ArduinoS4S_ICA_S4S_readString'] = function(block) {
    var code =`if_uart_comm.read_string()`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//串口读取直到
Blockly.Arduino['ArduinoS4S_ICA_S4S_readUntil'] = function(block) {
    var CHOICE = block.getFieldValue('CHOICE')
    var code =`if_uart_comm.read_bytes_until('${CHOICE}')`;
    return [code, Blockly.Arduino.ORDER_NONE]
};
//设置波特率
Blockly.Arduino['ArduinoS4S_ICA_S4S_setBaud'] = function(block) {
    var CHOICE = block.getFieldValue('CHOICE')
    var code =`if_uart_comm.config_baud(${Number(CHOICE)});\n`;
    return code;
};