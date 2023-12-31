import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CloseFullscreenOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z\"/>")
      .name("CloseFullscreenOutlined")
  }
}

export default CloseFullscreenOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
