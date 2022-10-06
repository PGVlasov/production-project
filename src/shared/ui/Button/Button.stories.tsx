import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonSize, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/stortbook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/ui";

export default {
  title: "shared/Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Text",
};

export const Cleaar = Template.bind({});
Cleaar.args = {
  children: "Text",
  theme: ThemeButton.CLEAR,
};

export const background = Template.bind({});
background.args = {
  children: "Text",
  theme: ThemeButton.BACKGROUND,
};

export const backgroundInverted = Template.bind({});
backgroundInverted.args = {
  children: "Text",
  theme: ThemeButton.BACKGROUND_INVERTED,
};

export const squere = Template.bind({});
squere.args = {
  children: ">",
  theme: ThemeButton.BACKGROUND,
  squere: true,
};
export const squereSizeXL = Template.bind({});
squereSizeXL.args = {
  children: ">",
  theme: ThemeButton.BACKGROUND,
  squere: true,
  size: ButtonSize.XL,
};

export const squereSizeL = Template.bind({});
squereSizeL.args = {
  children: ">",
  theme: ThemeButton.BACKGROUND,
  squere: true,
  size: ButtonSize.L,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.M,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
