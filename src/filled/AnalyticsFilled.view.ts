import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AnalyticsFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z\"/>")
      .name("AnalyticsFilled")
  }
}

export default AnalyticsFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
