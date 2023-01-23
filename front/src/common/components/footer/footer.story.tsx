import { Footer } from './footer.components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const View = Template.bind({});
