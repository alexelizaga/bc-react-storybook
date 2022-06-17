import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />;

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    label: 'No Label',
    allCaps: false,
    color: 'primary'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    label: 'No Label',
    allCaps: true,
    color: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    label: 'No Label',
    allCaps: false,
    color: 'secondary'
}

export const Tertieary = Template.bind({});
Tertieary.args = {
    size: 'normal',
    label: 'No Label',
    allCaps: false,
    color: 'tertiary'
}