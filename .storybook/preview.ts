import type { Preview } from '@storybook/react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas)

import '../src/components/Menu/style.scss'
import '../src/components/Button/style.scss'
import '../src/components/Input/style.scss'
import '../src/components/AutoComplete/style.scss'
import '../src/components/Form/style.scss'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;