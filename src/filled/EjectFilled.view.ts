import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EjectFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 17h14v2H5zm7-12L5.33 15h13.34z\"/>")
      .name("EjectFilled")
  }
}

export default EjectFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
