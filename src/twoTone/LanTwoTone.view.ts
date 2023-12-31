import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LanTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 7V4h4v3h-4zM9 17v3H5v-3h4zm10 0v3h-4v-3h4z\" opacity=\".3\"/><path d=\"M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3v7zM10 7V4h4v3h-4zM9 17v3H5v-3h4zm10 0v3h-4v-3h4z\"/>")
      .name("LanTwoTone")
  }
}

export default LanTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
