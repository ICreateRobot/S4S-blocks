/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['control_forever'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_forever",
      "message0": Blockly.Msg.CONTROL_FOREVER,
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_end"]
    });
  }
};

Blockly.Blocks['control_repeat'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_repeat",
      "message0": Blockly.Msg.CONTROL_REPEAT,
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_if'] = {
  /**
   * Block for if-then.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_if",
      "message0": Blockly.Msg.CONTROL_IF,
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

// Blockly.Blocks['control_if_else'] = {
//   /**
//    * Block for if-else.
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "type": "control_if_else",
//       "message0": Blockly.Msg.CONTROL_IF,
//       "message1": "%1",
//       "message2": Blockly.Msg.CONTROL_ELSE,
//       "message3": "%1",
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "CONDITION",
//           "check": "Boolean"
//         }
//       ],
//       "args1": [
//         {
//           "type": "input_statement",
//           "name": "SUBSTACK"
//         }
//       ],
//       "args3": [
//         {
//           "type": "input_statement",
//           "name": "SUBSTACK2"
//         }
//       ],
//       "category": Blockly.Categories.control,
//       "extensions": ["colours_control", "shape_statement"]
//     });
//   }
// };

Blockly.Blocks['control_stop'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    var ALL_SCRIPTS = 'all';
    var THIS_SCRIPT = 'this script';
    var OTHER_SCRIPTS = 'other scripts in sprite';
    var stopDropdown = new Blockly.FieldDropdown(function() {
      if (this.sourceBlock_ &&
          this.sourceBlock_.nextConnection &&
          this.sourceBlock_.nextConnection.isConnected()) {
        return [
          [Blockly.Msg.CONTROL_STOP_OTHER, OTHER_SCRIPTS]
        ];
      }
      return [[Blockly.Msg.CONTROL_STOP_ALL, ALL_SCRIPTS],
        [Blockly.Msg.CONTROL_STOP_THIS, THIS_SCRIPT],
        [Blockly.Msg.CONTROL_STOP_OTHER, OTHER_SCRIPTS]
      ];
    }, function(option) {
      // Create an event group to keep field value and mutator in sync
      // Return null at the end because setValue is called here already.
      Blockly.Events.setGroup(true);
      var oldMutation = Blockly.Xml.domToText(this.sourceBlock_.mutationToDom());
      this.sourceBlock_.setNextStatement(option == OTHER_SCRIPTS);
      var newMutation = Blockly.Xml.domToText(this.sourceBlock_.mutationToDom());
      Blockly.Events.fire(new Blockly.Events.BlockChange(this.sourceBlock_,
          'mutation', null, oldMutation, newMutation));
      this.setValue(option);
      Blockly.Events.setGroup(false);
      return null;
    });
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROL_STOP)
        .appendField(stopDropdown, 'STOP_OPTION');
    this.setCategory(Blockly.Categories.control);
    this.setColour(Blockly.Colours.control.primary,
        Blockly.Colours.control.secondary,
        Blockly.Colours.control.tertiary,
        Blockly.Colours.control.quaternary
    );
    this.setPreviousStatement(true);
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('hasnext', this.nextConnection != null);
    return container;
  },
  domToMutation: function(xmlElement) {
    var hasNext = (xmlElement.getAttribute('hasnext') == 'true');
    this.setNextStatement(hasNext);
  }
};

Blockly.Blocks['control_wait'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_wait",
      "message0": Blockly.Msg.CONTROL_WAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "DURATION",

        },
        {
          "type": "field_dropdown",
          "name": "SECOND",
          "options": [
            [Blockly.Msg.CONTROL_WAIT_SECOND, "s"],
            [Blockly.Msg.CONTROL_WAIT_MSECOND, "ms"]
          ]
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_wait_until'] = {
  /**
   * Block to wait until a condition becomes true.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_WAITUNTIL,
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_repeat_until'] = {
  /**
   * Block to repeat until a condition becomes true.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_REPEATUNTIL,
      "message1": "%1",
      "message2": "%1",
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_while'] = {
  /**
   * Block to repeat until a condition becomes false.
   * (This is an obsolete "hacked" block, for compatibility with 2.0.)
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_WHILE,
      "message1": "%1",
      "message2": "%1",
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_for_each'] = {
  /**
   * Block for for-each. This is an obsolete block that is implemented for
   * compatibility with Scratch 2.0 projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_for_each",
      "message0": Blockly.Msg.CONTROL_FOREACH,
      "message1": "%1",
      "args0": [
        {
          "type": "field_variable",
          "name": "VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_start_as_clone'] = {
  /**
   * Block for "when I start as a clone" hat.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_start_as_clone",
      "message0": Blockly.Msg.CONTROL_STARTASCLONE,
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_hat"]
    });
  }
};

Blockly.Blocks['control_create_clone_of_menu'] = {
  /**
   * Create-clone drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CLONE_OPTION",
          "options": [
            [Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF, '_myself_']
          ]
        }
      ],
      "extensions": ["colours_control", "output_string"]
    });
  }
};

Blockly.Blocks['control_create_clone_of'] = {
  /**
   * Block for "create clone of..."
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_start_as_clone",
      "message0": Blockly.Msg.CONTROL_CREATECLONEOF,
      "args0": [
        {
          "type": "input_value",
          "name": "CLONE_OPTION"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_delete_this_clone'] = {
  /**
   * Block for "delete this clone."
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_DELETETHISCLONE,
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_end"]
    });
  }
};

Blockly.Blocks['control_get_counter'] = {
  /**
   * Block to get the counter value. This is an obsolete block that is
   * implemented for compatibility with Scratch 2.0 projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_COUNTER,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

Blockly.Blocks['control_incr_counter'] = {
  /**
   * Block to add one to the counter value. This is an obsolete block that is
   * implemented for compatibility with Scratch 2.0 projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_INCRCOUNTER,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_clear_counter'] = {
  /**
   * Block to clear the counter value. This is an obsolete block that is
   * implemented for compatibility with Scratch 2.0 projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_CLEARCOUNTER,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_all_at_once'] = {
  /**
   * Block to run the contained script. This is an obsolete block that is
   * implemented for compatibility with Scratch 2.0 projects. Note that
   * this was originally designed to run all of the contained blocks
   * (sequentially, like normal) within a single frame, but this feature
   * was removed in place of custom blocks marked "run without screen
   * refresh". The "all at once" block was changed to run the contained
   * blocks ordinarily, functioning the same way as an "if" block with a
   * reporter that is always true (e.g. "if 1 = 1"). Also note that the
   * Scratch 2.0 spec for this block is "warpSpeed", but the label shows
   * "all at once".
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_ALLATONCE,
      "message1": "%1", // Statement
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};






function svgData(svg) {
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const PLUS_SVG = svgData(`
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
  <circle cx="11" cy="11" r="10" fill="#ffffff" stroke="#888" stroke-width="2"/>
  <line x1="11" y1="6" x2="11" y2="16" stroke="#444" stroke-width="3"/>
  <line x1="6" y1="11" x2="16" y2="11" stroke="#444" stroke-width="3"/>
</svg>
`);

const MINUS_SVG = svgData(`
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
  <circle cx="11" cy="11" r="10" fill="#ffffff" stroke="#888" stroke-width="2"/>
  <line x1="6" y1="11" x2="16" y2="11" stroke="#444" stroke-width="3"/>
</svg>
`);



// 验证功能（可扩展的分支语句）
Blockly.Blocks['control_if_else'] = {

  init: function () {
    // 记录当前 else if 的数量
    this.elseifCount_ = 0;
    // 标记：block 是否已初始化完成
    this._ready = true;

    // 使用 Scratch 原始 JSON 结构初始化 block
    this.jsonInit({
      "type": "control_if_else",
      "message0": Blockly.Msg.CONTROL_IF,
      "message1": "%1",
      "message2": Blockly.Msg.CONTROL_ELSE,
      "message3": "%1",

      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });

    //指定else位置
    this.elseInputName_ = this.inputList[1].name;

    // 创建底部的 + 按钮
    this.createAddButton_();
  },

  // 创建 "+" 按钮
  createAddButton_: function () {
    const plus = new Blockly.FieldImage(
      PLUS_SVG,
      22,
      22,
      "+"
    );

    // 在 block 最底部添加一行 dummy input 放置 +
    this.appendDummyInput("ADD")
      .appendField(plus);

    // 保存按钮引用，稍后绑定点击事件
    this.plusField_ = plus;
  },


  // block SVG 初始化完成后绑定点击事件
  initSvg: function () {
    // 先调用原始 Blockly 的 initSvg
    Blockly.BlockSvg.prototype.initSvg.call(this);

    if (this._plusBound) return; // 防止重复绑定
    this._plusBound = true;

    const field = this.plusField_;

    if (field && field.getSvgRoot()) {
      field.getSvgRoot().style.cursor = "pointer",
      // 绑定 + 按钮点击事件
      Blockly.bindEventWithChecks_(
        field.getSvgRoot(),
        "mousedown",
        this,
        function (e) {
          e.stopPropagation();// 阻止 Blockly 的 drag 事件
          this.addElseIf_();
        }
      );
    }
  },

  // 新增一个 else if
  addElseIf_: function () {
    console.log("add")
    this.createElseIf_(this.elseifCount_);
    this.elseifCount_++;
    
    this.initSvg();
    // // 重新渲染 block
    this.render();

    Blockly.Events.fire(
    new Blockly.Events.BlockChange(
      this,
      'mutation',
      null,
      null,
      null
    )
  );
  
  },

  // 删除某一个 else if
  removeElseIf_: function (index) {
    // 删除当前
    this.removeInput("ELSEIF_CONDITION" + index);
    this.removeInput("ELSEIF_THEN" + index);
    this.removeInput("ELSEIF_SUBSTACK" + index, false);

    // 后面的 index 前移
    for (let i = index + 1; i < this.elseifCount_; i++) {
      const newIndex = i - 1;

      const cond = this.getInput("ELSEIF_CONDITION" + i);
      const then = this.getInput("ELSEIF_THEN" + i);
      const stack = this.getInput("ELSEIF_SUBSTACK" + i);

      if (cond) cond.name = "ELSEIF_CONDITION" + newIndex;
      if (then) {
        then.name = "ELSEIF_THEN" + newIndex;
        // 更新按钮 index
        const field = then.fieldRow.find(f => f._elseifIndex !== undefined);
        if (field) field._elseifIndex = newIndex;
      }
      if (stack) stack.name = "ELSEIF_SUBSTACK" + newIndex;
    }

    this.elseifCount_--;
    this.render();
    Blockly.Events.fire(
  new Blockly.Events.BlockChange(
    this,
    'mutation',
    null,
    null,
    null
  ))
    
  },

  createElseIf_: function(index){
    const remove = new Blockly.FieldImage(
      MINUS_SVG,
      22,
      22,
      "-"
    );
    remove._elseifIndex = index;

    // 条件输入
    this.appendValueInput("ELSEIF_CONDITION" + index)
      .setCheck("Boolean")
      .appendField(Blockly.Msg.CONTROL_ELSE +" "+ Blockly.Msg.CONTROL_IF_IF);
    // then -
    this.appendDummyInput("ELSEIF_THEN" + index)
      .appendField(Blockly.Msg.CONTROL_IF_THEN)
      .appendField(remove);
    // 口子
    this.appendStatementInput("ELSEIF_SUBSTACK" + index);

    // 调整到指定为止
    // const elseInput = this.inputList.find(i =>
    //   i.fieldRow.some(f => f.getText && f.getText() === Blockly.Msg.CONTROL_ELSE)
    // );
    // 插入 else if
    this.moveInputBefore("ELSEIF_CONDITION" + index, "ADD");//条件
    this.moveInputBefore("ELSEIF_THEN" + index, "ADD");
    this.moveInputBefore("ELSEIF_SUBSTACK" + index, "ADD");//口子
    // 把 else label 移到底部
    //if (elseInput) {
      this.moveInputBefore(this.elseInputName_, "ADD");
    //}
    // 最后移动 else 的口子
    this.moveInputBefore("SUBSTACK2", "ADD");

    const field = remove;

    // 等 SVG 渲染完成后绑定 - 按钮事件
    setTimeout(() => {
      if (field.getSvgRoot()) {
        field.getSvgRoot().style.cursor = "pointer",
        Blockly.bindEventWithChecks_(
          field.getSvgRoot(),
          "mousedown",
          this,
          (e) => {
            const idx = field._elseifIndex;
            this.removeElseIf_(idx);
          }
        );
      }
    }, 0);
    // // else if 数量 +1
    // this.elseifCount_++;
  },

  // 新增的--用于重新恢复处理
  rebuildShape_: function () {
    console.log("rebuild")
    // 删除旧的 elseif
    // for (let i = this.elseifCount_ - 1; i >= 0; i--) {
    //   const cond = this.getInput("ELSEIF_CONDITION" + i);
    //   const then = this.getInput("ELSEIF_THEN" + i);
    //   const stack = this.getInput("ELSEIF_SUBSTACK" + i);

    //   // ⭐ 关键：断开连接（包括 shadow）
    //   [cond, then, stack].forEach(input => {
    //     if (input && input.connection) {
    //       const target = input.connection.targetBlock();
    //       if (target) {
    //         target.dispose(); // 🔥 直接销毁 shadow
    //       }
    //     }
    //   });

    //   if (cond) this.removeInput(cond.name);
    //   if (then) this.removeInput(then.name);
    //   if (stack) this.removeInput(stack.name);
    // }
    // // 重新创建
    // for (let i = 0; i < this.elseifCount_; i++) {
    //   this.createElseIf_(i);
    // }
    
    //this.initSvg();
    // 重新渲染 block
    //this.render();

    for (let i = 0; i < this.elseifCount_; i++) {
      if (!this.getInput("ELSEIF_CONDITION" + i)) {
        this.createElseIf_(i);
      }
    }
    this.render();
  },

  // 保存 mutation（用于项目保存）
  mutationToDom: function () {
    console.log("mutationToDom");

    if (!this.workspace || this.workspace.isFlyout || !this.workspace.rendered) {
      return null;
    }

    console.log("start_mutationToDom", this.elseifCount_);

    //container.setAttribute("elseif", this.elseifCount_);
    let count = 0;
    // 👉 优先从结构读
    while (this.getInput("ELSEIF_CONDITION" + count)) {
      count++;
    }
    // ❗ 如果结构还没恢复（关键）
    if (count === 0 && this.elseifCount_ > 0) {
      count = this.elseifCount_;
    }

    const container = document.createElement("mutation");
    container.setAttribute("elseif", count);

    return container;
  },

  // 从 XML 恢复 mutation  (拖动就执行)
  domToMutation: function (xmlElement) {
    if (!this.workspace || !this.workspace.rendered || this.workspace.isFlyout) {
      console.log("🚫 skip domToMutation (workspace destroyed)");
      return;
    }

    this.elseifCount_ =parseInt(xmlElement.getAttribute("elseif"), 10) || 0;
    console.log("domToMutation",this.elseifCount_)
    
    if (this.elseifCount_ > 0) {
      this.rebuildShape_();
    }
  }
};







// ---------for循环 --------------
Blockly.Blocks['control_for_loop'] = {
  init: function () {
    this.jsonInit({
      "type": "control_for_loop",

      "message0": "for %1 from %2 to %3 step %4",

      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": "i"
        },
        {
          "type": "input_value",
          "name": "FROM"
        },
        {
          "type": "input_value",
          "name": "TO"
        },
        {
          "type": "input_value",
          "name": "STEP"
        }
      ],

      "message1": "%1",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],

      "previousStatement": null,
      "nextStatement": null,

      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};