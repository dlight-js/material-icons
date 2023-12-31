import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShortTextRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 9h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h8c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z\"/>")
      .name("ShortTextRound")
  }
}

export default ShortTextRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
