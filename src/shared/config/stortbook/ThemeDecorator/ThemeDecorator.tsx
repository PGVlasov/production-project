import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/ui";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <div className={`app ${theme} `}>
      <StoryComponent />
    </div>
  );
