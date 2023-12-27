import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TitleTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 7h5.5v12h3V7H19V4H5z\"/>")
      .name("TitleTwoTone")
  }
}

export default TitleTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
