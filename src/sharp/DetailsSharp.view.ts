import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DetailsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3 2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z\"/>")
      .name("DetailsSharp")
  }
}

export default DetailsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
