import Editor from '@smartmind-team/thanosql-editor';
import { useEditorContext } from '@smartmind-team/thanosql-editor';
import { useState } from 'react';
import { TabNav } from './TabNav';
import { defaultTab } from './assets/config';

function App() {
  const { isQueryStarting, editor, setIsQueryStarting, isEditorLoading } = useEditorContext();
  const [defaultPageHidden, setDefaultPageHidden] = useState(false);
  return (
    <div
      className='App'
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexFlow: 'column nowrap',
      }}>
      <div style={{ fontSize: '1rem', fontWeight: 900 }}>Editor Example</div>
      <button onClick={() => setDefaultPageHidden(!defaultPageHidden)}>toggle</button>
      {defaultPageHidden && (
        <>
          {!isEditorLoading && editor && <TabNav defaultTabList={[defaultTab]} onRemoveAll={() => setDefaultPageHidden(false)} />}
          <div style={{ flex: 2 }}>
            <Editor
              language='thanosql'
              workerPaths={{
                default: {
                  url: '../node_modules/monaco-editor-core/esm/vs/editor/editor.worker.js',
                  base: window.location.href,
                  isModule: true,
                },
                thanosql: {
                  url: '../node_modules/@smartmind-team/thanosql-editor/lib/esm/thanosql/thanos.worker.js',
                  base: window.location.href,
                  isModule: true,
                },
              }}
              onStartQuery={editor => {
                setIsQueryStarting(true);
                const queryValue = editor?.getValue();
                console.log(queryValue);
                setTimeout(() => setIsQueryStarting(false), 2000);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
