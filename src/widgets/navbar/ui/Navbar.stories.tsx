import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/stortbook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/ui";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "shared/config/stortbook/StoreDecorator/StoreDecorator";

export default {
  title: "widgets/Navbar",
  component: Navbar,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});

Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
