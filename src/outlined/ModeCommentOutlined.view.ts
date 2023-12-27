import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ModeCommentOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 17.17 18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z\"/>")
      .name("ModeCommentOutlined")
  }
}

export default ModeCommentOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
