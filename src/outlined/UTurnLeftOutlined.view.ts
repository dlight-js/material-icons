import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UTurnLeftOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 9v12h-2V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l1.59-1.59L11 13l-4 4-4-4 1.41-1.41L6 13.17V9c0-3.31 2.69-6 6-6s6 2.69 6 6z\"/>")
      .name("UTurnLeftOutlined")
  }
}

export default UTurnLeftOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
