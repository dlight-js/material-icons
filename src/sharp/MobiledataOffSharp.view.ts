import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MobiledataOffSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 7h3l-4-4-4 4h3v4.17l2 2zM2.81 2.81 1.39 4.22 8 10.83v6.18l-3 .01L9 21l4-4-3 .01v-4.18l9.78 9.78 1.41-1.42z\"/>")
      .name("MobiledataOffSharp")
  }
}

export default MobiledataOffSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
