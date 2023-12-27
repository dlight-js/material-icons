import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FiberSmartRecordSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"9\" cy=\"12\" r=\"8\"/><path d=\"M17 4.26v2.09a5.99 5.99 0 0 1 0 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z\"/>")
      .name("FiberSmartRecordSharp")
  }
}

export default FiberSmartRecordSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
