import * as React from 'react'
import { FormProvider } from './FormContext'
import FormItem from './FormItem'

interface FormProps {
  initialValue: object;
  onSubmit: () => void;
  render: () => React.ReactNode;
}

interface FormState {
  initialValue: object;
  currentValue: object;
  isValid: boolean;
}

export default class Form extends React.PureComponent<React.PropsWithChildren<FormProps>, FormState> {
  state = {
    initialValue: null,
    currentValue: null,
    isValid: true,
  }

  items = new Set()

  submit = () => {
    const { onSubmit } = this.props

  }

  register = (item) => {
    this.items.add(item)
  }

  unregister = (item) => {
    this.items.delete(item)
  }

  render () {
    const { initialValue} = this.state
    return (
      <FormProvider value={{
        initialValue,
        update: () => {},
        submit: this.submit,
      }}></FormProvider>
    )
  }
}