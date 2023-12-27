import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SaveAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z\"/>")
      .name("SaveAltSharp")
  }
}

export default SaveAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
