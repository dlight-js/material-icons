import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LaptopFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z\"/>")
      .name("LaptopFilled")
  }
}

export default LaptopFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
