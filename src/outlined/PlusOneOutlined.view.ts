import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlusOneOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 8H8v4H4v2h4v4h2v-4h4v-2h-4V8zm4.5-1.92V7.9l2.5-.5V18h2V5l-4.5 1.08z\"/>")
      .name("PlusOneOutlined")
  }
}

export default PlusOneOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
