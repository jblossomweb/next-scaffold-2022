import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Image, { type Props } from './Image'

export default {
  title: 'components/atoms/Image',
  component: Image,
  argTypes: {
    alt: { control: 'text' },
    src: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    defaultUrl: { control: 'text' },
    className: { control: 'text' },
  },
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args: Props) => (
  <Image {...args} />
)

const sampleImage = {
  src: '/nextjs.png',
  width: 320,
  height: 192,
}

export const Sample = Template.bind({})
Sample.args = {
  alt: 'Sample',
  ...sampleImage,
}

export const Sized = Template.bind({})
Sized.args = {
  alt: 'Sized',
  ...sampleImage,
  width: 640,
  height: 384,
}
