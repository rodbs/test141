import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  XStack,
  YStack,
  Sheet,
  Popover,
  PopoverProps,
  Label,
  Input,
  SizeTokens,
  Switch,
} from '@my/ui'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from '@tamagui/feather-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>
        <Separator />
        <Paragraph ta="center">
          Tamagui is made by{' '}
          <Anchor href="https://twitter.com/natebirdman" target="_blank">
            Nate Wienert
          </Anchor>
          , give it a star{' '}
          <Anchor href="https://github.com/tamagui/tamagui" target="_blank" rel="noreferrer">
            on Github
          </Anchor>
          .
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <SheetDemo />
      <XStack space="$2">
        <Demo placement="left" Icon={ChevronLeft} />
        <Demo placement="bottom" Icon={ChevronDown} />
        <Demo placement="top" Icon={ChevronUp} />
        <Demo placement="right" Icon={ChevronRight} />
      </XStack>
      <YStack w={300} ai="center" space="$3">
        <SwitchWithLabel size="$2" />
        <SwitchWithLabel size="$3" />
        <SwitchWithLabel size="$4" />
        <SwitchWithLabel size="$5" />
      </YStack>
      <XStack>
        <Button icon={ChevronDown} size="$6" p="$-0" />
      </XStack>
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onChangeOpen={setOpen}
        snapPoints={[80]}
        position={position}
        onChangePosition={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

export function Demo({ Icon, ...props }: PopoverProps & { Icon?: any }) {
  return (
    <Popover sheetBreakpoint="sm" size="$5" {...props}>
      <Popover.Trigger asChild>
        <Button icon={Icon} />
      </Popover.Trigger>

      <Popover.Sheet modal dismissOnSnapToBottom>
        <Popover.Sheet.Frame padding="$4">
          <Popover.SheetContents />
        </Popover.Sheet.Frame>
        <Popover.Sheet.Overlay />
      </Popover.Sheet>

      <Popover.Content
        bw={1}
        boc="$borderColor"
        enterStyle={{ x: 0, y: -10, o: 0 }}
        exitStyle={{ x: 0, y: -10, o: 0 }}
        x={0}
        y={0}
        o={1}
        animation="bouncy"
        elevate
      >
        <Popover.Arrow bw={1} boc="$borderColor" />

        <XStack space="$3">
          <Label size="$3" htmlFor="name">
            Name
          </Label>
          <Input size="$3" id="name" />
        </XStack>
      </Popover.Content>
    </Popover>
  )
}

function SwitchWithLabel(props: { size }) {
  const id = `switch-${props.size.toString().slice(1)}`
  return (
    <XStack w={300} ai="center" space="$4">
      <Label pr="$0" miw={200} jc="flex-end" size={props.size} htmlFor={id}>
        Dark mode
      </Label>
      <Separator mih={20} vertical />
      <Switch id={id} size={props.size}>
        <Switch.Thumb animation="quick" />
      </Switch>
    </XStack>
  )
}
