import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeDownSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07a10.457 10.457 0 0 0-1.88 8.99l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06 1.74 1.74zm17.91-1 2.09 7.39-8.23 3.65-6.84-2.85.61-1.62 3.8-.75-4.35-9.83c-.34-.76 0-1.64.76-1.98.76-.34 1.64 0 1.98.76l2.43 5.49 1.26-.56 6.49.3z\"/>")
      .name("SwipeDownSharp")
  }
}

export default SwipeDownSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
