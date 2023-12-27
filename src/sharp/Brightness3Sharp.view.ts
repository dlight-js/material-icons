import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Brightness3Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z\"/>")
      .name("Brightness3Sharp")
  }
}

export default Brightness3Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
