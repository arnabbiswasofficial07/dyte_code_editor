import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
  const { language, displayName, value, onChange, theme } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor">
      <div className="editor_title">{displayName}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: theme === true ? "material" : "",

          lineNumbers: true
        }}
      />
    </div>
  );
}
