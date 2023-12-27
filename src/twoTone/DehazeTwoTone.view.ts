import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DehazeTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z\"/>")
      .name("DehazeTwoTone")
  }
}

export default DehazeTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
