import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AddCardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2.01 4 2 20h12v-2H4v-6h18V4H2.01zM20 8H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z\"/>")
      .name("AddCardSharp")
  }
}

export default AddCardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
