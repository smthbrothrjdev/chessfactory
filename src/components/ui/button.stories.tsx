import type {Meta, StoryObj} from '@storybook/react'
import {Button} from './button'
import {action} from '@storybook/addon-actions'
import { Layout } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: "components/ui/button",
  component: Button,
  tags:['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant:{
      control: 'select',
      description: 'Available Variants',
      options:[
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ]
    }
  }
}
export default meta;
type Story = StoryObj<typeof Button>

export const Defualt: Story = {
  args: {
    variant: "default" ,
    size: "sm",
    disabled: false,
    onClick: action('default click'),
    children: "default button",
    className: "shadow-lg",
  }
}
export const Destructive: Story = {
  args: {
    variant: "destructive" ,
    size: "sm",
    disabled: false,
    onClick: action('default click'),
    children: "default button",
    className: "shadow-lg",
  }
}
export const outline: Story = {
  args: {
    variant: "outline" ,
    size: "sm",
    disabled: false,
    onClick: action('default click'),
    children: "default button",
    className: "shadow-lg",
  }
}
export const Secondary: Story = {
  args: {
    variant: "secondary" ,
    size: "sm",
    disabled: false,
    onClick: action('default click'),
    children: "default button",
    className: "shadow-lg",
  }
}

export const Ghost: Story = {
  args: {
    variant: "ghost" ,
    size: "sm",
    disabled: false,
    onClick: action('default click'),
    children: "default button",
    className: "shadow-lg",
  }
}

export const Link: Story = {
  args: {
    variant: "link" ,
    size: "sm",
    disabled: false,
    onClick: action('default click'),
    children: "default button",
    className: "shadow-lg",
  }
}
