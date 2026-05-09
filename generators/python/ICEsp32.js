'use strict';

goog.provide('Blockly.Python.UIEditor');
goog.require('Blockly.Python');

/**
 * 
 * @param {UI编辑器模块生成的代码} 
 * @returns 
 */
//设置背景色
Blockly.Python['UIEditor_setScreenColor'] = function(block) {
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');;

    const pythonCode = `bk.set_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标题文本
Blockly.Python['UIEditor_setTitleText'] = function(block) {
    const TITLE = block.getFieldValue('TITLE');
    const TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);

    const pythonCode = `${TITLE}.set_text(${TEXT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标题文本颜色
Blockly.Python['UIEditor_setTitleColor'] = function(block) {
    const TITLE = block.getFieldValue('TITLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${TITLE}.set_text_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标题背景颜色
Blockly.Python['UIEditor_setTitleBackgroundColor'] = function(block) {
    const TITLE = block.getFieldValue('TITLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${TITLE}.set_background_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置字体大小
Blockly.Python['UIEditor_setTitleFontSize'] = function(block) {
    const TITLE = block.getFieldValue('TITLE');
    const SIZE = block.getFieldValue('SIZE');

    const pythonCode = `${TITLE}.set_text_size(${SIZE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标签文本
Blockly.Python['UIEditor_setLabelText'] = function(block) {
    const LABEL = block.getFieldValue('LABEL');
    const TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);

    const pythonCode = `${LABEL}.set_text(${TEXT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标签位置
Blockly.Python['UIEditor_setLabelPosition'] = function(block) {
    const LABEL = block.getFieldValue('LABEL');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${LABEL}.set_pos(${X},${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标签位置-X
Blockly.Python['UIEditor_setLabelPositionX'] = function(block) {
    const LABEL = block.getFieldValue('LABEL');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);

    const pythonCode = `${LABEL}.set_x(${X})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标签位置-Y
Blockly.Python['UIEditor_setLabelPositionY'] = function(block) {
    const LABEL = block.getFieldValue('LABEL');
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${LABEL}.set_y(${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标签文本颜色
Blockly.Python['UIEditor_setLabelColor'] = function(block) {
    const LABEL = block.getFieldValue('LABEL');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${LABEL}.set_text_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标签背景颜色
Blockly.Python['UIEditor_setLabelBackgroundColor'] = function(block) {
    const LABEL = block.getFieldValue('LABEL');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${LABEL}.set_background_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标签字体大小
Blockly.Python['UIEditor_setLabelFontSize'] = function(block) {
    const LABEL = block.getFieldValue('LABEL');
    const SIZE = block.getFieldValue('SIZE');

    const pythonCode = `${LABEL}.set_text_size(${SIZE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形大小
Blockly.Python['UIEditor_setRectangleSize'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const WIDTH = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_NONE);
    const HEIGHT = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_NONE);
    const pythonCode = `${RECTANGLE}.set_size(${WIDTH},${HEIGHT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形宽度
Blockly.Python['UIEditor_setRectangleSizeWidth'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const WIDTH = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_NONE);
    const pythonCode = `${RECTANGLE}.set_width(${WIDTH})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形高度
Blockly.Python['UIEditor_setRectangleSizeHeight'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const HEIGHT = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_NONE);
    const pythonCode = `${RECTANGLE}.set_height(${HEIGHT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形位置
Blockly.Python['UIEditor_setRectanglePosition'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${RECTANGLE}.set_pos(${X},${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形位置-X
Blockly.Python['UIEditor_setRectanglePositionX'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);

    const pythonCode = `${RECTANGLE}.set_x(${X})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形位置-Y
Blockly.Python['UIEditor_setRectanglePositionY'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${RECTANGLE}.set_y(${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形颜色
Blockly.Python['UIEditor_setRectangleColor'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${RECTANGLE}.set_background_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形边框颜色
Blockly.Python['UIEditor_setRectangleBorderColor'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${RECTANGLE}.set_border_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置圆形大小
Blockly.Python['UIEditor_setCircleSize'] = function(block) {
    const CIRCLE = block.getFieldValue('CIRCLE');
    const RADIUS = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_NONE);
    const pythonCode = `${CIRCLE}.set_radius(${RADIUS})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};


//设置圆形位置
Blockly.Python['UIEditor_setCirclePosition'] = function(block) {
    const CIRCLE = block.getFieldValue('CIRCLE');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${CIRCLE}.set_pos(${X},${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置圆形位置-X
Blockly.Python['UIEditor_setCirclePositionX'] = function(block) {
    const CIRCLE = block.getFieldValue('CIRCLE');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);

    const pythonCode = `${CIRCLE}.set_x(${X})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置圆形位置-Y
Blockly.Python['UIEditor_setCirclePositionY'] = function(block) {
    const CIRCLE = block.getFieldValue('CIRCLE');
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${CIRCLE}.set_y(${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置圆形颜色
Blockly.Python['UIEditor_setCircleColor'] = function(block) {
    const CIRCLE = block.getFieldValue('CIRCLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${CIRCLE}.set_background_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置圆形边框颜色
Blockly.Python['UIEditor_setCircleBorderColor'] = function(block) {
    const CIRCLE = block.getFieldValue('CIRCLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${CIRCLE}.set_border_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置线条位置
Blockly.Python['UIEditor_setLinePosition'] = function(block) {
    const LINE = block.getFieldValue('LINE');
    const X1 = Blockly.Python.valueToCode(block, 'X1', Blockly.Python.ORDER_NONE);
    const Y1 = Blockly.Python.valueToCode(block, 'Y1', Blockly.Python.ORDER_NONE);
    const X2 = Blockly.Python.valueToCode(block, 'X2', Blockly.Python.ORDER_NONE);
    const Y2 = Blockly.Python.valueToCode(block, 'Y2', Blockly.Python.ORDER_NONE);

    const pythonCode = `${LINE}.set_pos(${X1},${Y1},${X2},${Y2})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置线条颜色
Blockly.Python['UIEditor_setLineColor'] = function(block) {
    const LINE = block.getFieldValue('LINE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${LINE}.set_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮文本
Blockly.Python['UIEditor_setButtonText'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);

    const pythonCode = `${BUTTON}.set_text(${TEXT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮大小
Blockly.Python['UIEditor_setButtonSize'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const WIDTH = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_NONE);
    const HEIGHT = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_NONE);
    const pythonCode = `${BUTTON}.set_size(${WIDTH},${HEIGHT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮宽度
Blockly.Python['UIEditor_setButtonSizeWidth'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const WIDTH = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_NONE);
    const pythonCode = `${BUTTON}.set_width(${WIDTH})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮高度
Blockly.Python['UIEditor_setButtonSizeHeight'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const HEIGHT = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_NONE);
    const pythonCode = `${BUTTON}.set_height(${HEIGHT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮位置
Blockly.Python['UIEditor_setButtonPosition'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${BUTTON}.set_pos(${X},${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮位置-X
Blockly.Python['UIEditor_setButtonPositionX'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);

    const pythonCode = `${BUTTON}.set_x(${X})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮位置-Y
Blockly.Python['UIEditor_setButtonPositionY'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${BUTTON}.set_y(${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮颜色
Blockly.Python['UIEditor_setButtonColor'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${BUTTON}.set_background_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮文本颜色
Blockly.Python['UIEditor_setButtonTextColor'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${BUTTON}.set_text_color(${COLOR})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮字体大小
Blockly.Python['UIEditor_setButtonFontSize'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const SIZE = block.getFieldValue('SIZE');

    const pythonCode = `${BUTTON}.set_text_size(${SIZE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//当按钮被点击
Blockly.Python['UIEditor_whenButtonClicked'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');

    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    console.log(nextBlock)
    code = Blockly.Python.scrub_(block, '');
    console.log('aaaa',code)
    const pythonCode = `def ${BUTTON}_clicked_event(event_struct):
    print("clicked")
def ${BUTTON}_event_handler(event_struct):
    event = event_struct.get_code()
    if event == btn1.short_clicked:
        ${BUTTON}_short_clicked_event(event_struct)
    if event == btn1.clicked:
        ${BUTTON}_clicked_event(event_struct)
    if event == btn1.pressed:
        ${BUTTON}_pressed_event(event_struct)
    if event == btn1.released:
        ${BUTTON}_released_event(event_struct)
    if event == btn1.long_pressed:
        ${BUTTON}_long_pressed_event(event_struct)
    return

${BUTTON}.set_callback(${BUTTON}_event_handler)\n`;

    console.log(pythonCode)


    Blockly.Python.definitions_[`${BUTTON}`] = pythonCode;
    // return pythonCode
    return ''
};
