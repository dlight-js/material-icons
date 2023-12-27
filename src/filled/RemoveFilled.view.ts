import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RemoveFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 13H5v-2h14v2z\"/>")
      .name("RemoveFilled")
  }
}

export default RemoveFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
