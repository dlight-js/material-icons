import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LabelTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 7H5v10h11l3.55-5z\" opacity=\".3\"/><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z\"/>")
      .name("LabelTwoTone")
  }
}

export default LabelTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
