import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MinimizeRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z\"/>")
      .name("MinimizeRound")
  }
}

export default MinimizeRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
