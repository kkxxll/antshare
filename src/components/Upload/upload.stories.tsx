import { Meta } from "@storybook/react";

import { Upload } from "./upload";
import Button from "../Button/button";
import Icon from "../Icon/icon";

export default {
  title: "Upload",
  id: "Upload",
  component: Upload,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Upload>;

export const ASimpleUpload = (args: any) => (
  <Upload {...args} action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
    <Button size="lg" btnType="primary">
      <Icon icon="upload" /> 点击上传{" "}
    </Button>
  </Upload>
);
ASimpleUpload.storyName = "普通的 Upload 组件";
export const BCheckUpload = (args: any) => {
  const checkFileSize = (file: File) => {
    if (file.size / 1024 > 50) {
      alert("file too big");
      return false;
    }
    return true;
  };
  return (
    <Upload
      {...args}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={checkFileSize}
    >
      <Button size="lg" btnType="primary">
        <Icon icon="upload" /> 不能传大于50Kb！
      </Button>
    </Upload>
  );
};
BCheckUpload.storyName = "上传前检查文件大小";
export const CDragUpload = (args: any) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="fileName"
    multiple
    drag
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>点击或者拖动到此区域进行上传</p>
  </Upload>
);
CDragUpload.storyName = "拖动上传";
