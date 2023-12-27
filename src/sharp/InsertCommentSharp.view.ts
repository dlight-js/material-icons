import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InsertCommentSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2v16h16l4 4V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"/>")
      .name("InsertCommentSharp")
  }
}

export default InsertCommentSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
