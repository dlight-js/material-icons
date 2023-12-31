import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MarkUnreadChatAltOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 16H4V4h10.1a5 5 0 0 1 0-2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V6.98c-.58.44-1.26.77-2 .92V16z\"/><circle cx=\"19\" cy=\"3\" r=\"3\"/><path d=\"M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1A5.013 5.013 0 0 1 15.03 6H6v2z\"/>")
      .name("MarkUnreadChatAltOutlined")
  }
}

export default MarkUnreadChatAltOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
