import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BookmarksSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m19 18 2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z\"/>")
      .name("BookmarksSharp")
  }
}

export default BookmarksSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
