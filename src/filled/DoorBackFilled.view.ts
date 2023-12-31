import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoorBackFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-8-6H9v-2h2v2z\"/>")
      .name("DoorBackFilled")
  }
}

export default DoorBackFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
