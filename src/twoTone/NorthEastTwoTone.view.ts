import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NorthEastTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z\"/>")
      .name("NorthEastTwoTone")
  }
}

export default NorthEastTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
