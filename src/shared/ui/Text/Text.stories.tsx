import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/ui";
import { ThemeDecorator } from "shared/config/stortbook/ThemeDecorator/ThemeDecorator";
import { Text, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Title title title",
  text: "Text description Text description",
};

export const Error = Template.bind({});

Error.args = {
  title: "Title title title",
  text: "Text description Text description",
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});

onlyTitle.args = {
  title: "Title title title",
};

export const onlyText = Template.bind({});

onlyText.args = {
  text: "Text description Text description",
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
  title: "Title title title",
  text: "Text description Text description",
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});

onlyTitleDark.args = {
  title: "Title title title",
};

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});

onlyTextDark.args = {
  text: "Text description Text description",
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
