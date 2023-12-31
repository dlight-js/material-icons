import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NavigateNextRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z\"/>")
      .name("NavigateNextRound")
  }
}

export default NavigateNextRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
