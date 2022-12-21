import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    fontColor: { control: 'color' },
    color: { control: 'select' },
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  fontColor: '#5517ac',
};