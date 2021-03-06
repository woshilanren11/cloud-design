/**
 * @title 无障碍
 * @description 提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alicloudfe/components'

function onChange(info) {
  console.log('onChange callback : ', info)
}

export default function DemoComponent() {
  return (
    <Style>
      [
      <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() => {}}
        onChange={onChange}
        key="5"
      >
        <Button type="secondary" style={{ margin: '0 0 10px' }}>
          upload{' '}
        </Button>
      </Upload>
      ]
    </Style>
  )
}
const Style = styled.div``
