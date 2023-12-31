import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BookmarkRemoveSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 7h-6V5h6v2zm-2 3.9c-.64.13-1.32.14-2.02 0-1.91-.38-3.47-1.92-3.87-3.83A5.02 5.02 0 0 1 14 3H5v18l7-3 7 3V10.9z\"/>")
      .name("BookmarkRemoveSharp")
  }
}

export default BookmarkRemoveSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
