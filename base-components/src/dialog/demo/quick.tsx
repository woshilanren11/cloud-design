/**
 * @title 快捷调用
 * @description Dialog 提供 alert 和 confirm 的快掉调用方式，以及更底层的 show 方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Dialog, ConfigProvider } from '@alicloudfe/components'

const popupAlert = () => {
  Dialog.alert({
    title: 'Alert',
    content: 'alert content alert content...',
    okProps: { children: 'Custom OK' },
    onOk: () => console.log('ok')
  })
}

const popupConfirm = () => {
  Dialog.confirm({
    title: 'Confirm',
    content: 'confirm content confirm content...',
    onOk: () => console.log('ok'),
    onCancel: () => console.log('cancel')
  })
}

const popupShow = () => {
  const dialog = Dialog.show({
    title: 'Custom',
    content: 'custom content custom content...',
    footer: (
      <Button warning type="primary" onClick={() => dialog.hide()}>
        Custom button
      </Button>
    )
  })
}

const popupCustomIcon = () => {
  Dialog.confirm({
    title: 'Confirm',
    content: 'set icon as "warning" ',
    messageProps: {
      type: 'warning'
    },
    onOk: () => console.log('ok'),
    onCancel: () => console.log('cancel')
  })
}

export default function DemoComponent() {
  return (
    <Style>
      <ConfigProvider locale={{ Dialog: { ok: 'OK', cancel: 'Cancel' } }}>
        <span>
          <Button onClick={popupAlert}>Alert</Button> &nbsp;
          <Button onClick={popupConfirm}>Confirm</Button> &nbsp;
          <Button onClick={popupShow}>Show</Button> &nbsp;
          <Button onClick={popupCustomIcon}>Custom Icon</Button>
        </span>
      </ConfigProvider>
    </Style>
  )
}
const Style = styled.div``
