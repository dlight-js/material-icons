import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ClearAllFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z\"/>")
      .name("ClearAllFilled")
  }
}

export default ClearAllFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
