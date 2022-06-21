import { Button, Col, Modal, Row, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useService } from "../../drivers/auth24/use-service";

type Props = {
  isVisible: boolean;
  handleCancel: () => void;
};

export const OverviewSettingModal: React.FC<Props> = ({
  isVisible,
  handleCancel,
}) => {
  return (
    <Modal title="Overview Setting" visible={isVisible} onCancel={handleCancel}>
      <Select
        placeholder="Please select"
        mode="multiple"
        style={{ width: "350px" }}
        showArrow
      ></Select>
    </Modal>
  );
};
