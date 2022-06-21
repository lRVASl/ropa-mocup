import React, { useState } from "react";
import { message, Select } from "antd";

interface Interface {
  handlerPurposeId: (id: string) => void;
}

const SelectPurposeId: React.FunctionComponent<Interface> = ({
  handlerPurposeId,
}): React.ReactElement => {
  const [purposesSelect, setPurposesSelect] = useState<string[]>([]);

  const handlerSelect = (id: string) => {
    setPurposesSelect(() => {
      const newValue = [...purposesSelect, id];
      const preValue = newValue.join?.(",");
      handlerPurposeId(preValue);
      return newValue;
    });
  };

  const handlerDeselect = (id: string) => {
    const filterSelect = purposesSelect.filter((filter) => filter !== id);
    if (filterSelect.length === 0) {
      handlerPurposeId("");
      setPurposesSelect(filterSelect);
      return;
    }
    setPurposesSelect(filterSelect);
    const preValue = filterSelect.join?.(",");
    handlerPurposeId(preValue);
  };

  return (
    <Select
      mode="multiple"
      style={{ minWidth: "400px", textAlign: "left" }}
      onSelect={handlerSelect}
      onDeselect={handlerDeselect}
      placeholder="Select Purpose"
    ></Select>
  );
};

export default SelectPurposeId;
