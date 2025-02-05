import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'sort-imports': [
        'error', {
          "allowSeparatedGroups": true,
        }
      ],
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: [
            'destructive',
          ],
        },
      ],
    },
    ignores: [
      'package.json',
      'package-lock.json',
    ],

  },
  ...tailwindcss.configs['flat/recommended'],
)
