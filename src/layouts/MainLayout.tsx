import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Image,
  Layout,
  Menu,
  Modal,
  Result,
  Row,
  Space,
} from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import {
  BarChartOutlined,
  CaretDownOutlined,
  DashboardOutlined,
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { createAuth24TokenReader, useAuth24, UserRole } from "../common-auth";

import { MainMenu, MainMenuItem } from "./components/MainMenu";
import { MainRoute, MenuItem } from "./MainRoute";

import logo from "./images/D-PDPA.jpg";
import { OverviewDashboard } from "../screens/dashboard/OverviewDashboard";
import { OverviewCreate} from "../screens/create-processing/OverviewCreate"
import { loadAppConfig } from "../config/app-config";
import { OverviewSettingModal } from "./components/OverviewSettingModal";

const { Header, Sider, Content, Footer } = Layout;

export const MainLayout: React.FC = (): React.ReactElement => {
  const appConfig = loadAppConfig();
  const { auth24 } = useAuth24();
  const reader = createAuth24TokenReader(auth24);

  const menuItems: MenuItem[] = [
    {
      label: "Dashboard",
      icon: <DashboardOutlined />,
      path: "/dashboard",
      showInMenu: true,
      target: "/dashboard",
      roles: [UserRole.authSuperAdmin],
      component: <OverviewDashboard />,
    },
    {
      label: "Create Processing Activities Profile",
      icon: <FormOutlined />,
      path: "/createprocessingactivitiesprofile",
      showInMenu: true,
      target: "/createprocessingactivitiesprofile",
      roles: [UserRole.authSuperAdmin],
      component: <OverviewCreate />,
    }
  ].filter((menu) => reader.hasRole(menu.roles));

  const [collapse, setCollapse] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapse(!collapse);
  };

  const onClick = ({ key }: any) => {
    switch (key) {
      case "logout":
        auth24.logout();
        break;
      default:
    }
  };

  const [isModalVisibleResetPassword, setIsModalVisibleResetPassword] =
    useState(false);
  const [isModalVisibleProfile, setIsModalVisibleProfile] = useState(false);
  const [isModalVisibleOverviewSetting, setIsModalVisibleOverviewSetting] =
    useState(false);

  const showModalResetPass = () => {
    setIsModalVisibleResetPassword(true);
  };

  const handleOkResetPassword = () => {
    setIsModalVisibleResetPassword(false);
  };

  const handleCancelResetPassword = () => {
    setIsModalVisibleResetPassword(false);
  };

  const showModalProfile = () => {
    setIsModalVisibleProfile(true);
  };

  const handleOkProfile = () => {
    setIsModalVisibleProfile(false);
  };

  const handleCancelProfile = () => {
    setIsModalVisibleProfile(false);
  };

  const createMainMenuItem = (subMenu: MenuItem): MainMenuItem => ({
    label: subMenu.label,
    icon: subMenu.icon,
    path: subMenu.path,
  });

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="profile" onClick={showModalProfile}>
        Profile
      </Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  const [alias, setAlias] = React.useState("unknown");

  useEffect(() => {
    auth24.getOwnDetails().then((user) => {
      const alias = user.name ?? user.employeeId;
      if (alias) setAlias(alias);
    });
  }, []);

  return menuItems.length === 0 ? (
    <Result
      status="403"
      title="403"
      subTitle="ท่านยังไม่มีสิทธิ์ในการเข้าถึงระบบ CSM กรุณาตรวจสอบสิทธิ์ในการเข้าถึงกับผู้ดูแลระบบ."
      extra={
        <Button type="primary" onClick={() => auth24.login()}>
          Click to Login
        </Button>
      }
    />
  ) : (
    <>
      <OverviewSettingModal
        isVisible={isModalVisibleOverviewSetting}
        handleCancel={() => setIsModalVisibleOverviewSetting(false)}
      />
      <Router>
        <Modal
          title="Profile"
          visible={isModalVisibleProfile}
          onOk={handleOkProfile}
          onCancel={handleCancelProfile}
        >
          <Form name="profile" layout="inline">
            <Row justify="space-between">
              <Col style={{ marginRight: 150 }}>
                <Form.Item label="Full Name">{alias}</Form.Item>
              </Col>
              <Col style={{ marginRight: 150 }}>
                <Form.Item label="Employee ID">
                  {reader.getEmployeeId()}
                </Form.Item>
              </Col>
              <Col style={{ wordBreak: "break-word" }}>
                <Form.Item label="Group">{reader.getEmployeeGroup()}</Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
        <Modal
          title="Reset password"
          visible={isModalVisibleResetPassword}
          onOk={handleOkResetPassword}
          onCancel={handleCancelResetPassword}
        >
          <p>Reset your password</p>
        </Modal>
        <Layout>
          <Sider
            className="site-layout-background"
            trigger={null}
            collapsible
            collapsed={collapse}
            style={{ backgroundColor: "white" }}
          >
            <Row className="logo">
              <Col style={{ textAlign: "center" }}>
                <Image preview={false} src={logo} />
              </Col>
            </Row>
            <MainMenu
              inlineCollapsed={collapse}
              items={menuItems
                .filter((m) => m.showInMenu)
                .map(({ label, icon, target, exact, subMenu }) => ({
                  label,
                  icon,
                  path: target,
                  exact,
                  subMenu:
                    subMenu &&
                    subMenu
                      .filter((menu) => menu.showInMenu)
                      .map((menu: MenuItem) => createMainMenuItem(menu)),
                }))}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
              className="header"
              style={{
                backgroundColor: "white",
                padding: 0,
                textAlign: "left",
              }}
            >
              <Row>
                <Col>
                  {React.createElement(
                    collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: toggleCollapsed,
                    }
                  )}
                </Col>
                <Col
                  style={{
                    marginRight: 5,
                    alignItems: "center",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  <Space>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <span>{alias}</span>
                  </Space>
                </Col>
                <Col style={{ marginRight: 20 }}>
                  <Dropdown overlay={menu}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <CaretDownOutlined />
                    </a>
                  </Dropdown>
                </Col>
              </Row>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                paddingBottom: 24,
                paddingLeft: 24,
                paddingRight: 24,
                margin: "0px 16px",
                minHeight: 280,
              }}
            >
              <MainRoute menuItems={[...menuItems]} />
            </Content>
            <Footer style={{ textAlign: "center", color: "rgba(0,0,0,.45)" }}>
              <p>D-PDPA | Consent Management Version: {appConfig.appVersion}</p>
              <p>Copyright ©2021 OSD</p>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};
