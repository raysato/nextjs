"use client"

import EditorConfiguration from "../EditorConfiguration"
import EditorJS from '@editorjs/editorjs';
import "../app/editor.css"

export default function Editor() {

    const editor = new EditorJS(EditorConfiguration);

    return (
      <>
        <div id="editorjs"></div>
      </>
    )
  }