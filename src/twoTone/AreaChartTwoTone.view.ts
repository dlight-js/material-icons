import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AreaChartTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m19 16.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19z\" opacity=\".3\"/><path d=\"m17 7-5-4-5 7-4-3v13h18V7h-4zm2 9.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19v7.95z\"/>")
      .name("AreaChartTwoTone")
  }
}

export default AreaChartTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
