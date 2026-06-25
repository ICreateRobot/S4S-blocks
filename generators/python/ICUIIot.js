'use strict';

goog.provide('Blockly.Python.UIIot');
goog.require('Blockly.Python');
//远程显示二维码
Blockly.Python['UIIoT_showQRCode'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);
    const size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_NONE);
    const pythonCode = `QRCode(data="http://192.168.20.161:3000/preview/2D3PAZ4SU2PMNCMK",x=${x},y=${y},size=${size})\n`;

    if(isCurrentBlockHat(block)){
        return pythonCode
    }
    return '';
};
//标签
Blockly.Python['UIIoT_labelCallback'] = function(block) {
    const ITEM = block.getFieldValue('ITEM');
    const DATA = Blockly.Python.valueToCode(block, 'DATA',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'DATA');

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
    const pythonCode = `def label_${ITEM}_callback():\n${globalLine}${Blockly.Python.INDENT}return ${DATA}\n`;

    Blockly.Python.customFunctions_[`label_${ITEM}_callback`] = pythonCode;
};

//图片
Blockly.Python['UIIoT_imageCallback'] = function(block) {
    const ITEM = block.getFieldValue('ITEM');
    const DATA = Blockly.Python.valueToCode(block, 'DATA',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'DATA');

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
    const pythonCode = `def image_${ITEM}_callback():\n${globalLine}${Blockly.Python.INDENT}return ${DATA}\n`;

    Blockly.Python.customFunctions_[`image_${ITEM}_callback`] = pythonCode;
};

//文本输入
Blockly.Python['UIIoT_textCallback'] = function(block) {
    const ITEM = block.getFieldValue('ITEM');

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
    console.log('eeeeee',code.length)

    // code = Blockly.Python.prefixLines(
    //     code,
    //     Blockly.Python.INDENT
    // );
    let childCode = code ?  Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    ):Blockly.Python.INDENT+'pass'+'\n'


    let childVariables=[]
    for (let name in Blockly.Python.variables_) {
        let varDef = Blockly.Python.variables_[name];
    
        // 去掉 " = 0"，只保留变量名
        let varName = varDef.split('=')[0].trim();
    
        if (varName !== 'iot_text_value') {
            childVariables.push(varName);
        }
    }

    let globalLine = '';
    if (childVariables.length > 0) {
        globalLine = Blockly.Python.INDENT +
            'global ' + childVariables.join(', ') + '\n';
    }
    const pythonCode = `def text_${ITEM}_callback(iot_text_value):\n${globalLine}${childCode}`;

    Blockly.Python.customFunctions_[`text_${ITEM}_callback`] = pythonCode;
};

//按钮
Blockly.Python['UIIoT_buttonCallback'] = function(block) {
    const ITEM = block.getFieldValue('ITEM');

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
    console.log('eeeeee',code.length)

    // code = Blockly.Python.prefixLines(
    //     code,
    //     Blockly.Python.INDENT
    // );
    let childCode = code ?  Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    ):Blockly.Python.INDENT+'pass'+'\n'
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
    const pythonCode = `def button_${ITEM}_callback():\n${globalLine}${childCode}`;

    Blockly.Python.customFunctions_[`button_${ITEM}_callback`] = pythonCode;
};

//开关
Blockly.Python['UIIoT_switchCallback'] = function(block) {
    const ITEM = block.getFieldValue('ITEM');

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
    console.log('eeeeee',code.length)

    // code = Blockly.Python.prefixLines(
    //     code,
    //     Blockly.Python.INDENT
    // );
    let childCode = code ?  Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    ):Blockly.Python.INDENT+'pass'+'\n'
    let childVariables=[]
    for (let name in Blockly.Python.variables_) {
        let varDef = Blockly.Python.variables_[name];
    
        // 去掉 " = 0"，只保留变量名
        let varName = varDef.split('=')[0].trim();
    
        if (varName !== 'iot_switch_value') {
            childVariables.push(varName);
        }
    }

    let globalLine = '';
    if (childVariables.length > 0) {
        globalLine = Blockly.Python.INDENT +
            'global ' + childVariables.join(', ') + '\n';
    }
    const pythonCode = `def switch_${ITEM}_callback(iot_switch_value):\n${globalLine}${childCode}`;

    Blockly.Python.customFunctions_[`switch_${ITEM}_callback`] = pythonCode;
};

//滑块
Blockly.Python['UIIoT_sliderCallback'] = function(block) {
    const ITEM = block.getFieldValue('ITEM');

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
    console.log('eeeeee',code.length)

    // code = Blockly.Python.prefixLines(
    //     code,
    //     Blockly.Python.INDENT
    // );
    let childCode = code ?  Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    ):Blockly.Python.INDENT+'pass'+'\n'
    let childVariables=[]
    for (let name in Blockly.Python.variables_) {
        let varDef = Blockly.Python.variables_[name];
    
        // 去掉 " = 0"，只保留变量名
        let varName = varDef.split('=')[0].trim();
    
        if (varName !== 'iot_slider_value') {
            childVariables.push(varName);
        }
    }

    let globalLine = '';
    if (childVariables.length > 0) {
        globalLine = Blockly.Python.INDENT +
            'global ' + childVariables.join(', ') + '\n';
    }
    const pythonCode = `def slider_${ITEM}_callback(iot_slider_value):\n${globalLine}${childCode}`;

    Blockly.Python.customFunctions_[`slider_${ITEM}_callback`] = pythonCode;
};

//仪表盘
Blockly.Python['UIIoT_gaugeCallback'] = function(block) {
    const ITEM = block.getFieldValue('ITEM');
    const DATA = Blockly.Python.valueToCode(block, 'DATA',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'DATA');

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
    const pythonCode = `def gauge_${ITEM}_callback():\n${globalLine}${Blockly.Python.INDENT}return ${DATA}\n`;

    Blockly.Python.customFunctions_[`gauge_${ITEM}_callback`] = pythonCode;
};

//遥感
Blockly.Python['UIIoT_joystickCallback'] = function(block) {
    const ITEM = block.getFieldValue('ITEM');

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
    console.log('eeeeee',code.length)

    // code = Blockly.Python.prefixLines(
    //     code,
    //     Blockly.Python.INDENT
    // );
    let childCode = code ?  Blockly.Python.prefixLines(
        code,
        Blockly.Python.INDENT
    ):Blockly.Python.INDENT+'pass'+'\n'
    let childVariables=[]

    for (let name in Blockly.Python.variables_) {
        let varDef = Blockly.Python.variables_[name];
    
        // 去掉 " = 0"，只保留变量名
        let varName = varDef.split('=')[0].trim();
    
        if (varName !== 'iot_joystick_Xvalue' && varName !== 'iot_joystick_Yvalue') {
            childVariables.push(varName);
        }
    }

    let globalLine = '';
    if (childVariables.length > 0) {
        globalLine = Blockly.Python.INDENT +
            'global ' + childVariables.join(', ') + '\n';
    }
    const pythonCode = `def joystick_${ITEM}_callback(iot_joystick_Xvalue,iot_joystick_Yvalue):\n${globalLine}${childCode}`;

    Blockly.Python.customFunctions_[`joystick_${ITEM}_callback`] = pythonCode;
};