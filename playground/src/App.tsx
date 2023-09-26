import Editor from "@smartmind-team/thanosql-editor";
import { useEditorContext } from "@smartmind-team/thanosql-editor";
import { useState } from "react";
import { TabNav, useTabNavStates } from "./TabNav";
import { defaultTab } from "./assets/config";
import { EditorLauncherProps } from "@smartmind-team/thanosql-editor/lib/esm/components/EditorLauncher";
import { v4 } from "uuid";

function App() {
  const [testQuery, setTestQuery] = useState("");
  const { editorRef, setIsQueryStarting, isEditorLoading, changeTabSession } = useEditorContext();
  const [defaultPageHidden, setDefaultPageHidden] = useState(false);
  const { activeTab, TabList, setTabList, setActiveIndex } = useTabNavStates();

  const handleStart: EditorLauncherProps["onStartQuery"] = (selectededitor, targetValue) => {
    setIsQueryStarting(true);
    const queryValue = selectededitor?.getValue();
    console.log("entire query:\n", queryValue, "\nselection query:\n", targetValue);
    console.log(activeTab);
    setTimeout(() => setIsQueryStarting(false), 2000);
  };

  const addStoredQueryTab = (value?: string) => {
    const newTab = { id: v4(), name: "tab" + (TabList?.length + 1) };
    setTabList([...TabList, newTab]);
    changeTabSession(editorRef.current, newTab.id, { value });
    setActiveIndex(TabList.length);
    setDefaultPageHidden(true);
  };

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexFlow: "column nowrap",
      }}>
      <div style={{ fontSize: "1rem", fontWeight: 900 }}>Editor Example</div>
      <textarea value={testQuery} onChange={e => setTestQuery(e.target.value)}></textarea>
      <button onClick={() => addStoredQueryTab(testQuery)}>add query</button>
      <button
        onClick={() => {
          setDefaultPageHidden(!defaultPageHidden);
          if (TabList.length === 0) {
            setTabList([...TabList, defaultTab]);
            // setTabSession(defaultTab.id, { value: "--default value" });
            // refreshTabSession(defaultTab.id);
          }
        }}>
        toggle
      </button>
      {defaultPageHidden && (
        <>
          {!isEditorLoading && !!editorRef.current && <TabNav defaultTabList={[defaultTab]} onRemoveAll={() => setDefaultPageHidden(false)} />}

          <div style={{ flex: 2 }}>
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
              launcherProps={{
                onStartQuery: handleStart,
                onStopQuery: () => console.log("stop"),
                children: (
                  <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", height: "100%" }}>
                    <>test action</>
                  </div>
                ),
              }}
              defaultValue={"-- default value"}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
