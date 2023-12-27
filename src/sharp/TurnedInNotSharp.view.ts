import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnedInNotSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 3H5.01L5 21l7-3 7 3V3zm-2 15-5-2.18L7 18V5h10v13z\"/>")
      .name("TurnedInNotSharp")
  }
}

export default TurnedInNotSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
