import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeRightAltRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13.9 11a5 5 0 1 0 0 2h4.27l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L18.7 8.7a.996.996 0 1 0-1.41 1.41l.88.89H13.9z\"/>")
      .name("SwipeRightAltRound")
  }
}

export default SwipeRightAltRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
