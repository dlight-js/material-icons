import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PublishSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z\"/>")
      .name("PublishSharp")
  }
}

export default PublishSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
