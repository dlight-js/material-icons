import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PanToolSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 4v20H10.02L1 14.83 2.9 13 8 15.91V3h3v8h1V0h3v11h1V1h3v10h1V4h3z\"/>")
      .name("PanToolSharp")
  }
}

export default PanToolSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
