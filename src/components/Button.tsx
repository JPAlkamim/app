import { Button as NBButton, IButtonProps, Text } from "native-base"

type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <NBButton
      bg='gray.200'
      width={'100%'}
      height={16}
      borderRadius={8}
      _pressed={{
        bg: 'gray.300',
      }}
      {...rest}
    >
      <Text fontSize={'md'}>
        {title}
      </Text>
    </NBButton>
  )
}