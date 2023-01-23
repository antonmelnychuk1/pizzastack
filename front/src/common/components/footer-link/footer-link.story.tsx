import { FooterLink } from './footer-link.components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Footer link',
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args} />
  </ul>
);

export const View = Template.bind({});
View.args = {
  href: 'tel:+48555555555',
  children: '+48 555 555 555',
};
