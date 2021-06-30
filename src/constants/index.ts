import { CSSProperties } from 'react'

export const isDevelopmentEnvironment = process.env.NODE_ENV === 'development'

export const INPUT_ALIGN_STYLES = {
  center: {
    justifyContent: 'center',
    textAlign: 'center',
  } as CSSProperties,
  left: {} as CSSProperties,
  right: {
    justifyContent: 'flex-end',
    textAlign: 'right',
  } as CSSProperties,
}

export const MATERIAL_ICONS = {
  arrowBack: 'arrow_back',
  close: 'close',
}

export const CSS_DEFAULT_VALUES = {
  maxHeight: 'none',
  overflow: 'visible',
}

export const CSS_VALUES = {
  hidden: 'hidden',
  fullViewPort: '100vh',
}

export const WINDOW_EVENTS = {
  resize: 'resize',
}
