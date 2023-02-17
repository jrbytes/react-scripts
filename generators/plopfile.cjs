const {
  component,
  componentFull,
  styles,
  test,
} = require('./pathVariables.cjs')

const Component = {
  FULL: 'Complete component with typing and function?',
  SIMPLE: 'Simple component?'
}

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: "What's your component name?"
  },
  {
    type: 'list',
    name: 'type',
    message: 'What type of component is it?',
    choices: [Component.FULL, Component.SIMPLE]
  }
]

const setGenerator = (plop, name, _path) => {
  plop.setGenerator(name, {
    description: `Create a ${name}`,
    prompts,
    actions: function (data) {
      const actions = []

      const defaultActions = [
        styles(_path),
        test(_path),
      ]

      if (data.type === Component.FULL) {
        actions.push(
          ...defaultActions,
          componentFull(_path)
        )
      }

      if (data.type === Component.SIMPLE) {
        actions.push(
          ...defaultActions,
          component(_path)
        )
      }

      return actions
    }
  })
}

module.exports = (plop) => {
  setGenerator(plop, 'Component', '../src/components/')
  setGenerator(plop, 'Template', '../src/templates/')
  setGenerator(plop, 'Page', '../src/pages/')
}
