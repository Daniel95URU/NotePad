import { createContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune"
import Underline from "@editorjs/underline"
import Header from "@editorjs/header"
import Alert from "editorjs-alert"
import ColorPlugin from "editorjs-text-color-plugin"
import Checklist from "@editorjs/checklist"
import Embed from "@editorjs/embed"
import List from "@editorjs/list"
import ChangeCase from "editorjs-change-case"
import SimpleImage from "@editorjs/simple-image"
import Marker from "@editorjs/marker"
import InlineCode from "@editorjs/inline-code"
import Strikethrough from "@sotaproject/strikethrough"
import Paragraph from "@editorjs/paragraph"

export const Edit = createContext()

function EditorContext(props) {
  const editRef = useRef(null)
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Escribe una nota",
      tools: {
        textAlignment: {
          class: AlignmentBlockTune,
          config: {
            default: "left",
            blocks: {
              header: "center"
            }
          }
        },
        paragraph: {
          class: Paragraph,
          tunes: ["textAlignment"]
        },
        header: {
          class: Header,
          inlineToolbar: true,
          tunes: ["textAlignment"],
          config: {
            placeholder: "Introduce una cabecera",
            levels: [1, 2, 3, 4, 5],
            defaultLevel: 1,
          }
        },
        alert: {
          class: Alert,
          config: {
            defaultType: "primary",
            messagePlaceholder: "Escribe algo"
          }
        },
        list: {
          class: List,
          config: {
            defaultStyle: "unordered"
          }
        },
        checklist: {
          class: Checklist,
        },
        image: {
          class: SimpleImage,
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              codepen: true,
            }
          }
        },
        underline: {
          class: Underline,
        },
        strikethrough: {
          class: Strikethrough,
        },
        Marker: {
          class: Marker,
        },
        inlineCode: {
          class: InlineCode,
        },
        changeCase: {
          class: ChangeCase,
        },
        Color: {
          class: ColorPlugin,
          config: {
            colorCollections: [
              '#F6D285', 
              '#00FF32', 
              '#00FFE8', 
              '#FF003A', 
              '#FF00C5', 
              '#6123E5', 
              '#E59923', 
              '#75BF61', 
              '#786B6B', 
              '#C24C39', 
              '#FFFFFF', 
              '#000000',
            ],
            defaultColor: "#0F1300",
            customPicker: true,
          }
        }
      },
    })
    editRef.current = editor 
  }
  return (  
    <Edit.Provider value={{initEditor, editRef}}>
      {props.children}
    </Edit.Provider>
  );
}

export default EditorContext;