import { useEditorContext } from '@smartmind-team/thanosql-editor';
import { ComponentProps, useState } from 'react';
import { v4 } from 'uuid';

export const Tab = ({ name, active, children, ...props }: TabProps) => {
  return (
    <li style={{ listStyle: 'none', cursor: 'pointer', padding: 0, color: active ? '#535bf2' : 'inherit' }} {...props}>
      {children}
    </li>
  );
};

export const TabContainer = ({ children }: ComponentProps<'ul'>) => {
  return <ul style={{ display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>{children}</ul>;
};

export const TabNav = ({
  defaultTabList = [
    {
      id: v4(),
      name: 'tab1',
    },
  ],
}: TabNavProps) => {
  const [TabList, setTabList] = useState(defaultTabList);
  const [activeIndex, setActiveIndex] = useState(0);

  const { createTabSession, changeTabSession, removeTabSession, store } = useEditorContext();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0.5rem' }}>
      <TabContainer>
        {TabList.map(({ id, name }, idx) => (
          <Tab
            key={id}
            {...{ id, name }}
            active={idx === activeIndex}
            onClick={e => {
              changeTabSession(TabList[activeIndex].id, id);
              setActiveIndex(idx);
              e.stopPropagation();
            }}>
            {name}
            <a
              style={{ padding: '0rem 0.25rem' }}
              onClick={e => {
                if (TabList.length === 1) return;
                e.preventDefault();
                e.stopPropagation();
                TabList.splice(idx, 1);
                if (idx < activeIndex || activeIndex === TabList.length) setActiveIndex(prev => prev - 1);
                if (activeIndex === idx) {
                  removeTabSession(id);
                  changeTabSession(id, TabList[activeIndex].id);
                }
                setTabList([...TabList]);
              }}>
              ❎
            </a>
          </Tab>
        ))}
      </TabContainer>
      <button
        onClick={() => {
          const newTab = { id: v4(), name: 'tab' + (TabList.length + 1) };
          setTabList([...TabList, newTab]);
          changeTabSession(TabList[activeIndex].id, newTab.id);
          setActiveIndex(TabList.length);
        }}>
        add tab
      </button>
    </div>
  );
};

interface TabProps extends ComponentProps<'li'> {
  id: string;
  name?: string;
  active?: boolean;
}

interface TabNavProps extends ComponentProps<'div'> {
  defaultTabList?: Pick<TabProps, 'id' | 'name'>[];
}
