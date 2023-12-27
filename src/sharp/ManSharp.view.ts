import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ManSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 7H8v8h2v7h4v-7h2z\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/>")
      .name("ManSharp")
  }
}

export default ManSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
