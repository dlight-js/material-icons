import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TagOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z\"/>")
      .name("TagOutlined")
  }
}

export default TagOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
