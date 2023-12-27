import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExpandLessRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.29 8.71 6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0z\"/>")
      .name("ExpandLessRound")
  }
}

export default ExpandLessRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
