import React from 'react'
import { IconType } from 'react-icons'
import { LoadingContainer } from './style'

export interface LoadingPropsI {
  icon?: IconType
  iconSize?: "sm" | "md" | "lg" | "xl"
  message?: string
}

const Loading = ({ message, icon: Icon, iconSize = "sm" }: LoadingPropsI) => {
  return (
    <LoadingContainer iconSize={iconSize}>
      <span>
        {Icon && <Icon />}
      </span>
      <h1>{message ? message : `Loading ...`}</h1>
    </LoadingContainer>
  )
}

export default Loading