# IDECard Component

## Purpose

To provide a single card component which can be used separately from IdeHome which provides a more complex logic for the landing page of a product. 

### Carbon elements used

- type tokens for fonts
- grid - designed for 16 (default is 12, despite what the documentation says) columns. To enable this, add the below to your root scss file:

```
$feature-flags: (
  grid-columns-16: true
);
```

- theme - designed using `carbon--theme--white`. Variables are set up to work with any other carbon/custom theme, as long as the carbon color variables are used

### Component details

The cards can be rendered in 2 ways:

- providing the mandatory props which will style the card according to the component styling sheet
- providing `cardType: custom` and `cardContent: () => {<custom render function>}`  


## Change history

| Date       | Change                                                         | Contributed by / Product                              |
| ---------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| 13/07/2020 | BREAKING CHANGE: Rename classname prop to className      | Vlad B (vlad.balanescu@uk.ibm.com) CP4I             |
| 01/06/2020 | BREAKING CHANGE: Rename iconType prop to secondaryGraphic      | Simon Ho (simonho@ca.ibm.com) API Connect             |
| 29/05/2020 | BREAKING CHANGE: Rename showExternalLinkIcon prop to iconType  | Simon Ho (simonho@ca.ibm.com) API Connect             |
| 22/05/2020 | Add showExternalLinkIcon prop                                  | Simon Ho (simonho@ca.ibm.com) API Connect             |
| 15/01/2020 | Initial creation of the component                              | Vlad Balanescu (vlad.balanescu@uk.ibm.com) ICP4I      |
