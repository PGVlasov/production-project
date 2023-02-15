import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/stortbook/StoreDecorator/StoreDecorator";
import { LogInForm } from "./LogInForm";

export default {
  title: "feature/LogInForm",
  component: LogInForm,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LogInForm>;

const Template: ComponentStory<typeof LogInForm> = (args) => (
  <LogInForm {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: "admin", password: "123" },
  }),
];
