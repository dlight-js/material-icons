import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AspectRatioFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"/>")
      .name("AspectRatioFilled")
  }
}

export default AspectRatioFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
