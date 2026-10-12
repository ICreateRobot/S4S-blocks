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
    let childVariables=[]

    for (let name in Blockly.Python.variables_) {
        let varDef = Blockly.Python.variables_[name];
    
        // 去掉 " = 0"，只保留变量名
        let varName = varDef.split('=')[0].trim();
    
        childVariables.push(varName);
    }

    let globalLine = '';
    if (childVariables.length > 0) {
        globalLine = Blockly.Python.INDENT +
            'global ' + childVariables.join(', ') + '\n';
    }

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
    let childCode = code ?  Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    ):Blockly.Python.INDENT+'pass'+'\n'
    const pythonCode1 = `async def ${BUTTON}_clicked_event(event_struct):\n${childCode.includes('pass')?'':globalLine}${childCode}`
    const pythonCode2=`def ${BUTTON}_event_handler(event_struct):
    event = event_struct.get_code()
    if event == ${BUTTON}.clicked:
        asyncio.create_task(${BUTTON}_clicked_event(event_struct))
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


    let childVariables=[]

    for (let name in Blockly.Python.variables_) {
        let varDef = Blockly.Python.variables_[name];
    
        // 去掉 " = 0"，只保留变量名
        let varName = varDef.split('=')[0].trim();
    
        childVariables.push(varName);
    }

    let globalLine = '';
    if (childVariables.length > 0) {
        globalLine = Blockly.Python.INDENT +
            'global ' + childVariables.join(', ') + '\n';
    }
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
    let childCode = code ?  Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    ):Blockly.Python.INDENT+'pass'+'\n'
    console.log('开关状态')
    console.log(STATE)
    const pythonCode1 = `async def ${SWITCH}_checked_event(event_struct):\n${childCode.includes('pass')?'':globalLine}${isChecked? childCode:''}`
    const pythonCode2 = `async def ${SWITCH}_unchecked_event(event_struct):\n${childCode.includes('pass')?'':globalLine}${!isChecked? childCode:''}`
    const pythonCode3 = `def ${SWITCH}_event_handler(event_struct):
    event = event_struct.get_code()
    obj = event_struct.get_target_obj()
    if event == ${SWITCH}.value_changed:
        if obj.has_state(${SWITCH}.state_checked):
            asyncio.create_task(${SWITCH}_checked_event(event_struct))
        else:
            asyncio.create_task(${SWITCH}_unchecked_event(event_struct))
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

    let childVariables=[]

    for (let name in Blockly.Python.variables_) {
        let varDef = Blockly.Python.variables_[name];
    
        // 去掉 " = 0"，只保留变量名
        let varName = varDef.split('=')[0].trim();
    
        childVariables.push(varName);
    }

    let globalLine = '';
    if (childVariables.length > 0) {
        globalLine = Blockly.Python.INDENT +
            'global ' + childVariables.join(', ') + '\n';
    }
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
    let childCode = code ?  Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    ):Blockly.Python.INDENT+'pass'+'\n'
    const pythonCode1 = `async def ${SLIDER}_value_changed_event(event_struct):\n${childCode.includes('pass')?'':globalLine}${childCode}`

    const pythonCode2=`def ${SLIDER}_event_handler(event_struct):
    event = event_struct.get_code()
    if event == ${SLIDER}.value_changed:
        asyncio.create_task(${SLIDER}_value_changed_event(event_struct))
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
//磁场强度
Blockly.Python['Esp32S4S_magnetStrength'] = function(block) {

    const CHOICE = block.getFieldValue('CHOICE');
    const TYPE = block.getFieldValue('TYPE');
    let pythonCode
    if(TYPE == '0'){
        pythonCode = `magnetometer.getRawMagnetic${CHOICE}()`;
    }else{
        pythonCode = `magnetometer.getGaussField${CHOICE}()`;
    }
    

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};
//加速度
Blockly.Python['Esp32S4S_acceleration'] = function(block) {

    const CHOICE = block.getFieldValue('CHOICE');
    const TYPE = block.getFieldValue('TYPE');
    const pythonCode = `gyro.readFloat${TYPE}${CHOICE}()`;

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
    const pythonCode = `esp_pin.digitalWrite('${PIN}',${Number(CHOICE)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode;
    }
    return '';
};

//设置PWM引脚
Blockly.Python['Esp32S4S_setPwm'] = function(block) {
    const PIN = block.getFieldValue('PIN');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    const pythonCode = `esp_pin.analogWrite('${PIN}',${Number(NUM)})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode;
    }
    return '';
};

//读取数字引脚
Blockly.Python['Esp32S4S_readDigitalPin'] = function(block) {
    const PIN = block.getFieldValue('PIN');
    const pythonCode = `esp_pin.digitalRead('${PIN}')`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};
//读取模拟引脚
Blockly.Python['Esp32S4S_readAnalogPin'] = function(block) {
    const PIN = block.getFieldValue('PIN');
    const pythonCode = `esp_pin.analogRead('${PIN}')`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};
//读取脉冲
Blockly.Python['Esp32S4S_readPulse'] = function(block) {
    const CHOICE = block.getFieldValue('CHOICE');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
    const pythonCode = `esp_pin.pulseIn('${CHOICE}',1,${Number(NUM)})`;

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
    const pythonCode = `system.tick_reset()\n`;

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
    const pythonCode = `uart.read_until('${CHOICE}')`;

    if(isCurrentBlockHat(block)){
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

/**
 * ESP32-More
 */
Blockly.Python['Esp32S4SMore_setWifi'] = function(block) {
    const ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ssid');
    const pass = Blockly.Python.valueToCode(block, 'pass', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'pass');
    const pythonCode = `wlan_sta.connect(${ssid}, ${pass})\n`;

    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['network'] = "import network";
        Blockly.Python.imports_['init_wifi'] = "wlan_sta = network.WLAN(network.STA_IF)\nwlan_sta.active(True)";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_wifiIsConnected'] = function(block) {
    const pythonCode = `wlan_sta.isconnected()`;

    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['network'] = "import network";
        Blockly.Python.imports_['init_wifi'] = "wlan_sta = network.WLAN(network.STA_IF)\nwlan_sta.active(True)";
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_wifiDisconnect'] = function(block) {
    const pythonCode = `wlan_sta.disconnect()\n`;

    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['network'] = "import network";
        Blockly.Python.imports_['init_wifi'] = "wlan_sta = network.WLAN(network.STA_IF)\nwlan_sta.active(True)";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_configBle'] = function(block) {
    const NAME = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'NAME');
    const pythonCode = `ble = s4sble.Device(${NAME})\n`;

    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['s4sble'] = "import s4sble";
        // Blockly.Python.imports_['init_ble'] = "wlan_sta = network.WLAN(network.STA_IF)";
        Blockly.Python.variables_['client_handle'] = "client_handle=None"
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_startBle'] = function(block) {
    const SERVICE = Blockly.Python.valueToCode(block, 'SERVICE', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'SERVICE');
    const READ = Blockly.Python.valueToCode(block, 'READ', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'READ');
    const WRITE = Blockly.Python.valueToCode(block, 'WRITE', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'WRITE');
    const pythonCode = `ble.server.add_service(${SERVICE}, [ble.server.create_characteristic(${READ}, True, False, True),ble.server.create_characteristic(${WRITE}, False, True, False)])\nble.server.start(500000)\nble.server.on_connected(ble_server_on_connected_event)\n`;

    const pythonCode2=`def ble_server_on_connected_event(args):
    _server, _connected_client_handle = args
    global client_handle
    client_handle = _connected_client_handle`
    if(isCurrentBlockHat(block)){
        Blockly.Python.customFunctions_[`ble_connected_event`] = pythonCode2;
        Blockly.Python.definitions_['s4sble'] = "import s4sble";
        // Blockly.Python.imports_['init_ble'] = "wlan_sta = network.WLAN(network.STA_IF)";
        Blockly.Python.variables_['client_handle'] = "client_handle=None"
        return pythonCode;
    }
    return '';
};
Blockly.Python['Esp32S4SMore_stopBle'] = function(block) {
    const pythonCode = `ble.server.clear_services()\nif client_handle:\n${Blockly.Python.INDENT}client_handle.close()\n`;

    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['s4sble'] = "import s4sble";
        // Blockly.Python.imports_['init_ble'] = "wlan_sta = network.WLAN(network.STA_IF)";
        Blockly.Python.variables_['client_handle'] = "client_handle=None"
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_readByteBle'] = function(block) {
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'NUM');
    const CHARA = Blockly.Python.valueToCode(block, 'CHARA', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'CHARA');
    // const pythonCode = `client_handle.read(${CHARA}, ${NUM})`;
    const pythonCode =
`(client_handle.read(${CHARA}, ${NUM}) if client_handle is not None and client_handle.any(${CHARA}) else '')`

    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['s4sble'] = "import s4sble";
        // Blockly.Python.imports_['init_ble'] = "wlan_sta = network.WLAN(network.STA_IF)";
        Blockly.Python.variables_['client_handle'] = "client_handle=None"
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_sendBle'] = function(block) {
    const DATA = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'DATA');
    const CHARA = Blockly.Python.valueToCode(block, 'CHARA', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'CHARA');
    const pythonCode =
`if client_handle:
    client_handle.write(${DATA}, ${CHARA})
`;

    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['s4sble'] = "import s4sble";
        // Blockly.Python.imports_['init_ble'] = "wlan_sta = network.WLAN(network.STA_IF)";
        Blockly.Python.variables_['client_handle'] = "client_handle=None"
        return pythonCode;
    }
    return '';
};


// Blockly.Python['Esp32S4SMore_setURLHTTP'] = function(block) {
//     const URL = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'URL');

//     if(isCurrentBlockHat(block)){
//         Blockly.Python.definitions_['requests2'] = "import requests2";
//         Blockly.Python.variables_['http_url'] = `http_url=${URL}`
//         return pythonCode;
//     }
//     return '';
// };

Blockly.Python['Esp32S4SMore_setHeaderHTTP'] = function(block) {
    const HEADER = Blockly.Python.valueToCode(block, 'HEADER', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'HEADER');
    const VALUE = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'VALUE');
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['requests2'] = "import requests2";
        Blockly.Python.variables_['http_header'] = `http_header={${HEADER}:${VALUE}}`
        return '';
    }
    return '';
};

Blockly.Python['Esp32S4SMore_sendGetHTTP'] = function(block) {
    const TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TEXT');
    const pythonCode = `http_req = requests2.get(${TEXT}, headers=http_header)\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['requests2'] = "import requests2";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_sendPostHTTP'] = function(block) {
    const TEXT1 = Blockly.Python.valueToCode(block, 'TEXT1', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TEXT1');
    const KEY = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'KEY');
    const VALUE = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'VALUE');
    const pythonCode = `http_req = requests2.post(${TEXT1}, json={${KEY}:${VALUE}}, headers=http_header)\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['requests2'] = "import requests2";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_getHTTPCode'] = function(block) {
    const pythonCode = `http_req.status_code`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['requests2'] = "import requests2";
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_getHTTPBody'] = function(block) {
    const pythonCode = `http_req.text`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['requests2'] = "import requests2";
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_startEspnow'] = function(block) {
    const NUM = block.getFieldValue('NUM');
    const pythonCode = `espnow_0 = S4SESPNow(${NUM})\nespnow_0.set_irq_callback(espnow_recv_callback)\n`
    const pythonCode2 = `def espnow_recv_callback(espnow_obj):
    global espnow_data, espnow_mac
    espnow_mac, espnow_data = espnow_obj.recv_data()`
    if(isCurrentBlockHat(block)){
        Blockly.Python.customFunctions_['ESPNOW_RECV'] = pythonCode2
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        Blockly.Python.variables_['espnow_mac'] = 'espnow_mac=None'
        Blockly.Python.variables_['espnow_data'] = 'espnow_data=None'
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_setEspnowConfig'] = function(block) {
    const MAC = Blockly.Python.valueToCode(block, 'MAC', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'MAC');
    const PEER = Blockly.Python.valueToCode(block, 'PEER', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'PEER');
    const IFIDX = block.getFieldValue('IFIDX');
    const ENCRYPT = block.getFieldValue('ENCRYPT');
    const LMK = Blockly.Python.valueToCode(block, 'LMK', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'LMK');
    const real = LMK.trim().replace(/^["']|["']$/g, '')
    const pythonCode = `espnow_0.set_add_peer(${MAC}, ${PEER}, ${IFIDX}, ${ENCRYPT}${(ENCRYPT=='True' && real !='only valid when encrypt=True') ? ','+LMK:''})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_stopEspnow'] = function(block) {
    const pythonCode = `espnow_0.deinit()\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_setEspnow'] = function(block) {
    const NAME = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'NAME');
    const pythonCode = `espnow_0.set_ap_ssid(${NAME})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_setEspnowKey'] = function(block) {
    const KEY = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'KEY');
    const pythonCode = `espnow_0.set_pmk_encrypt(${KEY})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return pythonCode;
    }
    return '';
};

function parseIfPureNumber(str) {
    if (typeof str === 'string' && /^\d+$/.test(str)) {
      return Number(str);
    }
    return str;
  }
Blockly.Python['Esp32S4SMore_espnowSendData'] = function(block) {
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'NUM');
    const DATA = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'DATA');
    let data = parseIfPureNumber(DATA)
    const pythonCode = `espnow_0.send_data(${NUM}, ${data})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_espnowSendDataAll'] = function(block) {
    const DATA = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'DATA');
    let data = parseIfPureNumber(DATA)
    const pythonCode = `espnow_0.broadcast_data(${data})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_espnowGetDeviceInfo'] = function(block) {
    const INFO = block.getFieldValue('INFO');
    const SSID = Blockly.Python.valueToCode(block, 'SSID', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'SSID');

    const pythonCode = `espnow_0.get_remote_mac(${INFO}, ${SSID})`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_espnowGetMess'] = function(block) {

    const pythonCode = `espnow_data`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_espnowRecFromAddr'] = function(block) {

    const pythonCode = `espnow_mac`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['S4SESPNow'] = "from s4sespnow import S4SESPNow";
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_startUartTxRx'] = function(block) {
    const NUM = block.getFieldValue('NUM');
    const BAUD = Blockly.Python.valueToCode(block, 'BAUD', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'BAUD');
    const TX = Blockly.Python.valueToCode(block, 'TX', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TX');
    const RX = Blockly.Python.valueToCode(block, 'RX', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'RX');

    const pythonCode = `uart${NUM} = UART(${NUM}, baudrate=${BAUD}, bits=8, parity=None, stop=1, tx=${TX}, rx=${RX})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['uart'] = "from espmore import UART";
        Blockly.Python.variables_[`uart${NUM}`] = `uart${NUM}=None`
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_stopUart'] = function(block) {
    const NUM = block.getFieldValue('NUM');
    
    const pythonCode = `uart${NUM}.deinit()\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['uart'] = "from espmore import UART";
        Blockly.Python.variables_[`uart${NUM}`] = `uart${NUM}=None`
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_writeUart'] = function(block) {
    const NUM = block.getFieldValue('NUM');
    const TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TEXT');
    const pythonCode = `uart${NUM}.write(str(${TEXT}))\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['uart'] = "from espmore import UART";
        Blockly.Python.variables_[`uart${NUM}`] = `uart${NUM}=None`
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_writeUartByte'] = function(block) {
    const NUM = block.getFieldValue('NUM');
    const TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TEXT');
    // const arr = TEXT.split(",").map(Number);
    const realArr = (TEXT.trim().replace(/^["']|["']$/g, '')).split(",").map(Number)
    const pythonCode = `uart${NUM}.write(bytes([${realArr}]))\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['uart'] = "from espmore import UART";
        Blockly.Python.variables_[`uart${NUM}`] = `uart${NUM}=None`
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_readUart'] = function(block) {

    const NUM = block.getFieldValue('NUM');
    const pythonCode = `uart${NUM}.readline()`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['uart'] = "from espmore import UART";
        Blockly.Python.variables_[`uart${NUM}`] = `uart${NUM}=None`
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_readByteUart'] = function(block) {

    const NUM = block.getFieldValue('NUM');
    const pythonCode = `uart${NUM}.read(1)`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['uart'] = "from espmore import UART";
        Blockly.Python.variables_[`uart${NUM}`] = `uart${NUM}=None`
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_uartAvail'] = function(block) {

    const NUM = block.getFieldValue('NUM');
    const pythonCode = `uart${NUM}.any()`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['uart'] = "from espmore import UART";
        Blockly.Python.variables_[`uart${NUM}`] = `uart${NUM}=None`
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_startI2CSDA'] = function(block) {
    const I2C = block.getFieldValue('I2C');
    const FREQ = block.getFieldValue('FREQ');
    const SDA = Blockly.Python.valueToCode(block, 'SDA', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'SDA');
    const SCL = Blockly.Python.valueToCode(block, 'SCL', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'SCL');
    const pythonCode = `i2c${I2C} = I2C(${I2C}, scl=Pin(${SCL}), sda=Pin(${SDA}), freq=${FREQ})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['I2C'] = "from espmore import I2C, Pin";
        Blockly.Python.variables_[`i2c${I2C}`] = `i2c${I2C}=None`
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_getAllDevice'] = function(block) {
    const PORT = block.getFieldValue('PORT');
    const pythonCode = `i2c${PORT}.scan()`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['I2C'] = "from espmore import I2C, Pin";
        Blockly.Python.variables_[`i2c${PORT}`] = `i2c${PORT}=None`
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_readBytesI2C'] = function(block) {
    const PORT = block.getFieldValue('PORT');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'NUM');
    const ADDR = Blockly.Python.valueToCode(block, 'ADDR', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ADDR');
    const pythonCode = `i2c${PORT}.readfrom(${ADDR}, ${NUM}, True)`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['I2C'] = "from espmore import I2C, Pin";
        Blockly.Python.variables_[`i2c${PORT}`] = `i2c${PORT}=None`
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_writeI2C'] = function(block) {
    const I2C = block.getFieldValue('I2C');
    const NUM1 = Blockly.Python.valueToCode(block, 'NUM1', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'NUM1');
    const NUM2 = Blockly.Python.valueToCode(block, 'NUM2', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'NUM2');
    const pythonCode = `i2c${I2C}.writeto(${NUM2}, bytes(${NUM1}), True)\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['I2C'] = "from espmore import I2C, Pin";
        Blockly.Python.variables_[`i2c${I2C}`] = `i2c${I2C}=None`
        return pythonCode;
    }
    return '';
};

function toBinaryArray(n) {
    return [(n >> 1) & 1, n & 1];
}
Blockly.Python['Esp32S4SMore_startSpi'] = function(block) {
    const SPI = block.getFieldValue('SPI');
    const SCK = Blockly.Python.valueToCode(block, 'SCK', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'SCK');
    const MOSI = Blockly.Python.valueToCode(block, 'MOSI', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'MOSI');
    const MISO = Blockly.Python.valueToCode(block, 'MISO', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'MISO');
    const FIRST = block.getFieldValue('FIRST');
    const MODE = block.getFieldValue('MODE');
    let mode = toBinaryArray(MODE)
    const pythonCode = `spi${SPI+1} = SPI(${SPI}, 500000, sck=Pin(${SCK}), miso=Pin(${MISO}), mosi=Pin(${MOSI}), firstbit=SPI.${FIRST}, polarity=${mode[0]}, phase=${mode[1]})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['SPI'] = "from espmore import SPI, Pin";
        Blockly.Python.variables_[`spi${SPI+1}`] = `spi${SPI+1}=None`
        return pythonCode;
    }
    return '';
};
Blockly.Python['Esp32S4SMore_stopSpi'] = function(block) {
    const SPI = block.getFieldValue('SPI');

    const pythonCode = `spi${SPI+1}.deinit()\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['SPI'] = "from espmore import SPI, Pin";
        Blockly.Python.variables_[`spi${SPI+1}`] = `spi${SPI+1}=None`
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_sendSpi'] = function(block) {
    const SPI = block.getFieldValue('SPI');
    const VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'VAR');
    const pythonCode = `spi${SPI+1}.write(${VAR})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['SPI'] = "from espmore import SPI, Pin";
        Blockly.Python.variables_[`spi${SPI+1}`] = `spi${SPI+1}=None`
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_sendReciveSpi'] = function(block) {
    const SPI = block.getFieldValue('SPI');
    const VAR1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'VAR1');
    const VAR2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'VAR2');
    const pythonCode = `spi${SPI+1}.write_readinto(${VAR1}, ${VAR2})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['SPI'] = "from espmore import SPI, Pin";
        Blockly.Python.variables_[`spi${SPI+1}`] = `spi${SPI+1}=None`
        return pythonCode;
    }
    return '';
};

Blockly.Python['Esp32S4SMore_readBytesSpi'] = function(block) {
    const SPI = block.getFieldValue('SPI');
    const NUM = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'NUM');
    const pythonCode = `spi${SPI+1}.read(${NUM})`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['SPI'] = "from espmore import SPI, Pin";
        Blockly.Python.variables_[`spi${SPI+1}`] = `spi${SPI+1}=None`
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

Blockly.Python['Esp32S4SMore_readIntoSpi'] = function(block) {
    const SPI = block.getFieldValue('SPI');
    const VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'VAR');
    const pythonCode = `spi${SPI+1}.readinto(${VAR})\n`
    if(isCurrentBlockHat(block)){
        Blockly.Python.definitions_['SPI'] = "from espmore import SPI, Pin";
        Blockly.Python.variables_[`spi${SPI+1}`] = `spi${SPI+1}=None`
        return pythonCode;
    }
    return '';
};