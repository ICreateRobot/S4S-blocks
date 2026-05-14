'use strict';

goog.provide('Blockly.Python.UIEditor');
goog.require('Blockly.Python');

function hexColorTo0x(color) {
    if (!color) return '0x000000';

    // 去掉 #
    color = color.replace('#', '');

    // 转大写（可选）
    color = color.toUpperCase();

    return '0x' + color;
}
/**
 * 
 * @param {UI编辑器模块生成的代码} 
 * @returns 
 */
//设置背景色
Blockly.Python['UIEditor_setScreenColor'] = function(block) {
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');;

    const pythonCode = `bk.set_color(${hexColorTo0x(COLOR)})\n`;

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

    const pythonCode = `${TITLE}.set_text_color(${hexColorTo0x(COLOR)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标题背景颜色
Blockly.Python['UIEditor_setTitleBackgroundColor'] = function(block) {
    const TITLE = block.getFieldValue('TITLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${TITLE}.set_background_color(${hexColorTo0x(COLOR)})\n`;

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

    const pythonCode = `${LABEL}.set_text_color(${hexColorTo0x(COLOR)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置标签背景颜色
Blockly.Python['UIEditor_setLabelBackgroundColor'] = function(block) {
    const LABEL = block.getFieldValue('LABEL');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${LABEL}.set_background_color(${hexColorTo0x(COLOR)})\n`;

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

    const pythonCode = `${RECTANGLE}.set_background_color(${hexColorTo0x(COLOR)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置矩形边框颜色
Blockly.Python['UIEditor_setRectangleBorderColor'] = function(block) {
    const RECTANGLE = block.getFieldValue('RECTANGLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${RECTANGLE}.set_border_color(${hexColorTo0x(COLOR)})\n`;

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

    const pythonCode = `${CIRCLE}.set_background_color(${hexColorTo0x(COLOR)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置圆形边框颜色
Blockly.Python['UIEditor_setCircleBorderColor'] = function(block) {
    const CIRCLE = block.getFieldValue('CIRCLE');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${CIRCLE}.set_border_color(${hexColorTo0x(COLOR)})\n`;

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

    const pythonCode = `${LINE}.set_color(${hexColorTo0x(COLOR)})\n`;

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

    const pythonCode = `${BUTTON}.set_background_color(${hexColorTo0x(COLOR)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置按钮文本颜色
Blockly.Python['UIEditor_setButtonTextColor'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${BUTTON}.set_text_color(${hexColorTo0x(COLOR)})\n`;

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
let hiddeBlock=new Set()

const oldScrub = Blockly.Python.scrub_;

Blockly.Python.scrub_ = function(block, code, thisOnly) {


    if (hiddeBlock.has(block)) {
        return '';
    }
    // if (block._generatedByHat) {
    //     return '';
    // }

    return oldScrub.call(this, block, code, thisOnly);
};

const oldWorkspaceToCode = Blockly.Python.workspaceToCode;

Blockly.Python.workspaceToCode = function(workspace) {

    hiddeBlock.clear();

    return oldWorkspaceToCode.call(this, workspace);
};
//当按钮被点击
Blockly.Python['UIEditor_whenButtonClicked'] = function(block) {
    const BUTTON = block.getFieldValue('BUTTON');

    // var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    // console.log(nextBlock)

    hiddeBlock.clear()
    let code = '';

    let currentBlock = block.nextConnection.targetBlock();

    while (currentBlock) {
        // currentBlock._generatedByHat = true;
        hiddeBlock.add(currentBlock)

        let generator = Blockly.Python[currentBlock.type];

        if (generator) {

            let blockCode = generator(currentBlock);

            if (Array.isArray(blockCode)) {
                blockCode = blockCode[0];
            }

            code += blockCode;
        }

        currentBlock = currentBlock.getNextBlock();
    }
    console.log('wwwww',code)
    code = Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    );
    const pythonCode1 = `def ${BUTTON}_clicked_event(event_struct):
    print("clicked")
${code || Blockly.Python.INDENT + '\n'}`
    const pythonCode2=`def ${BUTTON}_event_handler(event_struct):
    event = event_struct.get_code()
    if event == ${BUTTON}.clicked:
        ${BUTTON}_clicked_event(event_struct)
    return

${BUTTON}.set_callback(${BUTTON}_event_handler)\n`;

    // console.log(pythonCode)


    Blockly.Python.topFunctions_.push(pythonCode1);
    Blockly.Python.customFunctions_[`${BUTTON}`] = pythonCode2;
    // return pythonCode
    // return pythonCode
};


//设置开启状态颜色
Blockly.Python['UIEditor_setSwitchOnColor'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${SWITCH}.set_bg_color_checked(${hexColorTo0x(COLOR)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置关闭状态颜色
Blockly.Python['UIEditor_setSwitchOffColor'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${SWITCH}.set_bg_color(${hexColorTo0x(COLOR)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置开关大小
Blockly.Python['UIEditor_setSwitchSize'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const WIDTH = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_NONE);
    const HEIGHT = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_NONE);
    const pythonCode = `${SWITCH}.set_size(${WIDTH},${HEIGHT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置开关宽度
Blockly.Python['UIEditor_setSwitchSizeWidth'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const WIDTH = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_NONE);
    const pythonCode = `${SWITCH}.set_width(${WIDTH})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置开关高度
Blockly.Python['UIEditor_setSwitchSizeHeight'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const HEIGHT = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_NONE);
    const pythonCode = `${SWITCH}.set_height(${HEIGHT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置开关位置
Blockly.Python['UIEditor_setSwitchPosition'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${SWITCH}.set_pos(${X},${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置开关位置-x
Blockly.Python['UIEditor_setSwitchPositionX'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);

    const pythonCode = `${SWITCH}.set_x(${X})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置开关位置-y
Blockly.Python['UIEditor_setSwitchPositionY'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${SWITCH}.set_y(${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置开关状态
Blockly.Python['UIEditor_setSwitchState'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const STATE = block.getFieldValue('STATE');

    const pythonCode = `${SWITCH}.set_state(${STATE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//当开关状态改变
Blockly.Python['UIEditor_whenSwitchChanged'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');
    const STATE = block.getFieldValue('STATE');

    const isChecked = STATE === 'True';
    hiddeBlock.clear()
    let code = '';

    let currentBlock = block.nextConnection.targetBlock();

    while (currentBlock) {
        // currentBlock._generatedByHat = true;
        hiddeBlock.add(currentBlock)

        let generator = Blockly.Python[currentBlock.type];

        if (generator) {

            let blockCode = generator(currentBlock);

            if (Array.isArray(blockCode)) {
                blockCode = blockCode[0];
            }

            code += blockCode;
        }

        currentBlock = currentBlock.getNextBlock();
    }
    console.log('wwwww',code)
    code = Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    );
    console.log('开关状态')
    console.log(STATE)
    const pythonCode1 = `def ${SWITCH}_checked_event(event_struct):
    print("开关打开")
${isChecked? (code || Blockly.Python.INDENT + '\n'):''}`
    const pythonCode2 = `def ${SWITCH}_unchecked_event(event_struct):
    print("开关关闭")
${!isChecked? (code || Blockly.Python.INDENT + '\n'):''}`
    const pythonCode3 = `def ${SWITCH}_event_handler(event_struct):
    event = event_struct.get_code()
    obj = event_struct.get_target_obj()
    if event == ${SWITCH}.value_changed:
        if obj.has_state(${SWITCH}.state_checked):
            ${SWITCH}_checked_event(event_struct)
        else:
            ${SWITCH}_unchecked_event(event_struct)
    return
${SWITCH}.set_callback(${SWITCH}_event_handler)\n`;

    // console.log(pythonCode)


    
    
    if(isChecked){
        Blockly.Python.topFunctions_.push(pythonCode1);
    }else{
        Blockly.Python.topFunctions_.push(pythonCode2);
    }
    Blockly.Python.customFunctions_[`${SWITCH}-callback`] = pythonCode3;
    // return pythonCode
    return ''
};

//获取开关状态
Blockly.Python['UIEditor_getSwitchState'] = function(block) {
    const SWITCH = block.getFieldValue('SWITCH');

    const pythonCode = `${SWITCH}.get_state()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};


//设置滑块颜色
Blockly.Python['UIEditor_setSliderColor'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');
    const COLOR = Blockly.Python.valueToCode(block, 'COLOR',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'COLOR');

    const pythonCode = `${SLIDER}.set_indicator_color(${hexColorTo0x(COLOR)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置滑块大小
Blockly.Python['UIEditor_setSliderSize'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');
    const WIDTH = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_NONE);
    const HEIGHT = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_NONE);
    const pythonCode = `${SLIDER}.set_size(${WIDTH},${HEIGHT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置滑块宽度
Blockly.Python['UIEditor_setSliderSizeWidth'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');
    const WIDTH = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_NONE);
    const pythonCode = `${SLIDER}.set_width(${WIDTH})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置滑块高度
Blockly.Python['UIEditor_setSliderSizeHeight'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');
    const HEIGHT = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_NONE);
    const pythonCode = `${SLIDER}.set_height(${HEIGHT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置滑块位置
Blockly.Python['UIEditor_setSliderPosition'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${SLIDER}.set_pos(${X},${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置滑块位置-x
Blockly.Python['UIEditor_setSliderPositionX'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);

    const pythonCode = `${SLIDER}.set_x(${X})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置滑块位置-y
Blockly.Python['UIEditor_setSliderPositionY'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${SLIDER}.set_y(${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置滑块数值
Blockly.Python['UIEditor_setSliderValue'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');
    const VALUE = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);

    const pythonCode = `${SLIDER}.set_value(${VALUE})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//当滑块数值改变
Blockly.Python['UIEditor_whenSliderChanged'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');

    hiddeBlock.clear()
    let code = '';

    let currentBlock = block.nextConnection.targetBlock();

    while (currentBlock) {
        // currentBlock._generatedByHat = true;
        hiddeBlock.add(currentBlock)

        let generator = Blockly.Python[currentBlock.type];

        if (generator) {

            let blockCode = generator(currentBlock);

            if (Array.isArray(blockCode)) {
                blockCode = blockCode[0];
            }

            code += blockCode;
        }

        currentBlock = currentBlock.getNextBlock();
    }
    console.log('wwwww',code)
    code = Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    );
    const pythonCode1 = `def ${SLIDER}_value_changed_event(event_struct):
    print("${SLIDER} value changed, current value:", ${SLIDER}.get_value())
${code || Blockly.Python.INDENT + '\n'}`

    const pythonCode2=`def ${SLIDER}_event_handler(event_struct):
    event = event_struct.get_code()
    if event == ${SLIDER}.value_changed:
        ${SLIDER}_value_changed_event(event_struct)
    return

${SLIDER}.set_callback(${SLIDER}_event_handler)\n`;

    // console.log(pythonCode)


    Blockly.Python.topFunctions_.push(pythonCode1);
    Blockly.Python.customFunctions_[`${SLIDER}`] = pythonCode2;
    // return pythonCode
    // return ''
};

//获取滑块数值
Blockly.Python['UIEditor_getSliderValue'] = function(block) {
    const SLIDER = block.getFieldValue('SLIDER');

    const pythonCode = `${SLIDER}.get_value()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//设置图片路径
Blockly.Python['UIEditor_setImagePath'] = function(block) {
    const IMAGE = block.getFieldValue('IMAGE');
    const PATH = Blockly.Python.valueToCode(block, 'PATH', Blockly.Python.ORDER_NONE);

    const pythonCode = `${IMAGE}.set_src(${PATH})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置图片位置
Blockly.Python['UIEditor_setImagePosition'] = function(block) {
    const IMAGE = block.getFieldValue('IMAGE');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${IMAGE}.set_pos(${X},${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置图片位置-x
Blockly.Python['UIEditor_setImagePositionX'] = function(block) {
    const IMAGE = block.getFieldValue('IMAGE');
    const X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);

    const pythonCode = `${IMAGE}.set_x(${X})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置图片位置-y
Blockly.Python['UIEditor_setImagePositionY'] = function(block) {
    const IMAGE = block.getFieldValue('IMAGE');
    const Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);

    const pythonCode = `${IMAGE}.set_y(${Y})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//按钮是否被按下
Blockly.Python['Esp32S4S_buttonPressed'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');

    const pythonCode = `button.is_pressed(button.${CHOICE})`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//声音大小
Blockly.Python['Esp32S4S_soundLevel'] = function(block) {

    const pythonCode = `audio.get_sound_level()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};
function trimQuotes(str) {
    return str.replace(/^["']|["']$/g, '');
  }
//开始录音
Blockly.Python['Esp32S4S_startRecording'] = function(block) {
    const AUDIOSOURCE = block.getFieldValue('AUDIOSOURCE');
    let FILENAME = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_NONE);
    FILENAME=trimQuotes(FILENAME)
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    let position=Number(AUDIOSOURCE)
    let pythonCode;

    if(position === 0){
        pythonCode = `audio.start_recording("sd/${FILENAME}.wav",${NUM})\n`;
    }else{
        pythonCode = `audio.start_recording("${FILENAME}.wav",${NUM})\n`;
    }
    

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//播放录音
Blockly.Python['Esp32S4S_playRecording'] = function(block) {
    const AUDIOSOURCE = block.getFieldValue('AUDIOSOURCE');
    let FILENAME = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_NONE);
    FILENAME=trimQuotes(FILENAME)
    let position=Number(AUDIOSOURCE)
    let pythonCode;

    if(position === 0){
        pythonCode = `audio.play_recording("sd/${FILENAME}.wav")\n`;
    }else{
        pythonCode = `audio.play_recording("${FILENAME}.wav")\n`;
    }
    

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//停止播放录音
Blockly.Python['Esp32S4S_stopPlayRecording'] = function(block) {

    const pythonCode = `audio.stop_sounds()\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置音量大小
Blockly.Python['Esp32S4S_setVolume'] = function(block) {
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);

    const pythonCode = `audio.set_volume(${NUM})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};
//播放音频
Blockly.Python['Esp32S4S_playAudio'] = function(block) {
    const TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);

    const pythonCode = `audio.play_audio(${TEXT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//停止播放
Blockly.Python['Esp32S4S_stopAudio'] = function(block) {

    const pythonCode = `audio.stop_sounds()\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};

//设置数字引脚
Blockly.Python['Esp32S4S_setDigital'] = function(block) {
    const PIN = block.getFieldValue('PIN');
    const CHOICE = block.getFieldValue('CHOICE');
    const pythonCode = `esp_pin.digitalWrite(${PIN},${Number(CHOICE)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode;
    }
    return '';
};

//设置PWM引脚
Blockly.Python['Esp32S4S_setPwm'] = function(block) {
    const PIN = block.getFieldValue('PIN');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    const pythonCode = `esp_pin.analogWrite(${PIN},${NUM})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode;
    }
    return '';
};

//读取数字引脚
Blockly.Python['Esp32S4S_readDigitalPin'] = function(block) {
    const PIN = block.getFieldValue('PIN');
    const pythonCode = `esp_pin.digitalRead(${PIN})`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};
//读取模拟引脚
Blockly.Python['Esp32S4S_readAnalogPin'] = function(block) {
    const PIN = block.getFieldValue('PIN');
    const pythonCode = `esp_pin.analogRead(${PIN})`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};
//读取脉冲
Blockly.Python['Esp32S4S_readPulse'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    const pythonCode = `esp_pin.pulseIn(${CHOICE},1,${NUM})`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//获取时间
Blockly.Python['Esp32S4S_getTimer'] = function(block) {
    const pythonCode = `system.tick_get()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//重置时间
Blockly.Python['Esp32S4S_resetTimer'] = function(block) {
    const pythonCode = `tick_reset()\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode;
    }
    return '';
};

//往串口写数据
Blockly.Python['Esp32S4S_writeText'] = function(block) {
    const TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);
    const pythonCode = `uart.write(${TEXT})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode;
    }
    return '';
};

//读取字节
Blockly.Python['Esp32S4S_readableBytes'] = function(block) {
    const pythonCode = `uart.available()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//串口读取单个字节
Blockly.Python['Esp32S4S_readByte'] = function(block) {
    const pythonCode = `uart.read()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//串口读取字符串
Blockly.Python['Esp32S4S_readString'] = function(block) {
    const pythonCode = `uart.readline()`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//读取数据直到满足条件
Blockly.Python['Esp32S4S_readUntil'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const pythonCode = `uart.readline(${CHOICE})`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};