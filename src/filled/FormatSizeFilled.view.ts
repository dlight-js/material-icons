import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatSizeFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z\"/>")
      .name("FormatSizeFilled")
  }
}

export default FormatSizeFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
