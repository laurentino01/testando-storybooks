import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button } from "../button";

const button: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default button;

type Story = StoryObj<typeof Button>;
    
export const Primary: Story = {
  args: {
    Primary: true,
  },
};
