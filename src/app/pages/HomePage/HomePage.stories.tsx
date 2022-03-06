import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import HomePage from './HomePage'

export default {
  title: 'views/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Sample = Template.bind({})
