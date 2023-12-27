import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TitleFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 4v3h5.5v12h3V7H19V4z\"/>")
      .name("TitleFilled")
  }
}

export default TitleFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
