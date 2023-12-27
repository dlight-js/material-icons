import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LogoutSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 5h7V3H3v18h9v-2H5z\"/><path d=\"m21 12-4-4v3H9v2h8v3z\"/>")
      .name("LogoutSharp")
  }
}

export default LogoutSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
