# Variant Component Guidelines

If you are creating a component with variant or themed modes such as the
[Card](https://pages.github.ibm.com/cdai-design/pal/components/card/overview)
you'll want to follow these guidelines. Please note that this pattern may not be
applicable for every scenario, so please use your best judgment.

## Why this pattern

This pattern was adopted to address an issue with the user experience regarding
our documentation / storybook implementation and to improve the developer
experience. Previously your code might look something like this

```
import { Card }
...
return <Card mode="productive" {...props} />
```

But now it's simplified to

```
import { ProductiveCard }
...
return <ProductiveCard {...props} />
```

Now it's clear at import which version of the card you wish to use. Each variant
has their own set of props and props checking to ensure that expressive only
props don't end up being used improperly in a productive mode. The storybook
documentation will now be able to give each variant component their own set of
documentation and controls for a better documentation experience.

## Component creation

In this example let's assume you're working with expressive and productive
variants. You'll want to create three separate components. The "base" component
being the main component where all the component code and styles should be. The
"variant" components should act as simple wrappers for the base component. Their
main purpose is to benefit from a specific named export (`Card` vs
`ProductiveCard`) and to filter out undesired props.

A variant component would look something like this

```
import { BaseComponent } from '../BaseComponent'
import { prepareProps } from '../utils/props-helper';
...
const ProductiveComponent = (props) => {
  const validProps = prepareProps(props, ['expressiveOnlyProp1', 'expressiveOnlyProp2']);
  return <BaseComponent {...validProps} />
};
```

The important thing to remember is that variant components should only act as a
simple wrapper. Using the utility `prepareProps` ensures that unwanted props
don't end up being passed into the base component. This is just another measure
to ensure a bug free experience for the consumer. Consider this code
`(expressiveOnlyProp && ...)` the intention is clear, but it's still possible
for a consumer to set that prop even if they are using a productive version.
Whether intentional or not setting one of these props would go against component
design guidelines, which is undesirable. This is also helpful in storybook
documentation that may still offer a control for an unwanted prop. Again, this
is just a small measure to ensure a bug free experience.

You can also use `prepareProps` to add override values for some props, and to
provide default values to use if props are not supplied (if the relevant
defaults have not already been set via defaultProps).

Using card as a example, you should end up with a folder structure like this.

```
Card
  - _card.scss
  - _index.scss
  - _storybook_styles.scss
  - Card.js
  - Card.test.js
  - index.js
ExpressiveCard
  - _expressive-card.scss
  - _index.scss
  - _storybook_styles.scss
  - ExpressiveCard.js
  - ExpressiveCard.mdx
  - ExpressiveCard.stories.js
  - ExpressiveCard.test.js
  - index.js
ProductiveCard
  - _productive-card.scss
  - _index.scss
  - _storybook_styles.scss
  - ProductiveCard.js
  - ProductiveCard.mdx
  - ProductiveCard.stories.js
  - ProductiveCard.test.js
  - index.js
```

Note that `Card` doesn't have a stories or mdx file. This is because we don't
want to encourage developers to consume the base component. It's encouraged to
use the variant component instead.

## Styles

The variant components also have their own SCSS files. If a variant has styling
that's specific to that variant this is the place to put that code. In the
`Card` example expressive is assumed to be the default mode, so
`_expressive-card.scss` doesn't contain anything because the expressive /
default styles are in `_card.scss`. In this case both variant SCSS files just
import `_card.scss`. Here's how the productive SCSS file might look

```
// _productive-card.scss

@import '../Card/card'

.productive-card .card {
  // productive specific styles
}
```

## Storybook

There should only be two things to remember with storybook implementation.

1. The props documentation only needs to happen in the variant components since
   the base component shouldn't be added to storybook, so feel free to skip the
   props comments in base components.
2. Be sure to group the variant components by the base component so that they
   all exist under the same folder in the sidebar.
   `title: Cards/ExpressiveCard`.

## Conclusion

If you want to see this pattern in use feel free to refer to the
[Card](https://github.com/carbon-design-system/ibm-cloud-cognitive/tree/master/packages/cloud-cognitive/src/components/Card),
[ExpressiveCard](https://github.com/carbon-design-system/ibm-cloud-cognitive/tree/master/packages/cloud-cognitive/src/components/ExpressiveCard),
and
[ProductiveCard](https://github.com/carbon-design-system/ibm-cloud-cognitive/tree/master/packages/cloud-cognitive/src/components/ProductiveCard)
code.
