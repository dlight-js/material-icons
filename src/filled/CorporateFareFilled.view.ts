import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CorporateFareFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z\"/>")
      .name("CorporateFareFilled")
  }
}

export default CorporateFareFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
