import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Co2Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 9h-5v6h5V9zm-1.5 4.5h-2v-3h2v3zM8 13v2H3V9h5v2H6.5v-.5h-2v3h2V13H8zm10.5 2.5v1h3V18H17v-3.5h3v-1h-3V12h4.5v3.5h-3z\"/>")
      .name("Co2Sharp")
  }
}

export default Co2Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
