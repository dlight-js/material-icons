import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BookmarkBorderSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 3H5v18l7-3 7 3V3zm-2 15-5-2.18L7 18V5h10v13z\"/>")
      .name("BookmarkBorderSharp")
  }
}

export default BookmarkBorderSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
