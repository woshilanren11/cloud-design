### Rating

| 参数            | 说明                                                                                                    | 类型       | 默认值        |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------- | ---------- |
| defaultValue  | 默认值                                                                                                   | Number   | 0          |
| size          | 尺寸<br/><br/>**可选值**:<br/>'small', 'medium', 'large'                                                      | Enum     | 'medium'   |
| value         | 值                                                                                                     | Number   | -          |
| count         | 评分的总数                                                                                                 | Number   | 5          |
| showGrade     | 是否显示 grade                                                                                            | Boolean  | false      |
| allowHalf     | 是否允许半星评分                                                                                              | Boolean  | false      |
| onChange      | 用户点击评分时触发的回调<br/><br/>**签名**:<br/>Function(value: Number) => void<br/>**参数**:<br/>*value*: {Number} 评分值    | Function | func.noop  |
| onHoverChange | 用户hover评分时触发的回调<br/><br/>**签名**:<br/>Function(value: Number) => void<br/>**参数**:<br/>*value*: {Number} 评分值 | Function | func.noop  |
| disabled      | 是否禁用                                                                                                  | Boolean  | false      |
| readAs        | 评分文案生成方法，传入id支持无障碍时，读屏软件可读<br/><br/>**签名**:<br/>Function() => void                                       | Function | val => val |
| isPreview     | 是否为预览态                                                                                                | Boolean  | false      |
| renderPreview | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>Function(value: number) => void<br/>**参数**:<br/>*value*: {number} 评分值     | Function | -          |
| readOnly      | 是否为只读态，效果上同 disabeld                                                                                  | Boolean  | false      |
