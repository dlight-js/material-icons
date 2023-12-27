import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatSizeTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z\"/>")
      .name("FormatSizeTwoTone")
  }
}

export default FormatSizeTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
