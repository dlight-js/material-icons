import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DehazeFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z\"/>")
      .name("DehazeFilled")
  }
}

export default DehazeFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
