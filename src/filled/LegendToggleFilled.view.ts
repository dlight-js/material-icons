import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LegendToggleFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 15H4v-2h16v2zm0 2H4v2h16v-2zm-5-6 5-3.55V5l-5 3.55L10 5 4 8.66V11l5.92-3.61L15 11z\"/>")
      .name("LegendToggleFilled")
  }
}

export default LegendToggleFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
