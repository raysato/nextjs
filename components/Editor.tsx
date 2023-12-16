"use client"

import EditorConfiguration from "../EditorConfiguration"
import EditorJS from '@editorjs/editorjs';
import "../app/editor.css"

export default function Editor() {

    const editor = new EditorJS(EditorConfiguration);

    const handleEditorSave = () => {
      editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
    }

    return (
      <>
        <div id="editorjs"></div>
        <div className="mx-auto w-fit"><button className="btn" onClick={handleEditorSave}>保存</button></div>
      </>
    )
  }