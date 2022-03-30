import Button from '../components/Button.ts'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['danger', 'dark', 'white', 'warning'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'standard'],
      control: { type: 'radio' },
    },
    color: {
      options: ['red', 'white'],
      control: { type: 'radio' },
    },
  },
}

const Template = args => < Button {...args}>search</Button>

export const Warning = Template.bind({})
Warning.args = {
  theme: 'warning'
}

export const Dark = Template.bind({})
Dark.args = {
  theme: 'dark'
}

export const ColorWhite = Template.bind({})
ColorWhite.args = {
  color: 'white'
}

export const ColorRed = Template.bind({})
ColorRed.args = {
  color: 'red',
  theme: 'dark'
}


export const SizeSmall = Template.bind({})
SizeSmall.args = {
  theme: 'danger',
  size: 'small'
}

export const SizeStandard = Template.bind({})
SizeStandard.args = {
  theme: 'danger',
  size: 'standard'
}

export const SizeMedium = Template.bind({})

SizeMedium.args = {
  theme: 'danger',
  size: 'medium'
}

export const Danger = Template.bind({})
Danger.args = {
  theme: 'danger',
  size: 'small'
}