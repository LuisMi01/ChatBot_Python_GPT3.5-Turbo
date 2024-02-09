/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, Heading, HStack, Input, Link, VStack } from "@chakra-ui/react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, isTrue, set_val } from "/utils/state"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export function Link_956ec6cae0e204e02ae3bae6742beafb () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Link as={NextLink} href={`https://github.com/LuisMi01/ChatBot_Python_GPT3.5-Turbo`} sx={{"border": "0.1em solid", "padding": "0.5em", "borderRadius": "0.5em", "_hover": {"color": isTrue((colorMode === "light")) ? `rgb(107,99,246)` : `rgb(179, 175, 255)`}}}>
  {`Repositorio del proyecto`}
</Link>
  )
}

export function Button_5cbb2952409d1e5ed6e42602daa56ec7 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, colorMode, toggleColorMode])

  return (
    <Button onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8} sx={{"float": "right"}}>
  <Fragment_c4944d8b5ece4892844e987a2ddfe4ae/>
</Button>
  )
}

export function Fragment_c4944d8b5ece4892844e987a2ddfe4ae () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Fragment>
  <Button_5cbb2952409d1e5ed6e42602daa56ec7/>
  <VStack spacing={`1.5em`} sx={{"fontSize": "2em", "paddingTop": "10%"}}>
  <Heading sx={{"fontSize": "2em"}}>
  {`Bienvenido al chat bot de gpt 3.5 turbo`}
</Heading>
  <Link_956ec6cae0e204e02ae3bae6742beafb/>
</VStack>
  <HStack>
  <Input placeholder={`Ask a question`} type={`text`}/>
  <Button>
  {`Ask`}
</Button>
</HStack>
</Fragment>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
