import * as React from 'react'
import { FormContextProps, FormConsumer } from './types'

// const FormItemInner = React.memo(({  }) => {})

interface FormItemProps {
  name: string;
  render?: () => React.ReactNode;
}

export default class FormItem extends React.PureComponent<FormItemProps> {
  state = { isValid: true, wasCheckedValidity: false }

  isValid = () => {
    
  }

  render () {
    return (
      <FormConsumer>
        {
          ({ render }) => {
            return render({ })
          }
        }
      </FormConsumer>
    )
  }
}