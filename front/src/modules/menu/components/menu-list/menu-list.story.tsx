import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import pizzaMenu from '@app/mocks/pizza.json';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Menu/Menu List',
  component: MenuList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MenuList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuList> = (args) => (
  <MenuList {...args} />
);

export const View = Template.bind({});
View.args = {
  items: pizzaMenu,
};
