import React from 'react';
import Tabs from 'rc-tabs';
import type { TabsProps } from 'rc-tabs';
import '../../assets/index.less';

const items: TabsProps['items'] = [];

for (let i = 0; i < 200; i += 1) {
  items.push({ key: String(i), label: `Tab ${i}`, children: `Content of ${i}` });
}

export default () => {
  const [gutter, setGutter] = React.useState(true);
  const [destroy, setDestroy] = React.useState(false);

  if (destroy) {
    return null;
  }

  return (
    <div style={{ height: 2000 }}>
      <React.StrictMode>
        <div style={{ maxWidth: 550 }}>
          <Tabs
            tabBarGutter={gutter ? 32 : null}
            tabBarExtraContent="extra"
            defaultActiveKey="8"
            moreIcon="..."
            items={items}
          />
        </div>
      </React.StrictMode>

      <label>
        <input type="checkbox" checked={gutter} onChange={() => setGutter(!gutter)} />
        Set `tabBarGutter`
      </label>
      <button
        type="button"
        onClick={() => {
          setDestroy(true);
        }}
      >
        Destroy
      </button>
    </div>
  );
};
