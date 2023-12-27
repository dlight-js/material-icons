import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ThumbUpAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.17 1 7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z\"/>")
      .name("ThumbUpAltSharp")
  }
}

export default ThumbUpAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
