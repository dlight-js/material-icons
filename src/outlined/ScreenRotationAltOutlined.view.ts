import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ScreenRotationAltOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5V19z\"/>")
      .name("ScreenRotationAltOutlined")
  }
}

export default ScreenRotationAltOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
