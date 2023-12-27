import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SimCardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.99 2H10L4 8v14h16l-.01-20zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z\"/>")
      .name("SimCardSharp")
  }
}

export default SimCardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
