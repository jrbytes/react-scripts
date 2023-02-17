const type = 'add'

const styles = (initPath) => {
  return {
    type,
    path: initPath+'{{pascalCase name}}/styles.ts',
    templateFile: 'templates/styles.ts.hbs'
  }
}

const test = (initPath) => {
  return {
    type,
    path: initPath+'{{pascalCase name}}/{{lowerCase name}}.spec.tsx',
    templateFile: 'templates/test.tsx.hbs'
  }
}

const componentFull = (initPath) => {
  return {
    type,
    path: initPath+'{{pascalCase name}}/index.tsx',
    templateFile: 'templates/ComponentFull.tsx.hbs'
  }
}

const component = (initPath) => {
  return {
    type,
    path: initPath+'{{pascalCase name}}/index.tsx',
    templateFile: 'templates/Component.tsx.hbs'
  }
}

module.exports = {
  styles,
  test,
  componentFull,
  component,
}