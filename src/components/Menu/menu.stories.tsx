import { MenuItem } from "./menuitem";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";
import Menu from "./menu";
import "./style.scss";
import SubMenu from "./subMenu";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Menu",
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onSelect: fn()
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Horizontal: Story = {
  args: {
    defaultIndex: "0",
    mode: "horizontal",
    children: [
      <MenuItem>active</MenuItem>,
      <MenuItem disabled>disabled</MenuItem>,
      <MenuItem>xyz</MenuItem>,
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>,
      <SubMenu title="opened">
        <MenuItem>opened1</MenuItem>
      </SubMenu>
    ],
  },
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);
    // const menu = canvas.getByRole('horizontal');
    // await userEvent.click(menu);
  },
};

export const Vertical: Story = {
  args: {
    defaultIndex: "0",
    mode: "vertical",
    children: [
      <MenuItem>active</MenuItem>,
      <MenuItem disabled>disabled</MenuItem>,
      <MenuItem>xyz</MenuItem>,
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>,
      <SubMenu title="opened">
        <MenuItem>opened1</MenuItem>
      </SubMenu>
    ],
  },
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);
    // const menu = canvas.getByRole('horizontal');
    // await userEvent.click(menu);
  },
};
