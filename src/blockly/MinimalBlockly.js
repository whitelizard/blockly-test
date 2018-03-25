import React, { Component } from 'react';
import './toolbox.xml';
import './workspace.xml';

/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
const toolbox = document.getElementById('blockly-toolbox-specification');

const options = {
  toolbox: toolbox,
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: 'start',
  css: true,
  media: 'https://blockly-demo.appspot.com/static/media/',
  rtl: false,
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true
};

class MinimalBlockly extends Component {
  componentDidMount() {
    var blocklyArea = document.getElementById('blocklyArea');
    var blocklyDiv = document.getElementById('blocklyDiv');
    var workspacePlayground = Blockly.inject(blocklyDiv, {
      toolbox: document.getElementById('toolbox')
    });
    var onresize = function(e) {
      // Compute the absolute coordinates and dimensions of blocklyArea.
      var element = blocklyArea;
      var x = 0;
      var y = 0;
      do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
      } while (element);
      // Position blocklyDiv over blocklyArea.
      blocklyDiv.style.left = x + 'px';
      blocklyDiv.style.top = y + 'px';
      blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
      blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    };
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspacePlayground);

    this.workspace = Blockly.inject(this.area, options);
    const workspaceBlocks = document.getElementById('blockly-workspaceBlocks');
    Blockly.Xml.domToWorkspace(workspaceBlocks, this.workspace);
  }
  render() {
    return <div ref={c => (this.area = c)} />;
  }
}

export default MinimalBlockly;
