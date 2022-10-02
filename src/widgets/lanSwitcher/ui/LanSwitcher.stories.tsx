import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/stortbook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/ui";
import { LanSwitcher } from "./LanSwitcher";

export default {
  title: "widgets/LanSwitcher",
  component: LanSwitcher,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LanSwitcher>;

const Template: ComponentStory<typeof LanSwitcher> = (args) => (
  <LanSwitcher {...args} />
);

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
