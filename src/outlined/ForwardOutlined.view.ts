import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ForwardOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 8.83 17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z\"/>")
      .name("ForwardOutlined")
  }
}

export default ForwardOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
