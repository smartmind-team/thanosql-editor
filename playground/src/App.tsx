import Editor from "@smartmind-team/thanosql-editor";
import { useEditorContext } from "@smartmind-team/thanosql-editor";

function App() {
  const { isQueryStarting, editor, setQueryStarting } = useEditorContext();

  return (
    <div
      className="App"
      style={{ width: "100vw", height: 800 }}
      onClick={(e) => {}}
    >
      <Editor
        language="thanosql"
        workerPaths={{
          default: {
            url: "../node_modules/monaco-editor-core/esm/vs/editor/editor.worker.js",
            base: window.location.href,
            isModule: true,
          },
          thanosql: {
            url: "../node_modules/@smartmind-team/thanosql-editor/lib/esm/thanosql/thanos.worker.js",
            base: window.location.href,
            isModule: true,
          },
        }}
        onStartQuery={(editor) => {
          setQueryStarting(true);
          const queryValue = editor?.getValue();
          console.log(queryValue);
          setTimeout(() => setQueryStarting(false), 2000);
        }}
      />
    </div>
  );
}

export default App;
