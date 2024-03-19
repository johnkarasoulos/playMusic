define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class FilePickerSelectChain1 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {object[]} params.files 
     */
    async run(context, { files }) {
      const { $page, $flow, $application } = context;

      $page.variables.holdsound = files[0];

      const callFunction2Result = await this.convertAudio(context, { audioFile: files[0] });

      $page.variables.soundURL = callFunction2Result;
    }

    /**
     * @param {Object} context
     */
    async callModuleFunctionFunction(context) {
      const { $page, $flow, $application } = context;
    
      const callFunctionResult = await this.convertAudio(context, { audioFile: $page.variables.holdsound });

      $page.variables.soundURL = callFunctionResult;
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.audioFile 
     */
    async convertAudio(context, { audioFile }) {
      const { $page, $flow, $application } = context;
        return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(audioFile);
  });
    
    }
  }

  return FilePickerSelectChain1;
});
