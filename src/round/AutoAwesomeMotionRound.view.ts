import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AutoAwesomeMotionRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 2H4c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1s1-.45 1-1V4h9c.55 0 1-.45 1-1s-.45-1-1-1zm4 4H8c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1s1-.45 1-1V8h9c.55 0 1-.45 1-1s-.45-1-1-1zm3 4h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z\"/>")
      .name("AutoAwesomeMotionRound")
  }
}

export default AutoAwesomeMotionRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
