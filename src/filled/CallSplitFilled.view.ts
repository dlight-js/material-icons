import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CallSplitFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z\"/>")
      .name("CallSplitFilled")
  }
}

export default CallSplitFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
