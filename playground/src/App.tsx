import Editor from "@smartmind-team/thanosql-editor";
import { useEditorContext } from "@smartmind-team/thanosql-editor";
import { useState } from "react";
import { TabNav, ActiveTab, useTabNavStates } from "./TabNav";
import { defaultTab } from "./assets/config";
import { useRecoilValue } from "recoil";
import { EditorProps } from "@smartmind-team/thanosql-editor/lib/esm/components/Editor/Editor";
import { v4 } from "uuid";

function App() {
  const [testQuery, setTestQuery] = useState("");
  const { isQueryStarting, editor, setIsQueryStarting, isEditorLoading, changeTabSession, refreshTabSession, getSessionState, setTabSession } =
    useEditorContext();
  const [defaultPageHidden, setDefaultPageHidden] = useState(false);
  const { activeTab, TabList, setTabList, setActiveIndex } = useTabNavStates();

  const handleStart: EditorProps["onStartQuery"] = (selectededitor, targetValue) => {
    setIsQueryStarting(true);
    const queryValue = selectededitor?.getValue();
    console.log("entire query:\n", queryValue, "\nselection query:\n", targetValue);
    console.log(activeTab);
    setTimeout(() => setIsQueryStarting(false), 2000);
  };

  const addStoredQueryTab = (value?: string) => {
    const newTab = { id: v4(), name: "tab" + (TabList?.length + 1) };
    setTabList([...TabList, newTab]);
    changeTabSession(newTab.id, { value });
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
          {!isEditorLoading && editor && <TabNav defaultTabList={[defaultTab]} onRemoveAll={() => setDefaultPageHidden(false)} />}
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
