import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RoomServiceFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z\"/>")
      .name("RoomServiceFilled")
  }
}

export default RoomServiceFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
