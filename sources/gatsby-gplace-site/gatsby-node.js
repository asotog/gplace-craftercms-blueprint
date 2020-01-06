exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query GalleryQuery {
      CrafterCMS {
        component_guitarmodel {
          items {
            objectId
            body_html
            body_html_raw
            file__name
            internal__name
            localId
            mainImage_s
            manufacturer_s
            modelName_s
          }
          total
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading guitar models!", reporter.errors)
  }

  result.data.CrafterCMS.component_guitarmodel.items.forEach((model) => {
    actions.createPage({
      path: `/model/${model.objectId}`,
      component: require.resolve("./src/templates/guitar-model.js"),
      context: {
        model,
      },
    })
  })
}
