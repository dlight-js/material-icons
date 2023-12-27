import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PauseFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/>")
      .name("PauseFilled")
  }
}

export default PauseFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
