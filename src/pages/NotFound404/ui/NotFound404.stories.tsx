import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/stortbook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/ui";
import { NotFound404 } from "./NotFound404";

export default {
  title: "pages/NotFound404",
  component: NotFound404,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotFound404>;

const Template: ComponentStory<typeof NotFound404> = (args) => <NotFound404 />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
