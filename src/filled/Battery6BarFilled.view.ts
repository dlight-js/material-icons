import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Battery6BarFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1zm-2 1H9v2h6V6z\"/>")
      .name("Battery6BarFilled")
  }
}

export default Battery6BarFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
