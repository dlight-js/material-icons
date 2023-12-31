import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExposureNeg1Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z\"/>")
      .name("ExposureNeg1Sharp")
  }
}

export default ExposureNeg1Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
