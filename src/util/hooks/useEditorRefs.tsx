import { useRef } from "react";

export const useEditorRefs = () => {
  const editorRefs = useRef<Record<string, any>>({});
  const getEditorRef = (editorId: string) => editorRefs.current?.[editorId];

  return {
    editorRefs,
    getEditorRef,
  };
};
