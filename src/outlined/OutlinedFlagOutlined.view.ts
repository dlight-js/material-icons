import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OutlinedFlagOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14 6-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z\"/>")
      .name("OutlinedFlagOutlined")
  }
}

export default OutlinedFlagOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
