import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import ImageTool from '@editorjs/image';
import List from "@editorjs/list";
import Embed from '@editorjs/embed';

const EditorConfiguration = {
    /**
     * Id of Element that should contain Editor instance
     */
    holder: 'editorjs',
    tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'タイトルを入力',
            levels: [1, 2, 3],
            defaultLevel: 1
          }
        },
        linkTool: {
            class: LinkTool,
            config: {
                // endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
            }
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                // byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                // byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
              }
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            },
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                twitter: true,
                coub: true
              }
            }
          },
      },
  }
  
  export default EditorConfiguration;