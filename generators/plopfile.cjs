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

module.exports = (plop) => {
  plop.setGenerator('Component', {
    description: 'Create a component',
    prompts,
    actions: function (data) {
      const actions = []
      const _path = '../src/components/'

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

  plop.setGenerator('Template', {
    description: 'Create a template',
    prompts,
    actions: function (data) {
      const actions = []
      const _path = '../src/templates/'

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

  plop.setGenerator('Pages', {
    description: 'Create a page',
    prompts,
    actions: function (data) {
      const actions = []
      const _path = '../src/pages/'

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
