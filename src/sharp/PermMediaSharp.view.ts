import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PermMediaSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 6H0v16h20v-2H2V6zm22-2H14l-2-2H4v16h20V4zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z\"/>")
      .name("PermMediaSharp")
  }
}

export default PermMediaSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
