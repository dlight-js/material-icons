import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RemoveTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 13H5v-2h14v2z\"/>")
      .name("RemoveTwoTone")
  }
}

export default RemoveTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
