import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BookmarkRemoveRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 6c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1zm-2 4.9A5.002 5.002 0 0 1 14 3H7c-1.1 0-2 .9-2 2v14.48c0 .72.73 1.2 1.39.92L12 18l5.61 2.4c.66.28 1.39-.2 1.39-.92V10.9z\"/>")
      .name("BookmarkRemoveRound")
  }
}

export default BookmarkRemoveRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
