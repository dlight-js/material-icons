import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RepartitionTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.67 17H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5z\" opacity=\".3\"/><path d=\"M3 21h18v-6H3v6zm12.67-4H19v2h-3.33v-2zm-5.34 0h3.33v2h-3.33v-2zM5 17h3.33v2H5v-2zm1-7 1.42-1.42L5.83 7H17c1.1 0 2 .9 2 2s-.9 2-2 2H3v2h14c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.83l1.59-1.59L6 2 2 6l4 4z\"/>")
      .name("RepartitionTwoTone")
  }
}

export default RepartitionTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
