import { useEditorContext } from "@smartmind-team/thanosql-editor";
import { ComponentProps } from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { v4 } from "uuid";
import { defaultTab } from "./assets/config";

export const Tab = ({ name, active, children, ...props }: TabProps) => {
  return (
    <li style={{ listStyle: "none", cursor: "pointer", padding: 0, color: active ? "#535bf2" : "inherit" }} {...props}>
      {children}
    </li>
  );
};

export const TabContainer = ({ children }: ComponentProps<"ul">) => {
  return <ul style={{ display: "flex", gap: "1rem", margin: 0, padding: 0 }}>{children}</ul>;
};

export const TabNav = ({ defaultTabList, onRemoveAll }: TabNavProps & { onRemoveAll: () => void }) => {
  const [TabList, setTabList] = useRecoilState(TabListAtom);
  const [activeIndex, setActiveIndex] = useRecoilState(TabActiveIndex);

  const { changeTabSession, removeTabSession, getSessionState, store } = useEditorContext();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0.5rem" }}>
      <TabContainer>
        {TabList?.map(({ id, name }, idx) => (
          <Tab
            key={id}
            {...{ id, name }}
            active={idx === activeIndex}
            onClick={e => {
              changeTabSession(id);
              setActiveIndex(idx);
              e.stopPropagation();
            }}>
            {name}
            <a
              style={{ padding: "0rem 0.25rem" }}
              onClick={e => {
                if (TabList.length === 1) return onRemoveAll();
                e.preventDefault();
                e.stopPropagation();
                const tabList = [...TabList];
                tabList.splice(idx, 1);
                removeTabSession(id);

                const nextIndex = idx < activeIndex || activeIndex === TabList.length - 1 ? activeIndex - 1 : activeIndex;
                setActiveIndex(nextIndex);

                if (activeIndex === idx) {
                  changeTabSession(tabList?.[nextIndex].id);
                }
                setTabList([...tabList]);
              }}>
              ❎
            </a>
          </Tab>
        ))}
      </TabContainer>
      <button
        onClick={() => {
          const newTab = { id: v4(), name: "tab" + (TabList?.length + 1) };
          setTabList([...TabList, newTab]);
          changeTabSession(newTab.id);
          setActiveIndex(TabList.length);
        }}>
        add tab
      </button>
    </div>
  );
};

interface TabProps extends ComponentProps<"li"> {
  id: string;
  name?: string;
  active?: boolean;
}

interface TabNavProps extends ComponentProps<"div"> {
  defaultTabList?: Pick<TabProps, "id" | "name">[];
}

export const TabListAtom = atom<Pick<TabProps, "id" | "name">[]>({
  key: "tablist",
  default: [],
});

export const TabActiveIndex = atom({
  key: "tab/activeIndex",
  default: 0,
});

export const ActiveTabSelector = selector({
  key: "activeTab",
  get: ({ get }) => get(TabListAtom)?.[get(TabActiveIndex)],
});

export const useTabNavStates = () => {
  const [TabList, setTabList] = useRecoilState(TabListAtom);
  const [activeIndex, setActiveIndex] = useRecoilState(TabActiveIndex);
  const activeTab = useRecoilValue(ActiveTabSelector);
  return { TabList, setTabList, activeIndex, setActiveIndex, activeTab };
};
