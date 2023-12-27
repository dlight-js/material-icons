import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PauseTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 5h4v14H6zm8 0h4v14h-4z\"/>")
      .name("PauseTwoTone")
  }
}

export default PauseTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
