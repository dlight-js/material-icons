import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AlignHorizontalCenterSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z\"/>")
      .name("AlignHorizontalCenterSharp")
  }
}

export default AlignHorizontalCenterSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
