import { FC } from "react";
import ReactQuill from "react-quill";
import { Container } from "./TextEditor.styles";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}
const TextEditor = ({ value, setValue, color }: TextEditorProps) => {
  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "color",
    "background",
    "image",
    "blockquote",
    "code-block",
  ];
  const modules = {
    toolbar: [
      [{ list: "ordered" }, { list: "bullet" }],
      [],
      ["bold", "italic", "underline", "strike"],
      [],
      [{ color: [] }, { background: [] }],
      [],
      ["image", "blockquote", "code-block"],
    ],
  };
  return (
    <Container $noteColor={color}>
      <ReactQuill
        formats={formats}
        modules={modules}
        value={value}
        theme="snow"
        onChange={setValue}
        placeholder="글을 작성하세요"
      />
    </Container>
  );
};

export default TextEditor;
