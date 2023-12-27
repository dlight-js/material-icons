import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LaptopWindowsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 18v-1h1.99L22 3H2v14h2v1H0v2h24v-2h-4zM4 5h16v10H4V5z\"/>")
      .name("LaptopWindowsSharp")
  }
}

export default LaptopWindowsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
