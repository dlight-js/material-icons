import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PanoramaFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z\"/>")
      .name("PanoramaFilled")
  }
}

export default PanoramaFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
