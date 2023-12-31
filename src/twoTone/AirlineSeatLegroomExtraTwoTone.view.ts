import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirlineSeatLegroomExtraTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98A2.019 2.019 0 0 0 14.51 9H11V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z\"/>")
      .name("AirlineSeatLegroomExtraTwoTone")
  }
}

export default AirlineSeatLegroomExtraTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
