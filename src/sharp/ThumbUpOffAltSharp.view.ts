import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ThumbUpOffAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.17 1 7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38L14.17 1zM1 9h4v12H1V9z\"/>")
      .name("ThumbUpOffAltSharp")
  }
}

export default ThumbUpOffAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
