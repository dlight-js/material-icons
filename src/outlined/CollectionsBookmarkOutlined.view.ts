import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CollectionsBookmarkOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 2v5l-1-.75L15 9V4h2zm3 12H8V4h5v9l3-2.25L19 13V4h1v12z\"/>")
      .name("CollectionsBookmarkOutlined")
  }
}

export default CollectionsBookmarkOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
