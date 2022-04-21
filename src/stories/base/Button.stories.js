import { BaseButton } from '../../components';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Base/Button',
  component: BaseButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: {},
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'link', 'save', 'cancel'],
    },
    tag: {
      control: { type: 'select' },
      options: ['a', 'button'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<BaseButton v-bind="args">Button content</BaseButton>',
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args

// Styles
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  tag: 'button',
  size: 'md'
};
