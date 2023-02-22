const inquirer = require('inquirer')
const {
  component,
  componentFull,
  styles,
  test,
} = require('./pathVariables.cjs')

const COMPONENT = {
  FULL: 'FULL',
  SIMPLE: 'SIMPLE'
}

const folderNamePrompt = inquirer.prompt([
  {
    type: 'text',
    name: 'folder',
    message: "What's the folder name?"
  }
])

const setGenerator = (plop, folder) => {
  const _path = `../src/${folder.toLowerCase()}/`

  plop.setGenerator(folder, {
    description: `Create a ${folder}`,
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's your component name?"
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of component is it?',
        choices: [COMPONENT.FULL, COMPONENT.SIMPLE]
      }
    ],
    actions: ({ type }) => {
      const actions = []

      const defaultActions = [
        styles(_path),
        test(_path),
      ]

      if (type === COMPONENT.FULL) {
        actions.push(
          ...defaultActions,
          componentFull(_path)
        )
      }

      if (type === COMPONENT.SIMPLE) {
        actions.push(
          ...defaultActions,
          component(_path)
        )
      }

      return actions
    }
  })
}

module.exports = async (plop) => {
  const { folder } = await folderNamePrompt
  setGenerator(plop, folder)
}
