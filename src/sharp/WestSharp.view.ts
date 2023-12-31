import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WestSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z\"/>")
      .name("WestSharp")
  }
}

export default WestSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
