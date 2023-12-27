import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NavigationFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z\"/>")
      .name("NavigationFilled")
  }
}

export default NavigationFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
