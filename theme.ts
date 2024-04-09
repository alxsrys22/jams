import {
  Button,
  TextInput,
  createTheme,
  defaultVariantColorsResolver,
  rem,
} from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  components: {
    TextInput: TextInput.extend({
      styles: {
        label: {
          fontSize: 12,
          fontWeight: 400,
        },
        root: {
          marginTop: rem(4),
          marginBottom: rem(4),
        },
        input: {
          borderRadius: 0,
        },
      },
    }),
    Button: Button.extend({
      styles: {
        root: {
          borderRadius: 0,
        },
      },
    }),
  },
  variantColorResolver: input => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    if (input.variant === 'outline') {
      return {
        ...defaultResolvedColors,
        color: 'gray',
        border: '1px solid #ced4da',
      };
    }
    return defaultResolvedColors;
  },
});
