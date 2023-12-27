import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SosSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.5 7h-7v10h7V7zm-2 8h-3V9h3v6zM1 15h4v-2H1V7h6v2H3v2h4v6H1v-2zm16 0h4v-2h-4V7h6v2h-4v2h4v6h-6v-2z\"/>")
      .name("SosSharp")
  }
}

export default SosSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
