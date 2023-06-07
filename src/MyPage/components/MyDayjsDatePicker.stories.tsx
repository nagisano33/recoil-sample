import type { Meta, StoryObj } from "@storybook/react";
import { MyDayjsDatePicker } from "./MyDayjsDatePicker";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "MyDayjsDatePicker",
  component: MyDayjsDatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof MyDayjsDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    // label: "MyDayjsDatePicker"
  },
};
