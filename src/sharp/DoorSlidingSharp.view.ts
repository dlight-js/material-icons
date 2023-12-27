import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoorSlidingSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2h-1zm-10-6H8v-2h2v2zm6 0h-2v-2h2v2z\"/>")
      .name("DoorSlidingSharp")
  }
}

export default DoorSlidingSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
