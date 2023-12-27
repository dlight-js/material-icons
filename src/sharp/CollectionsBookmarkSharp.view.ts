import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CollectionsBookmarkSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-2 10-2.5-1.5L15 12V4h5v8z\"/>")
      .name("CollectionsBookmarkSharp")
  }
}

export default CollectionsBookmarkSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
