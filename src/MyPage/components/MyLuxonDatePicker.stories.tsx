import type { Meta, StoryObj } from "@storybook/react";
import { MyLuxonDatePicker } from "./MyLuxonDatePicker";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "MyLuxonDatePicker",
  component: MyLuxonDatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof MyLuxonDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    // label: "MyLuxonDatePicker"
  },
};
