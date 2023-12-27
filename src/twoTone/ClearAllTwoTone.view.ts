import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ClearAllTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z\"/>")
      .name("ClearAllTwoTone")
  }
}

export default ClearAllTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
