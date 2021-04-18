import { createContext } from 'react'

export interface FormContextProps {
  initialValue: any;
  value: any;
  render: ({ ref, type, name }) => React.ReactNode;
  getPath: (name: string | number) => (string | number)[];
  update: (key: string, value: any) => void;
  reset: (key: string) => void;
  register: () => void;
  unregister: () => void;
  submit: () => void,
}
const { Consumer: FormConsumer, Provider: FormProvider } = createContext<FormContextProps>({
  initialValue: {},
  value: {},
  render: () => null,
  getPath: () => [],
  update: () => {},
  reset: () => {},
  register: () => {},
  unregister: () => {},
  submit: () => {},
})

export { FormConsumer, FormProvider }