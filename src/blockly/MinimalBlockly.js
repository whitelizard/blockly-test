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
    this.workspace = Blockly.inject(this.area, options);
    const workspaceBlocks = document.getElementById('blockly-workspaceBlocks');
    Blockly.Xml.domToWorkspace(workspaceBlocks, this.workspace);
  }
  render() {
    return <div ref={c => (this.area = c)} />;
  }
}

export default MinimalBlockly;
