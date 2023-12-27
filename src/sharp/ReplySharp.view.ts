import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ReplySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"/>")
      .name("ReplySharp")
  }
}

export default ReplySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
