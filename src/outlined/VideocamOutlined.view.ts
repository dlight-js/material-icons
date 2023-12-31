import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideocamOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z\"/>")
      .name("VideocamOutlined")
  }
}

export default VideocamOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
