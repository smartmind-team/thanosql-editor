import Editor, { EditorLauncherProps } from "@smartmind-team/thanosql-editor";
import { useEditorContext } from "@smartmind-team/thanosql-editor";
import { useState } from "react";
import { useTabNavStates, TabNav } from "./TabNav";
import { defaultTab } from "./assets/config";
import { v4 } from "uuid";

function App() {
  const [testQuery, setTestQuery] = useState("");
  const [defaultPageHidden, setDefaultPageHidden] = useState(false);
  const { activeTab, TabList, setTabList, setActiveIndex, activeIndex } = useTabNavStates();
  const { editorRefs, isEditorReady, activeEditors, getEditorModules } = useEditorContext();
  const { changeTabSession, setIsQueryStarting, isEditorLoading, getEditor } = getEditorModules("example") ?? {};
  const handleStart: EditorLauncherProps["onStartQuery"] = (selectededitor, targetValue) => {
    setIsQueryStarting(true);
    const queryValue = selectededitor?.getValue();
    console.log("entire query:\n", queryValue, "\nselection query:\n", targetValue);
    console.log(activeTab);
    setTimeout(() => editorRefs.current["example"].setIsQueryStarting(false), 2000);
  };

  const addStoredQueryTab = (value?: string) => {
    const editor = editorRefs?.current["example"].getEditor();
    if (!editor) return;

    const newTab = { id: v4(), name: "tab" + (TabList?.length + 1) };
    setTabList([...TabList, newTab]);

    changeTabSession(TabList[activeIndex].id, newTab.id, { value });
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
          }
        }}>
        toggle
      </button>

      {isEditorReady("example") && <TabNav defaultTabList={[defaultTab]} onRemoveAll={() => setDefaultPageHidden(false)} />}

      <div style={{ flex: 2, display: "flex" }}>
        {defaultPageHidden && (
          <Editor
            // ref={(ref: any) => {
            //   if (editorRefs) editorRefs.current["example"] = ref;
            // }}
            editorId="example"
            defaultSessionId={activeTab?.id ?? defaultTab.id}
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
            options={{
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              overviewRulerBorder: false,
              lineHeight: 16,
              padding: { top: 8, bottom: 8 },
            }}
          />
        )}
        <Editor
          editorId="readonly-example"
          width={"100%"}
          defaultValue={"readonly"}
          launcherProps={{
            onStartQuery: editor => console.log(editor?.setValue("is starting...")),
          }}
          options={{
            readOnly: true,
          }}
        />
      </div>
    </div>
  );
}

export default App;
