import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MenuOpenSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z\"/>")
      .name("MenuOpenSharp")
  }
}

export default MenuOpenSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
