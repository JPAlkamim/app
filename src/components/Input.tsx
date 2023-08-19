import { Input as NBInput, IInputProps } from 'native-base'
import { background } from 'native-base/lib/typescript/theme/styled-system'


export function Input({ ...rest }: IInputProps) {
  return (
    <NBInput
      bg='gray.200'
      fontSize='md'
      h={16}
      _focus={
        {
          bg: 'gray.300',
          borderWidth: 3,
          borderColor: 'blue.300'
        }
      }
      {...rest}
    />
  )
}