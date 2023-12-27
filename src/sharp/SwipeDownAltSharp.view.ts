import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeDownAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17V13.9z\"/>")
      .name("SwipeDownAltSharp")
  }
}

export default SwipeDownAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
