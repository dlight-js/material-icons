import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DockSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 23h8v-2H8v2zM18 1.01 6 1v18h12V1.01zM16 15H8V5h8v10z\"/>")
      .name("DockSharp")
  }
}

export default DockSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
