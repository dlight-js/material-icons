import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DehazeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z\"/>")
      .name("DehazeSharp")
  }
}

export default DehazeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
