import { Button as NBButton, IButtonProps, Text } from "native-base"
import * as Animatable from 'react-native-animatable'

type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <NBButton
      bg='primary.700'
      width={'100%'}
      height={16}
      borderRadius={8}
      _pressed={{
        bg: 'primary.900',
      }}
      {...rest}
    >
      <Text fontSize={'md'}
        color='white'
      >
        {title}
      </Text>
    </NBButton>
  )
}

export default Animatable.createAnimatableComponent(Button)