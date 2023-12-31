import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AddRoadOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2zM18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z\"/>")
      .name("AddRoadOutlined")
  }
}

export default AddRoadOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
