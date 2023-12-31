import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExitToAppSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM21 3H3v6h2V5h14v14H5v-4H3v6h18V3z\"/>")
      .name("ExitToAppSharp")
  }
}

export default ExitToAppSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
