import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NorthWestRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 15c.56 0 1-.45 1-1V8.41L17.89 19.3a.996.996 0 1 0 1.41-1.41L8.41 7H14c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1z\"/>")
      .name("NorthWestRound")
  }
}

export default NorthWestRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
