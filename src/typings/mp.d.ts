declare namespace JSX {
  type base = {
    class?: string | string[]
    style?: string
    key?: string | number
    bindtap?(): void
    catchtap?(): void
    catchtouchmove?(): void
    hidden?: boolean
    slot?: string
    id?: string
  }

  interface IntrinsicElements {
    [key: string]: base
    input: {
      value?: string
      type?: 'text' | 'number' | 'idcard' | 'digit' | 'safe-password'
      placeholder?: string
      disabled?: boolean
      bindinput?(detail: { cursor: number, keyCode: number, value: string }): void
    } & base

    switch: {
      checked?: boolean
      disabled?: boolean
      bindchange?(detail: { value: boolean }): void
    } & base

    progress: {
      percent?: number
      'show-info'?: boolean
      'border-radius'?: number | string
      'font-size'?: number | string
      'stroke-width'?: number | string
      activeColor?: string
      backgroundColor?: string
      active?: boolean
      'active-mode'?: 'backwards' | 'forwards'
      duration?: number
      bindactiveend?(event: any): void
    } & base

    camera: {
      mode?: 'normal' | 'scanCode'
      resolution?: 'low' | 'medium' | 'high'
      'device-position'?: 'front' | 'back'
      flash?: 'auto' | 'on' | 'off' | 'torch'
      'frame-size'?: 'small' | 'medium' | 'large'
      bindstop?(e: any): void
      binderror?(e: any): void
      bindinitdone?(e: any): void
      bindscancode?(e: any): void
    } & base

    canvas: {
      type?: string
      'canvas-id'?: string
      'disable-scroll'?: boolean
      bindtouchstart?: (detail: any) => void
      bindtouchmove?: (detail: any) => void
      bindtouchend?: (detail: any) => void
      bindtouchcancel?: (detail: any) => void
      bindlongtap?: (detail: any) => void
      binderror?: (detail: any) => void
    } & base

    textarea: {
      value?: string
      maxlength?: number
      type?: 'text' | 'number'
      placeholder?: string
      'placeholder-style'?: string
      disabled?: boolean
      'auto-focus'?: boolean
      'auto-height'?: boolean
      bindinput?(detail: { cursor: number, keyCode: number, value: string }): void
      bindblur?(detail: { cursor: number, value: string }): void
      bindfocus?(detail: { value: string, height: number }): void
      bindkeyboardheightchange?(detail: { height: number, duration: number }): void
    } & base

    'scroll-view': {
      'scroll-y'?: boolean
      bindscrolltolower?(): void
    } & base

    slot: {
      name?: string
    } & base

    image: {
      src?: string
      mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
      webp?: boolean
      'lazy-load'?: boolean
      'show-menu-by-longpress'?: boolean
      binderror?: (detail: { errMsg: string }) => void
      bindload?: (detail: { height: number, width: number }) => void
    } & base

    'cover-image': {
      src?: string
      mode?: 'widthFix'
    } & base

    video: {
      src?: string
      bindplay?(): void
      bindpause?(): void
      bindended?(): void
    } & base

    'live-player': {
      src?: string
      mode?: string
      autoplay?: boolean
      muted?: boolean
      orientation?: string
      'object-fit'?: string
      bindstatechange?(detail: { code: string }): void
    } & base

    radio: {
      color?: string
      value?: string
      checked?: boolean
      disabled?: boolean
    } & base

    'radio-group': {
      bindchange?(detail: { value: string }): void
    } & base

    picker: {
      mode?: 'date' | 'multiSelector' | 'time' | 'region' | 'selector'
      range?: any[]
      'range-key'?: string
      fields?: 'year' | 'month' | 'day'
      value?: any
      disabled?: boolean
      bindchange?(detail: { value: any }): void
      bindcolumnchange?(detail: { column: any, value: any }): void
    } & base

    map: {
      scale?: string
      'enable-3D'?: boolean
      'show-location'?: boolean
      markers?: {
        id?: number
        latitude: number
        longitude: number
        title?: string
        zIndex?: number
        iconPath: string
        rotate?: number
        alpha?: number
        width?: number | string
        height?: number | string
        anchor?: { x: number, y: number }
        callout?: {
          content?: string
          color?: string
          fontSize?: string
          borderRadius?: number
          borderWidth?: number
          borderColor?: string
          bgColor?: string
          padding?: number
          display?: 'BYCLICK' | 'ALWAYS'
          textAlign?: 'left' | 'right' | 'center'
        }
      }[]
      latitude?: number
      longitude?: number
      bindcallouttap(detail: { markerId: number }): void
    } & base

    'web-view': {
      src?: string
    } & base

    'weather': {
      size?: 'xs' | 'sm'
      theme?: 'dark' | 'light'
    } & base
  }
}

declare module "*.gif" {
  const path: string
  export default path
}

declare module "*.png" {
  const path: string
  export default path
}