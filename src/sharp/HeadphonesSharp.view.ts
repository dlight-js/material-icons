import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HeadphonesSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3a9 9 0 0 0-9 9v9h6v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h6v-9a9 9 0 0 0-9-9z\"/>")
      .name("HeadphonesSharp")
  }
}

export default HeadphonesSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
