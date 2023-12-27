import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BookmarkRemoveOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-6V5h6v2z\"/>")
      .name("BookmarkRemoveOutlined")
  }
}

export default BookmarkRemoveOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
