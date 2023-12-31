import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FortSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-5h4v5h9v-4l-2-2V9l2-2V3z\"/>")
      .name("FortSharp")
  }
}

export default FortSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
