import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChevronLeftRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z\"/>")
      .name("ChevronLeftRound")
  }
}

export default ChevronLeftRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
