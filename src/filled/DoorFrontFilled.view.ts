import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoorFrontFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-4-6h-2v-2h2v2z\"/>")
      .name("DoorFrontFilled")
  }
}

export default DoorFrontFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
