import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ModeCommentFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z\"/>")
      .name("ModeCommentFilled")
  }
}

export default ModeCommentFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
