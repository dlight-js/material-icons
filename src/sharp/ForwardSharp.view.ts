import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ForwardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 8V4l8 8-8 8v-4H4V8h8z\"/>")
      .name("ForwardSharp")
  }
}

export default ForwardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
