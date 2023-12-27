import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ModeCommentRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4z\"/>")
      .name("ModeCommentRound")
  }
}

export default ModeCommentRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
