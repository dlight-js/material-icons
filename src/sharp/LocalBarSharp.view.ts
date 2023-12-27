import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalBarSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7 5.66 5h12.69l-1.78 2H7.43z\"/>")
      .name("LocalBarSharp")
  }
}

export default LocalBarSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
