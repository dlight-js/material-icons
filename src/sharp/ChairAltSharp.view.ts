import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChairAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 10h3V3H5v7h3v2H5v9h2v-3h10v3h2v-9h-3v-2zM7 8V5h10v3H7zm10 8H7v-2h10v2zm-3-4h-4v-2h4v2z\"/>")
      .name("ChairAltSharp")
  }
}

export default ChairAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
