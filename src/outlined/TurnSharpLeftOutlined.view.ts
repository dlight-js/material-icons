import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnSharpLeftOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h8c1.1 0 2 .9 2 2v6h-2v-6H8c-1.1 0-2-.9-2-2V6.83z\"/>")
      .name("TurnSharpLeftOutlined")
  }
}

export default TurnSharpLeftOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
