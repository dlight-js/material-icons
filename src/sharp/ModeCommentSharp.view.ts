import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ModeCommentSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2v16h16l4 4z\"/>")
      .name("ModeCommentSharp")
  }
}

export default ModeCommentSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
