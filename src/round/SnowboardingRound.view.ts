import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SnowboardingRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM6.35 9.53c.47.29 1.09.15 1.38-.32L9.1 7h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52L9.5 16 6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67a.744.744 0 0 0-.51-.42c-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.08-.38-.16-.8-.59-.89a.748.748 0 0 0-.64.17c-.69.6-1.64.88-2.6.67L17 20.69l-.88-5.43c-.08-.49-.34-.93-.72-1.24l-2.72-2.19 1.8-2.89a6.507 6.507 0 0 0 4.39 2.96c.6.11 1.13-.39 1.13-1 0-.48-.35-.89-.83-.98a4.503 4.503 0 0 1-3.3-2.64l-.52-1.21C15.16 5.64 14.61 5 13.7 5H9.11c-.69 0-1.33.36-1.7.94L6.03 8.15c-.29.47-.15 1.09.32 1.38zm2.38 9.4 2.25-1.51c.47-.32.73-.88.65-1.44l-.32-2.4 2.84 2.02.75 4.64-6.17-1.31z\"/>")
      .name("SnowboardingRound")
  }
}

export default SnowboardingRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>