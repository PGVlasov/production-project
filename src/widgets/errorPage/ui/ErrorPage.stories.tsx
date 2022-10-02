import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/stortbook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/ui";
import { ErrorPage } from "./ErrorPage";

export default {
  title: "widgets/LanSwitcher",
  component: ErrorPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
  <ErrorPage {...args} />
);

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
