import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

export default React.memo(function SiderMenu(props) {
  const [menuTreeNode, setMenuTreeNode] = useState(null);

  const [currentSelectMenu, setCurrentSelectMenu] = useState([
    '/authorized/overview/analysis',
  ]);
  
  const { route: { routes }, collapsed } = props;

  const renderMenu = (data) => {
    return data.map((item) => {
      if (item.routes) {
        return (
          <Menu.SubMenu
            key={item.path}
            title={item.meta.name}
            icon={<MailOutlined />}
          >
            {renderMenu(item.routes)}
          </Menu.SubMenu>
        );
      }
      if (item['hidden']) return null;
      return (
        <Menu.Item key={item.path} title={item.meta.name}>
          <Link to={item.path} replace>
            {item.meta.name}
          </Link>
        </Menu.Item>
      );
    });
  };

  const handleSelectMenu = (value) => {
    setCurrentSelectMenu([value.key]);
  };

  useEffect(() => {
    const treeNode = renderMenu(routes);
    setMenuTreeNode(treeNode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={currentSelectMenu}
        selectedKeys={currentSelectMenu}
        onClick={handleSelectMenu}
      >
        {menuTreeNode}
      </Menu>
    </Layout.Sider>
  );
});

