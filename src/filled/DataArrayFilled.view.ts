import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DataArrayFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z\"/>")
      .name("DataArrayFilled")
  }
}

export default DataArrayFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
