import { defineConfig } from 'eslint-define-config'
import vuePlugin from 'eslint-plugin-vue'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
  {
    languageOptions: {
      parser: vueParser, // 使用正确的解析器对象
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: false,
          printWidth: 80,
          trailingComma: 'none',
          endOfLine: 'auto'
        }
      ],
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index']
        }
      ],
      'vue/no-setup-props-destructure': 'off',
      'no-undef': 'error'
    }
  },
  {
    files: ['*.ts', '*.tsx', '*.vue'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    settings: {
      vue: {
        version: '3'
      }
    }
  }
])
