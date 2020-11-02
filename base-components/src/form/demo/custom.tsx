/**
 * @title 自定义布局
 * @description 标签位置：上、左
 */

import * as React from 'react'
import styled from 'styled-components'

import {
  Form,
  Input,
  Switch,
  Grid,
  Button,
  Icon,
  Balloon
} from '@alicloudfe/components'

const FormItem = Form.Item
const { Row, Col } = Grid

const style = {
  padding: '20px',
  background: '#F7F8FA',
  margin: '20px'
}
const formItemLayout = {
  labelCol: { fixedSpan: 4 }
}
const label = (
  <span>
    name：
    <Balloon
      type="primary"
      trigger={<Icon type="prompt" size="small" />}
      closable={false}
    >
      blablablablablablablabla
    </Balloon>
  </span>
)

class Demo extends React.Component {
  state = {
    labelAlign: 'top'
  }
  handleChange = (v) => {
    this.setState({
      labelAlign: v ? 'left' : 'top'
    })
  }
  render() {
    const labelAlign = this.state.labelAlign

    return (
      <div>
        <h3>Label Position</h3>
        <Switch
          checkedChildren="left"
          unCheckedChildren="top"
          checked={this.state.labelAlign === 'left'}
          onChange={this.handleChange}
        />

        <Form style={style}>
          <Row gutter="4">
            <Col>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label={label}
                required
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Long search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
            </Col>
            <Col>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Long search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
            </Col>
            <Col>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Long search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'right' }}>
              <Button type="primary" style={{ marginRight: '5px' }}>
                Search
              </Button>
              <Button>Clear All</Button>
            </Col>
          </Row>
        </Form>

        <Form style={style}>
          <Row gutter="4">
            <Col>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label={label}
                required
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
            </Col>
            <Col>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Long search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
            </Col>
            <Col>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
            </Col>
            <Col>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
            </Col>
            <Col>
              <FormItem
                {...formItemLayout}
                labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'right' }}>
              <Button type="primary" style={{ marginRight: '5px' }}>
                Search
              </Button>
              <Button>Clear All</Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div``