const path = require('path')
const globby = require('globby')
import * as Chain from 'webpack-chain'

module.exports = {
  presets: [
    [
      require.resolve('@alicloud/console-toolkit-preset-multi-entry'),
      {
        consoleOSId: 'alicloud-component-demos',
        getDemos() {
          const baseDir = path.resolve(__dirname, '../base-components/src/')
          const paths = globby.sync('**/demo/*.tsx', { cwd: baseDir })
          const res = paths.map(relativePath => {
            const match = relativePath.match(/^(.*)\/demo\/(.*)\.tsx$/)
            if (!match) throw new Error(`非预期的demo路径"${relativePath}"`)
            const componentName = match[1]
            const demoName = match[2]
            return {
              key: `${componentName}/${demoName}`,
              path: path.resolve(baseDir, relativePath)
            }
          })
          return res
        },
        getMarkdownEntries: () => {
          const baseDir = path.resolve(__dirname, './dev-docs/contents')
          const paths = globby.sync('*', { cwd: baseDir })

          const docs = paths.map((relativePath: string) => {
            const match = relativePath.match(/(.*)\.md/)
            if (!match) throw new Error(`unexpected path ${relativePath}`)
            return {
              key: 'docs/' + match[1],
              path: path.resolve(baseDir, relativePath)
            }
          })
          return docs
        },
        // chainWebpack(chain: Chain) {
        //   chain.resolve.alias.set(
        //     '@alicloudfe/components',
        //     path.resolve(__dirname, '../base-components/src/')
        //   )
        // },
        demoWrapperPath: path.resolve(__dirname, 'demoWrapper.tsx'),
        initializerPath: path.resolve(__dirname, 'initCss.ts'),
        codesandboxModifierPath: path.resolve(
          __dirname,
          "modifyCodesandbox.ts"
        ),
      }
    ]
  ]
}
